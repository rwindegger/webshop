<?php
	require_once('./includes/app.php');

	$artfind = new FinderKunden();
	
	$artfind->setWhere("email = '".$_POST['mail']."'");
	
	$rs = $artfind->getOne();
	
	if($rs['passwort'] == md5($_POST['pass'])) {
		echo "auth";
		$sid = session_id();
		$active = new ActiveSess(array("id" => $sid));
		$active->SetData(array("kunden_id"=>$rs['ID']));
		$active->Update();
	} else {
		echo "nauth";
	}
?>