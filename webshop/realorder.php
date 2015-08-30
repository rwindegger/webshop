<?php
	require_once('./includes/app.php');

	if(isset($_POST['mail']) && isset($_POST['pass']) ) {
		$artfind = new FinderKunden();
		
		$artfind->setWhere("email = '".$_POST['mail']."'");
		
		$rs = $artfind->getOne();
		
		if($rs['passwort'] == md5($_POST['pass'])) {
			echo "ok";
			$actibest = new ActiBestell (array('kundenid'=>$rs['ID'],'timestamp'=>time(),'erl'=>'no'));
			$actibest->Update(true);		
		} else {
			echo "!ok";
		}
	} else {
	}
?>