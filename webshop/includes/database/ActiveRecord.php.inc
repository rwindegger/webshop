<?PHP
	define("AR_LAZY_ALL_AT_ONCE", 1);
	define("AR_LAZY_PER_ONE", 2);
	
	abstract class ActiveRecord {
		private $_initalized = array ();
		protected $_lazytype = AR_LAZY_PER_ONE;
		
		function __construct ( $param = null ) {
			if ( empty ( $this->_tableName ) ) {
				throw new Exception ( 'tableName nicht definiert in der Klasse \'' 
					. get_class ( $this ) . '\'' );
			}
			if ( empty ( $this->_pk ) ) {
				throw new Exception ( 'pk nicht definiert in der Klasse \'' 
					. get_class ( $this ) . '\'' );
			}
			if ( empty ( $this->_fields ) ) {
				throw new Exception ( 'fields nicht definiert in der Klasse \'' 
					. get_class ( $this ) . '\'' );
			}
			if ( count ( $param ) > 0 ) {
				$this->SetData ( $param );
			}
		}
		
		function __set ( $variable , $value ) {
			if ( !in_array ( $variable , $this->_initalized ) && 
				in_array ( $variable , $this->_fields ) ) {
					$this->_initalized[] = $variable;
			}
			$this->$variable = $value;
		}
		
		function __get ( $name ) {
			if ( $this->AllPrimaryKeyIsset () && in_array ( $name , $this->_fields ) ) {
				if ( $this->_lazytype == AR_LAZY_ALL_AT_ONCE ) {
					$sFields = implode ( ', ' , $this->GetUninitalizedVars () );
				} else {
					$sFields = $name;
				}
				foreach ( $this->GetPrimaryKeys () as $sKey => $sVal ) {
					$aKeys[] = $sKey . ' = ' . $this->BeforeQuery ( $sKey , $sVal );
				}
				$SQL = 'SELECT ' . $sFields . ' FROM ' . $this->_tableName . ' WHERE ' . implode ( ', ', $aKeys );
				$RES = mysql_query ( $SQL );
				foreach ( mysql_fetch_assoc ( $RES ) as $sKey => $sVal ) {
					$this->SetData( array ( $sKey => $sVal ) );
				}
				return $this->$name;
			} else {
				return null;
			}
		}
		
		function GetPrimaryKeys () {
			$mRet = array ();
			foreach ( $this->_pk as $sVal ) {
				$mRet[$sVal] = $this->$sVal;
			}
			return $mRet;
		}
		
		function AllPrimaryKeyIsset () {
			foreach ( $this->_pk as $sVal ) {
				if ( !isset ( $this->$sVal ) ) {
					return false;
				}
			}
			return true;
		}
		
		function GetInitalizedVars () {
			return $this->_initalized;
		}
		
		function SetData ( $aArr ) {
			foreach ( @(array)$aArr as $sId => $sVal ) {
				$this->__set ( $sId, $this->AfterSelect( $sId , $sVal ) );
			}
		}
		
		function GetUninitalizedVars () {
			$aRet = array ();
			foreach ( $this->_fields as $val ) {
				if ( !in_array( $val , $this->_initalized ) ) {
					$aRet[] = $val;
				}
			}
			return $aRet;
		}
		
		function Delete () {
			if ( $this->AllPrimaryKeyIsset() ) {
				foreach ( $this->GetPrimaryKeys () as $sKey => $sVal ) {
					$aKeys[] = $sKey . ' = ' . $this->BeforeQuery( $sKey , $sVal );
				}
				$SQL = 'DELETE FROM ' . $this->_tableName . ' WHERE ' . implode (', ',$aKeys);
				mysql_query ( $SQL );
				return true;
			} else {
				return false;
			}
		}
		
		function Update ( $forceInsert = false ) {
			if ( !$this->AllPrimaryKeyIsset () || $forceInsert ) {
				$aVals = array ();
				foreach ( $this->GetInitalizedVars() as $sID => $sVal ) {
					$aVals[$sVal] = $this->BeforeQuery ( $sID , $this->$sVal );
				}
				if ( count ( $aVals ) ) {
					$SQL = 'INSERT INTO ' . $this->_tableName . ' (' .
						implode ( ', ', array_keys($aVals) ) . ') VALUES ('.
						implode ( ', ', $aVals) . ');';
				} else {
					return false;
				}
			} else {
				foreach ( $this->GetPrimaryKeys () as $sKey => $sVal ) {
					$aKeys[] = $sKey . ' = ' . $this->BeforeQuery( $sKey , $sVal);
				}
				foreach ( $this->GetInitalizedVars () as $sVal ) {
					$aVals[] = $sVal . ' = ' . $this->BeforeQuery( $sVal , $this->$sVal );
				}
				if ( count ( $aVals ) > 1 ) {
					$SQL = 'UPDATE ' . $this->_tableName . ' SET ' . implode ( ', ' , $aVals ) . ' WHERE '
						. implode ( ', ' , $aKeys );
				} else {
					return false;
				}
			}
			mysql_query ( $SQL );
			if ( !$this->AllPrimaryKeyIsset () || $forceInsert ) {
				$AI = end( array_reverse ( $this->_pk ) );
				$this->$AI = mysql_insert_id ();
			}
			return true;
		}
		
		function GetFields () {
			return $this->_fields;
		}
		
		function BeforeQuery ( $name , $value = null ) {
			if ( strtoupper ( $value ) == 'NOW()' ) {
				return 'NOW()';
			}
			if ( strtoupper ( $value ) == 'DEFAULT' ) {
				return 'default';
			}
			if ( strtoupper ( substr($value,0,9) ) == 'INET_ATON' ) {
				return $value;
			}
			return '\'' . mysql_escape_string ( $value ) . '\'';
		}
		
		function AfterSelect ( $name, $value = null ) {
			return $value;
		} 	
	}
?>