<?php
	require_once('./includes/app.php');


	$acti = new tmpActiKunden();
	$acti->SetData(array('session_id' => session_id(),'nachname' => $_POST['nachn']));
	$acti->Update(false);

?>