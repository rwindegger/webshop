<?php
	require_once('./includes/app.php');

	$artfind = new FinderKunden();
	
	$artfind->setWhere("email = '".$_POST['mail']."'");
	
	$rs = $artfind->getOne();
	
	if (isset($rs) && !empty($rs)) {
		echo "vorh";
	} else {
		$fnd = new tmpFinderKunden();
		$fnd->setWhere('session_id = \''.session_id().'\'');
		$myrs = $fnd->getOne();
		
		if (isset($myrs) && !empty($myrs)) {
			$upd = false;
		} else {
			$upd = true;
		}
		$acti = new tmpActiKunden();
		$acti->SetData(array('session_id' => session_id(),'email' => $_POST['mail']));
		$acti->Update($upd);
		
		echo "nvorh";
	}
?>