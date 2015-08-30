<?php
	require_once('./includes/app.php');

	$artfind = new FinderArtikel();
	
	$myarts = $artfind->Get();
	
	$xmlp = new SimpleXMLElement($HTTP_RAW_POST_DATA);
	//var_dump($xmlp['nr']);
		
	$artfind->setWhere("art_nr = '".$xmlp['nr']."'");
	
	$rs = $artfind->getOne();
	
	header("Content-Type: application/xml");
	echo "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>";
	$isbn = substr($rs['isbn_nr'],0,3) . "-" . substr($rs['isbn_nr'],3,1) . "-" . substr($rs['isbn_nr'],4,6) . "-" . substr($rs['isbn_nr'],10,2) . "-" . substr($rs['isbn_nr'],12,1);
	echo utf8_encode("<art artnr=\"" . $rs['art_nr'] . "\"><name isbn=\"". $isbn ."\">". $rs['art_name'] ."</name><desc>". $rs['art_desc'] ."</desc><preis netto=\"" . "&#8364; " . number_format($rs['art_preis']/100,"2",",",".") . "\" brutto=\"" . "&#8364; " . number_format($rs['art_preis']*1.2/100,"2",",",".") . "\" /></art>");
?>