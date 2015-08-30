<?php
	require_once('./includes/app.php');


	$acti = new tmpActiKunden();
	$acti->SetData(array('session_id' => session_id(),'vorname' => $_POST['vorn']));
	$acti->Update(false);

?>