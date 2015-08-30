<?php
	require_once('./includes/app.php');

	$katfind = new FinderKategories();
	
	$mykats = $katfind->Get();
	
	header("Content-Type: application/xml");
	echo "<?xml version=\"1.0\" encoding=\"UTF-8\" ?><kategories>";
	foreach($mykats as $kat) {
		echo utf8_encode("<name id=\"".$kat['id']."\">" . $kat['name'] . "</name>");
	}
	echo "</kategories>";
?>