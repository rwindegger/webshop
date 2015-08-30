<?php
	if(isset($_POST['art']) && isset($_POST['anz']) && !empty($_POST['art']) && !empty($_POST['anz'])) {
		require_once('./includes/app.php');
		$sid = session_id();
		
		$finder = new Findbask();
		$finder->setWhere("session_id='".session_id()."' AND art_id='".$_POST['art']."'");
		$rs = $finder->getOne();
		$active = null;

		if( isset($rs['id']) && !empty($rs['id']) ) {
			$active = new Actibask(array("id" => $rs['id']));
			$mydata = array("anzahl" => $_POST['anz']+$rs['anzahl']);
		} else {
			$active = new Actibask(array("session_id" => $sid,"art_id" => $_POST['art']));
			$mydata = array("anzahl" => $_POST['anz']);
		}
		
		$active->SetData($mydata);
		$active->Update();
	}
?>