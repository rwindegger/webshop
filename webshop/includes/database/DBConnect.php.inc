<?PHP 
	abstract class DBConnect {
		private $_link;
		
		function __construct() {
			if ( empty ( $this->_host ) ) {
				throw new Exception ( 'host nicht definiert in der Klasse \'' 
					. get_class ( $this ) . '\'' );
			}
			if ( empty ( $this->_user ) ) {
				throw new Exception ( 'user nicht definiert in der Klasse \'' 
					. get_class ( $this ) . '\'' );
			}
			if ( empty ( $this->_pass ) ) {
				throw new Exception ( 'pass nicht definiert in der Klasse \'' 
					. get_class ( $this ) . '\'' );
			}
			if ( empty ( $this->_database ) ) {
				throw new Exception ( 'database nicht definiert in der Klasse \'' 
					. get_class ( $this ) . '\'' );
			}
			$this->_link = mysql_connect($this->_host,$this->_user,$this->_pass);
			mysql_select_db($this->_database,$this->_link);
		}
		
		function get_link() {
			return $this->_link;
		}
		
		function __destruct() {
			//mysql_close($this->get_link());
		}
	}
?>