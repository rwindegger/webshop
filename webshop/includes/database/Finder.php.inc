<?php
	abstract class Finder {
		protected $defaultfields = array('*');
		protected $fields = null;
		protected $limit = 0;
		protected $offset = 0;
		protected $order = 0;
		protected $where = null;
	  
		public function SetWhere($sWhere) {
			$this->where = $sWhere;
		}
	  
		protected function GetWhere() {
			$aRet = $this->where;
			$this->where=null;
			return $aRet;
	  	}
	  	
	  	public function SetOrder($sOrder) {
			$this->order = $sOrder;
		}
	  	
	  	protected function GetOrder() {
			$aRet = $this->order;
			$this->order=null;
			return $aRet;
	  	}
	  
		public function SetLimit($iLimit) {
			$this->limit = $iLimit;
		}
	  
		protected function GetLimit() {
			$aRet = $this->limit;
			$this->limit = 0;
			return $aRet;
		}
	  
		public function SetOffset($iOffset) {
			$this->offset = $iOffset;
		}
	  
		protected function GetOffset() {
			$aRet = $this->offset;
			$this->offset = 0;
			return $aRet;
		}
	  
		public function SetFields($aFields) {
			$this->fields = $aFields;
		}
	  
		protected function GetFields() {
			if(empty($this->fields)) {
				return $this-> defaultfields;
			}
			$aRet = $this->fields;
			$this->fields = null;
			return $aRet;
		}
	  
	  	function __construct() {
		    if(empty($this->_tableName)) {
		    	throw new Exception ('tableName nicht definiert in der Klasse \''.get_class($this).'\'');
			}
	  	}
	
		function Get() {
	    	$iLimit =$this->GetLimit();
	    	$iOffset = $this->GetOffset();
	    	$where = $this->GetWhere();
	    	$order = $this->GetOrder();
	    	$SQL = 'SELECT ' . implode(', ',$this->GetFields()) . ' FROM ' 
				   . $this->_tableName .(!empty($where)?(' WHERE '.$where.'') : ('') ) 
				   . ' ' .(!empty($order)?(' ORDER BY ' . $order) : '') . ($iLimit > 0?(' LIMIT '.$iOffset.','.$iLimit):'');
			$RES = mysql_query($SQL);
	    	$aRet = array();
	    	while($AFR = @mysql_fetch_assoc($RES)) {
	      		$aRet[] = $AFR;//new $this->returnType($AFR);
	    	}
	    	return $aRet;
		}
	
	  	function GetOne() {
	    	$iLimit = $this->GetLimit();
	    	$iOffset = $this->GetOffset();
	    	$where = $this->GetWhere();
	    	$order = $this->GetOrder();
	    	$SQL = 'SELECT ' . implode(', ' ,$this->GetFields()) 
			       . ' FROM ' . $this->_tableName 
				   . ( !empty($where)?(' WHERE ' . $where . ''): ('') ) 
				   . (!empty($order)?(' ORDER BY ' . $order . '') : ('')) . ' LIMIT 1';
	    	$RES = mysql_query($SQL);
	    	return @mysql_fetch_assoc($RES);//new $this->returnType(mysql_fetch_assoc($RES));
	  	}
	}
?>