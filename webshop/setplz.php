<?php
	require_once('./includes/app.php');


	$acti = new tmpActiKunden();
	$acti->SetData(array('session_id' => session_id(),'plz' => $_POST['plz']));
	$acti->Update(false);

?>