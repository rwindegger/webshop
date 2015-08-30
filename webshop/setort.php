<?php
	require_once('./includes/app.php');


	$acti = new tmpActiKunden();
	$acti->SetData(array('session_id' => session_id(),'ort' => $_POST['ort']));
	$acti->Update(false);

?>