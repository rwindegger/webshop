<?php 
abstract class Session {
	function __construct () {
		
		if ( empty ( $this->_tab ) ) {
			throw new Exception ( 'Tabelle nicht definiert in der Klasse \'' 
					. get_class ( $this ) . '\'' );
		}
		if ( !isset ($_COOKIE['PHPSESSID']) || empty ($_COOKIE['PHPSESSID']) ) {
			$string = "myultrashop".$_SERVER['REMOTE_ADDR'].time().rand().$_SERVER['REMOTE_PORT'];
			$sid = md5($string);
			session_id($sid);
		}
		ini_set("session.gc_maxlifetime",1209600);
		session_set_cookie_params(1209600);
		session_start();
		$sid = session_id();

		$active = new $this->_tab['acti'](array("id" => $sid));
		
		$active->SetData(array("remoteaddr"=>"INET_ATON('".$_SERVER['REMOTE_ADDR']."')","kunden_id"=>0));
		
		$active->Update(true);
		
	}
}
?>