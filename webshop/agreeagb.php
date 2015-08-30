<?php
	require_once('./includes/app.php');

	$finder = new tmpFinderKunden();
	$finder->setWhere("session_id = '".session_id()."'");
	$rs = $finder->getOne();
	
	$acti = new ActiKunden();
	$acti->SetData(array('email'=>$rs['email'],'passwort'=>$rs['passwort'],'vorname'=>$rs['vorname'],'nachname'=>$rs['nachname'],'strasse'=>$rs['strasse'],'plz'=>$rs['plz'],'ort'=>$rs['ort']));
	$acti->Update();
	
	$acti = new tmpActiKunden(array('session_id' => session_id()));
	$acti->Delete();
?>