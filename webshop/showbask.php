<?php
	require_once('./includes/app.php');
	$finder = new Findbask();
	$finder->setFields(array("a.id","a.anzahl","b.art_name","b.art_preis*1.2/100 as art_preis","a.anzahl*b.art_preis*1.2/100 as preis_ges"));
	$finder->setWhere("b.art_nr = a.art_id AND a.session_id = '" . session_id() . "'");
	$rs = $finder->Get();
	header("Content-Type: application/xml");
	$preiswk = 0;
	$ausg = "";
	foreach ($rs as $zeile) {
		$preiswk += $zeile['preis_ges'];
		$ausg .= "<eintrag id=\"".$zeile['id']."\" anzahl=\"".$zeile['anzahl']."\"><artname>".$zeile['art_name']."</artname><preis einzeln=\"&#8364; ".number_format($zeile['art_preis'],2,",",".")."\" gesamt=\"&#8364; ".number_format($zeile['preis_ges'],2,",",".")."\" /></eintrag>";
	}
	$ausg = "<?xml version=\"1.0\" encoding=\"utf-8\"?><warenkorb preis=\"&#8364; ".number_format($preiswk,2,",",".")."\">" . $ausg;
	$ausg .= "</warenkorb>";
	echo utf8_encode($ausg);
?>