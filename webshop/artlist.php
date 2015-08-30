<?php
	require_once('./includes/app.php');

	$artfind = new FinderArtikel();
	
	//var_dump($_POST);
	
	if(isset($_POST['kat']) && $_POST['kat'] != 0) {
		$artfind->setWhere("art_kat = ".$_POST['kat']);
	}
	
	$myarts = $artfind->Get();
	
	header("Content-Type: application/xml");
	echo "<?xml version=\"1.0\" encoding=\"UTF-8\" ?><artlist>";
	foreach($myarts as $art) {
		echo utf8_encode("<art artnr=\"" . $art['art_nr'] . "\"><name>". substr($art['art_name'],0,20) ."...</name><desc>". substr($art['art_desc'],0,40) ."...</desc><preis netto=\"" . "&#8364; " . number_format($art['art_preis']/100,"2",",",".") . "\" brutto=\"" . "&#8364; " . number_format($art['art_preis']*1.2/100,"2",",",".") . "\" /></art>");
	}
	echo "</artlist>";
?>