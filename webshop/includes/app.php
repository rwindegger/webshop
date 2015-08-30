<?php
	require_once('database/Database.php.inc');
	require_once('session.inc.php');
	
	class ActiveArtikel extends ActiveRecord {
		protected $_tableName = 'tbl_artikel';
		protected $_pk = array ( 'art_nr' );
		protected $_fields = array ( 'art_nr','isbn_nr','art_name','art_desc','art_preis','art_kat','art_aktion' );
	}
	
	class FinderArtikel extends Finder {
		protected $_tableName = 'tbl_artikel';
	}
	
	class ActiveKategories extends ActiveRecord {
		protected $_tableName = 'tbl_kat';
		protected $_pk = array ( 'id' );
		protected $_fields = array ( 'id','name' );
	}
	
	class FinderKategories extends Finder {
		protected $_tableName = 'tbl_kat';
	}
	
	class ActiveSess extends ActiveRecord {
		protected $_tableName = 'tbl_session';
		protected $_pk = array ( 'id' );
		protected $_fields = array ( 'id','remoteaddr','kunden_id' );
	}
	
	class FinderSess extends Finder {
		protected $_tableName = 'tbl_session';
	}
	
	class Actibask extends ActiveRecord {
		protected $_tableName = 'tbl_warenkorb';
		protected $_pk = array ( 'id' );
		protected $_fields = array ( 'id','session_id','art_id','anzahl' );
	}
	
	class Findbask extends Finder {
		protected $_tableName = 'tbl_warenkorb a, tbl_artikel b';
	}
	
	class ActiKunden extends ActiveRecord {
		protected $_tableName = 'tbl_kunden';
		protected $_pk = array ( 'id' );
		protected $_fields = array ( 'id','email','passwort','vorname','nachname','strasse','plz','ort' );
	}
	
	class FinderKunden extends Finder {
		protected $_tableName = 'tbl_kunden';
	}
	
	class tmpActiKunden extends ActiveRecord {
		protected $_tableName = 'tmp_kunden';
		protected $_pk = array ( 'session_id' );
		protected $_fields = array ( 'session_id','email','passwort','vorname','nachname','strasse','plz','ort' );
	}
	
	class tmpFinderKunden extends Finder {
		protected $_tableName = 'tmp_kunden';
	}
	
	class ActiBestell extends ActiveRecord {
		protected $_tableName = 'tbl_bestell2kunde';
		protected $_pk = array ( 'id' );
		protected $_fields = array ( 'id','kundenid','timestamp','erl' );
	}
	
	class FinderBestell extends Finder {
		protected $_tableName = 'tbl_bestell2kunde';
	}
	
	class ActiBestellung extends ActiveRecord {
		protected $_tableName = 'tbl_bestellung';
		protected $_pk = array ( 'id' );
		protected $_fields = array ( 'id','bestell_id','art_nr','anzahl' );
	}
	
	class FinderBestellung extends Finder {
		protected $_tableName = 'tbl_bestellung';
	}
	
	class DB extends DBConnect {
		protected $_host = 'localhost';
		protected $_user = 'databaseusername';
		protected $_pass = 'databasepassword';
		protected $_database = 'webshop';
	}
	
	class mySession extends Session {
		protected $_tab = array('find' => 'FinderSess','acti' => 'ActiveSess');
	}
	
	$db = new DB();
	
	$session = new mySession();
?>