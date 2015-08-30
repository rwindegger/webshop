<?php
	if(isset($_POST['id']) && isset($_POST['anz']) && !empty($_POST['id']) ) {
		require_once('./includes/app.php');
		$sid = session_id();
		$active = new Actibask(array("id"=>$_POST['id']));
		if($_POST['anz'] != 0) {
			$mydata = array("anzahl" => $_POST['anz']);
		
			$active->SetData($mydata);
			$active->Update();
		} else {
			$active->Delete();
		}
	}
?>