<?php
	require_once('./includes/app.php');


	$acti = new tmpActiKunden();
	$acti->SetData(array('session_id' => session_id(),'strasse' => $_POST['street']));
	$acti->Update(false);

?>