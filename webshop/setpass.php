<?php
	require_once('./includes/app.php');


	$acti = new tmpActiKunden();
	$acti->SetData(array('session_id' => session_id(),'passwort' => md5($_POST['pass'])));
	$acti->Update(false);

?>