<?php
	require_once('./includes/app.php');

	if(isset($_POST['mail']) && isset($_POST['pass']) ) {
		$artfind = new FinderKunden();
		
		$artfind->setWhere("email = '".$_POST['mail']."'");
		
		$rs = $artfind->getOne();
		
		if($rs['passwort'] == md5($_POST['pass'])) {
			header("Content-Type: application/xml");
			$sid = session_id();
			$active = new ActiveSess(array("id" => $sid));
			$active->SetData(array("kunden_id"=>$rs['ID']));
			$active->Update();
			$ausg = "";
	
			$finder = new Findbask();
			$finder->setFields(array("a.id","a.anzahl","b.art_name","b.art_preis*1.2/100 as art_preis","a.anzahl*b.art_preis*1.2/100 as preis_ges"));
			$finder->setWhere("b.art_nr = a.art_id AND a.session_id = '" . session_id() . "'");
			$rs1 = $finder->Get();
			header("Content-Type: application/xml");
			$preiswk = 0;
	
			foreach ($rs1 as $zeile) {
				$preiswk += $zeile['preis_ges'];
				$ausg .= "<eintrag id=\"".$zeile['id']."\" anzahl=\"".$zeile['anzahl']."\"><artname>".utf8_encode($zeile['art_name'])."</artname><preis einzeln=\"&#8364; ".number_format($zeile['art_preis'],2,",",".")."\" gesamt=\"&#8364; ".number_format($zeile['preis_ges'],2,",",".")."\" /></eintrag>";
			}
			$ausg .= "<eintrag id=\"nn\" anzahl=\"1\"><artname>Nachname(Porto &amp; Verpackung)</artname><preis einzeln=\"&#8364; ".number_format(15,2,",",".")."\" gesamt=\"&#8364; ".number_format(15,2,",",".")."\" /></eintrag>";
			$ausg = "<?xml version=\"1.0\" encoding=\"utf-8\"?><rechnung name=\"".$rs['vorname']." ".$rs['nachname']."\" strasse=\"".$rs['strasse']."\" plz=\"".$rs['plz']."\" ort=\"".$rs['ort']."\" preis=\"&#8364; ".number_format($preiswk+8,2,",",".")."\">" . $ausg . "</rechnung>";
			echo $ausg;
			
		}
	} else {
	}
?>