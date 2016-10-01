function erzXMLAsync () {
    var erstObj = null;
    try {
		erstObj = new ActiveXObject("Microsoft.XMLHTTP");	// Ältere MS derivate
    } catch (Error) {
		try {
	    	erstObj = new ActiveXObject("MSXML2.XMLHTTP");	// Aktuelle MS derivate
		} catch (Error) {
	    	try {
				erstObj = new XMLHttpRequest();			// Andere Browser
	   		} catch (Error) {
				showError("Fehler bei erzeugung.");			// Erzeugung nicht möglich
	    	}
		}
    }
    return erstObj;
}

function loadAGB () {
	objAGB = erzXMLAsync();
	objAGB.open("get","./agb.xml",true);
	objAGB.onreadystatechange = readyAGB;
	objAGB.send(null);
}

function readyAGB () {
	info = document.getElementById("Info");
	switch (objAGB.readyState) {
		case 0:
			info.innerHTML = "uninitialized...";
			break;
		case 1:
			info.innerHTML = "initialized...";
			break;
		case 2:
			info.innerHTML = "sent...";
			break;
		case 3:
			info.innerHTML = "loading...";
			break;
		case 4:
			if (objAGB.status == 200) {
				info.innerHTML = "ready...";
				viewAGB(objAGB.responseXML);
			} else {
				info.innerHTML = "Error...";
			}
			break;
	}
}

function viewAGB (myxml) {
	myname = "agb"+Math.random();
	createWindow("Allgemeine Gesch%E4ftsbedingung",myname,0,0,450,500,1,1,0);
	mydiv = document.createElement("div");
	myhead = document.createElement("div");
	myheadtext = document.createTextNode(myxml.lastChild.firstChild.firstChild.nodeValue);
	myhead.appendChild(myheadtext);
	myhead.style.fontWeight = "bold";
	myhead.style.fontSize = "25px";
	mydiv.appendChild(myhead);
	mydiv.style.overflow = "scroll";
	mydiv.style.height = "450px";
	for ( i=1;i<myxml.lastChild.childNodes.length;i++ ) {
		myabs = document.createElement("div");
		myabsueb = document.createElement("div");
		myabsueb.appendChild(document.createTextNode(myxml.lastChild.childNodes[i].childNodes[0].childNodes[0].nodeValue));
		myabsueb.style.fontSize = "20px";
		myabsueb.style.fontWeight = "bold";
		myabstext = document.createElement("div");
		myabstext.appendChild(document.createTextNode(myxml.lastChild.childNodes[i].childNodes[1].childNodes[0].nodeValue));
		myabs.appendChild(myabsueb);
		myabs.appendChild(myabstext);
		mydiv.appendChild(myabs);
	}
	document.getElementById(myname).appendChild(mydiv);
	objAGB = null;
}

var objArtListtit = null;

function loadArtList(mytitle,mykat) {
	objArtList = erzXMLAsync();
	objArtListtit = mytitle;
	objArtList.open("post","./artlist.php",true);
	requeststring = "kat="+mykat;
	objArtList.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	objArtList.onreadystatechange = readyArtList;
	objArtList.send(requeststring);
}

function readyArtList () {
	info = document.getElementById("Info");
	switch (objArtList.readyState) {
		case 0:
			info.innerHTML = "uninitialized...";
			break;
		case 1:
			info.innerHTML = "initialized...";
			break;
		case 2:
			info.innerHTML = "sent...";
			break;
		case 3:
			info.innerHTML = "loading...";
			break;
		case 4:
			if (objArtList.status == 200) {
				info.innerHTML = "ready...";
				viewArtList(objArtListtit,objArtList.responseXML);
			} else {
				info.innerHTML = "Error...";
			}
			break;
	}
}

function viewArtList (mytitle,myxml) {
	myname = "artlist"+Math.random();
	createWindow(mytitle,myname,0,0,450,600,1,1,0);
	mydiv = document.createElement("div");
	myhead = document.createElement("div");
	myheadtext = document.createTextNode("Gefundene Artikel");
	myhead.appendChild(myheadtext);
	myhead.style.fontWeight = "bold";
	myhead.style.fontSize = "25px";
	mydiv.appendChild(myhead);
	mydiv.style.overflow = "scroll";
	mydiv.style.height = "450px";
	if (navigator.appName != "Microsoft Internet Explorer" ) {
		table = "table";
		tr = "tr";
		td = "td";
		tablest = "table";
		tabler = "table-row";
		tablec = "table-cell";
	} else {
		table = "div";
		tr = "div";
		td = "span";
		tablest = "block";
		tabler = "block";
		tablec = "inline";
	}
	
	mytable = document.createElement(table);
	mytable.style.border = "1px solid";
	mytable.style.width = "100%";
	mytable.style.display = tablest;
	
	
	for(i=0;i<myxml.lastChild.childNodes.length;i++) {
		mytr = document.createElement(tr);
		mytr.style.display = "block";
		mytr.style.width = "100%";
		mytr.style.margin = "0";
		mytr.style.display = tabler;
		mytr.style.cursor = "default";
		
		mytr.onmouseover = new Function("this.style.backgroundColor = \"#D3D3D3\";");
		mytr.onmouseout = new Function("this.style.backgroundColor = \"#FFFFFF\"");
		
		mytr.onclick = new Function("loadArt(\""+unescape(myxml.lastChild.childNodes[i].getAttributeNode("artnr").nodeValue)+"\");");
		
		mytd1 = document.createElement(td);
		mytd1.appendChild(document.createTextNode(unescape(myxml.lastChild.childNodes[i].childNodes[0].childNodes[0].nodeValue)));
		mytd1.style.border = "1px solid";
		mytd1.style.width = "30%";
		mytd1.style.height = "20px";
		mytd1.style.display = tablec;
		
		mytd2 = document.createElement(td);
		mytd2.appendChild(document.createTextNode(unescape(myxml.lastChild.childNodes[i].childNodes[1].childNodes[0].nodeValue)));
		mytd2.style.border = "1px solid";
		mytd2.style.width = "60%";
		mytd2.style.height = "20px";
		mytd2.style.display = tablec;
		
		mytd3 = document.createElement(td);
		mytd3.appendChild(document.createTextNode(unescape(myxml.lastChild.childNodes[i].childNodes[2].getAttributeNode("brutto").nodeValue)));
		mytd3.style.border = "1px solid";
		mytd3.style.width = "10%";
		mytd3.style.height = "20px";
		mytd3.style.display = tablec;
		
		mytr.appendChild(mytd1);
		mytr.appendChild(mytd2);
		mytr.appendChild(mytd3);
		mytable.appendChild(mytr);
	}

	mydiv.appendChild(mytable);

	document.getElementById(myname).appendChild(mydiv);
	objArtList = null;
	objArtListtit = null;
}

function loadArt (artnr) {
	objArt = erzXMLAsync();
	objArt.open("post","./artdesc.php",true);
	objArt.onreadystatechange = readyArt;
	requeststring = "<?xml version=\"1.0\" encoding=\"utf-8\"?><art nr=\""+artnr+"\" />"
	objArt.send(requeststring);
}

function readyArt () {
	info = document.getElementById("Info");
	switch (objArt.readyState) {
		case 0:
			info.innerHTML = "uninitialized...";
			break;
		case 1:
			info.innerHTML = "initialized...";
			break;
		case 2:
			info.innerHTML = "sent...";
			break;
		case 3:
			info.innerHTML = "loading...";
			break;
		case 4:
			if (objArt.status == 200) {
				info.innerHTML = "ready...";
				viewArt(objArt.responseXML);
			} else {
				info.innerHTML = "Error...";
			}
			break;
	}
}

function viewArt(myxml) {
	myname = "art"+Math.random();
	createWindow(myxml.lastChild.firstChild.firstChild.nodeValue,myname,0,0,450,500,1,1,0);
	mydiv = document.createElement("div");
	myhead = document.createElement("div");
	myheadtext = document.createTextNode(myxml.lastChild.firstChild.firstChild.nodeValue);
	myhead.appendChild(myheadtext);
	myhead.style.fontWeight = "bold";
	myhead.style.fontSize = "25px";
	mydiv.appendChild(myhead);
	mydiv.style.overflow = "scroll";
	mydiv.style.height = "450px";
	myimg = document.createElement("img");
	myimgsrc = document.createAttribute("src");
	myimgsrc.nodeValue = "./img/ul/big/" + myxml.lastChild.getAttributeNode("artnr").nodeValue + ".jpg";
	myimg.setAttributeNode(myimgsrc);
	mydesc = document.createElement("div");
	mydesc.appendChild(document.createTextNode(myxml.lastChild.childNodes[1].firstChild.nodeValue));
	
	myisbn = document.createElement("div");
	myisbn.appendChild(document.createTextNode("ISBN 13: " + myxml.lastChild.firstChild.getAttributeNode("isbn").nodeValue));
	myprice = document.createElement("div");
	myprice.appendChild(document.createTextNode("Preis: " + myxml.lastChild.lastChild.getAttributeNode("brutto").nodeValue + " inkl. MwSt."));
	
	myform = document.createElement("form");
		
	myforminput = document.createElement("input");
	myforminputtype = document.createAttribute("type");
	myforminputtype.nodeValue = "text";
	myforminputval = document.createAttribute("value");
	myforminputval.nodeValue = "1";
	myforminputid = document.createAttribute("id");
	myinid = "quantiti"+Math.random();
	myforminputid.nodeValue = myinid;
	myforminput.setAttributeNode(myforminputid);
	myforminput.setAttributeNode(myforminputval);
	myforminput.setAttributeNode(myforminputtype);
	
	myform.onsubmit = new Function ("addBasket(\"" + myxml.lastChild.getAttributeNode("artnr").nodeValue + "\",\""+myinid+"\");return false;");
	
	myformsubm = document.createElement("input");
	myformsubmtype = document.createAttribute("type");
	myformsubmtype.nodeValue = "submit";
	myformsubmval = document.createAttribute("value");
	myformsubmval.nodeValue = "In den Warenkorb";
	myformsubm.setAttributeNode(myformsubmval);
	myformsubm.setAttributeNode(myformsubmtype);
	
	myform.appendChild(myforminput);
	myform.appendChild(myformsubm);
		
	mydiv.appendChild(myimg);
	mydiv.appendChild(mydesc);
	mydiv.appendChild(myisbn);
	mydiv.appendChild(myprice);
	mydiv.appendChild(myform);
	document.getElementById(myname).appendChild(mydiv);
	objArt = null;
}

function getKategorien () {
	objKat = erzXMLAsync();
	objKat.open("post","./kategories.php",true);
	objKat.onreadystatechange = readyKat;
	objKat.send(null);
}

function readyKat () {
	info = document.getElementById("Info");
	switch (objKat.readyState) {
		case 0:
			info.innerHTML = "uninitialized...";
			break;
		case 1:
			info.innerHTML = "initialized...";
			break;
		case 2:
			info.innerHTML = "sent...";
			break;
		case 3:
			info.innerHTML = "loading...";
			break;
		case 4:
			if (objKat.status == 200) {
				info.innerHTML = "ready...";
				viewKat(objKat.responseXML);
			} else {
				info.innerHTML = "Error...";
			}
			break;
	}
}

function viewKat (myxml) {
	addStartMenu (document.createTextNode(unescape("Alle Anzeigen")),"javascript:loadArtList(\"Alle Anzeigen\",0);");
	for (i=0;i<myxml.lastChild.childNodes.length;i++) {
		em = document.createElement("blockquote");
		em.appendChild(document.createTextNode(myxml.lastChild.childNodes[i].firstChild.nodeValue));
		addStartMenu (em,"javascript:loadArtList(\"" + myxml.lastChild.childNodes[i].firstChild.nodeValue + "\"," + myxml.lastChild.childNodes[i].getAttributeNode("id").nodeValue + ");");
	}
}

function addBasket(myartnr,myquantiti) {
	quant = document.getElementById(myquantiti).value;
	requeststring = "art="+myartnr+"&anz="+quant;
	
	objBask = erzXMLAsync();
	objBask.open("post","./addbask.php",true);
	objBask.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	objBask.onreadystatechange = readyBask;
	objBask.send(requeststring);
}

function readyBask () {
	info = document.getElementById("Info");
	switch (objBask.readyState) {
		case 0:
			info.innerHTML = "uninitialized...";
			break;
		case 1:
			info.innerHTML = "initialized...";
			break;
		case 2:
			info.innerHTML = "sent...";
			break;
		case 3:
			info.innerHTML = "loading...";
			break;
		case 4:
			if (objBask.status == 200) {
				info.innerHTML = "ready...";
				showBask();
			} else {
				info.innerHTML = "Error...";
			}
			break;
	}
}

function showBask() {
	objBask = erzXMLAsync();
	objBask.open("post","./showbask.php",true);
	objBask.onreadystatechange = readysBask;
	objBask.send(null);
}

function readysBask () {
	info = document.getElementById("Info");
	switch (objBask.readyState) {
		case 0:
			info.innerHTML = "uninitialized...";
			break;
		case 1:
			info.innerHTML = "initialized...";
			break;
		case 2:
			info.innerHTML = "sent...";
			break;
		case 3:
			info.innerHTML = "loading...";
			break;
		case 4:
			if (objBask.status == 200) {
				info.innerHTML = "ready...";
				viewBask(objBask.responseXML);
			} else {
				info.innerHTML = "Error...";
			}
			break;
	}
}

function viewBask(myxml) {
	myname = "warenkorb";
	mycont = "warenkorbinh";
	if(!document.getElementById(mycont)) {
		createWindow("Warenkorb",myname,0,0,450,500,1,1,0);
		mydiv = document.createElement("div");
		mydivid = document.createAttribute("id");
		mydivid.nodeValue=mycont
		mydiv.setAttributeNode(mydivid);
		mydiv.style.overflow = "scroll";
		mydiv.style.width = "100%";
		mydiv.style.height = "450px";
		document.getElementById(myname).appendChild(mydiv);
	} else {
		mydiv = document.getElementById(mycont);
	}
	
	if (navigator.appName != "Microsoft Internet Explorer" ) {
		table = "table";
		tr = "tr";
		td = "td";
		tablest = "table";
		tabler = "table-row";
		tablec = "table-cell";
	} else {
		table = "div";
		tr = "div";
		td = "span";
		tablest = "block";
		tabler = "block";
		tablec = "inline";
	}
	
	mytable = document.createElement(table);
	mytable.style.border = "1px solid";
	mytable.style.width = "100%";
	mytable.style.display = tablest;
	
	mytr = document.createElement(tr);
	mytr.style.display = "block";
	mytr.style.width = "100%";
	mytr.style.margin = "0";
	mytr.style.display = tabler;
	mytr.style.cursor = "default";
	
	mytd1 = document.createElement(td);
	mytd1.appendChild(document.createTextNode("St."));
	mytd1.style.border = "1px solid";
	mytd1.style.width = "4%";
	mytd1.style.height = "20px";
	mytd1.style.display = tablec;
		
	mytd2 = document.createElement(td);
	mytd2.appendChild(document.createTextNode("Beschreibung"));
	mytd2.style.border = "1px solid";
	mytd2.style.width = "65%";
	mytd2.style.height = "20px";
	mytd2.style.display = tablec;
		
	mytd3 = document.createElement(td);
	mytd3.appendChild(document.createTextNode("Preis/St."));
	mytd3.style.border = "1px solid";
	mytd3.style.width = "15%";
	mytd3.style.height = "20px";
	mytd3.style.display = tablec;
	
	mytd4 = document.createElement(td);
	mytd4.appendChild(document.createTextNode("ges Preis"));
	mytd4.style.border = "1px solid";
	mytd4.style.width = "15%";
	mytd4.style.height = "20px";
	mytd4.style.display = tablec;
		
	mytr.appendChild(mytd1);
	mytr.appendChild(mytd2);
	mytr.appendChild(mytd3);
	mytr.appendChild(mytd4);
	mytable.appendChild(mytr);
	
	for(i=0;i<myxml.lastChild.childNodes.length;i++) {
		mytr = document.createElement(tr);
		mytr.style.display = "block";
		mytr.style.width = "100%";
		mytr.style.margin = "0";
		mytr.style.display = tabler;
		mytr.style.cursor = "default";
		
		mytd1 = document.createElement(td);
		
		mystk = document.createElement("input");
		mystk.style.width = "100%";
		mystk.style.height = "100%";
		mystk.onchange = new Function("updateBask(\"" + myxml.lastChild.childNodes[i].getAttributeNode("id").nodeValue + "\",this,"+myxml.lastChild.childNodes[i].getAttributeNode("anzahl").nodeValue + ");");
		mystkv = document.createAttribute("value");
		mystkv.nodeValue = myxml.lastChild.childNodes[i].getAttributeNode("anzahl").nodeValue;
		mystk.setAttributeNode(mystkv);
		mystk.style.margin = "0";
		mystk.style.padding = "0";
		mystk.style.border = "0";
		mystk.style.backgroundColor = "#DDDDDD";
		mystk.style.textAlign = "center";
		
		mytd1.appendChild(mystk);
		mytd1.style.border = "1px solid";
		mytd1.style.width = "4%";
		mytd1.style.height = "20px";
		mytd1.style.display = tablec;
		mytd1.style.overflow = "hidden";
		mytd1.style.backgroundColor = "#DDDDDD";
		
		mytd2 = document.createElement(td);
		mytd2.appendChild(document.createTextNode(myxml.lastChild.childNodes[i].firstChild.firstChild.nodeValue));
		mytd2.style.border = "1px solid";
		mytd2.style.width = "65%";
		mytd2.style.height = "20px";
		mytd2.style.display = tablec;
		
		mytd3 = document.createElement(td);
		mytd3.appendChild(document.createTextNode(myxml.lastChild.childNodes[i].lastChild.getAttributeNode("einzeln").nodeValue));
		mytd3.style.border = "1px solid";
		mytd3.style.width = "15%";
		mytd3.style.height = "20px";
		mytd3.style.display = tablec;
		
		mytd4 = document.createElement(td);
		mytd4.appendChild(document.createTextNode(myxml.lastChild.childNodes[i].lastChild.getAttributeNode("gesamt").nodeValue));
		mytd4.style.border = "1px solid";
		mytd4.style.width = "15%";
		mytd4.style.height = "20px";
		mytd4.style.display = tablec;
		
		mytr.appendChild(mytd1);
		mytr.appendChild(mytd2);
		mytr.appendChild(mytd3);
		mytr.appendChild(mytd4);
		mytable.appendChild(mytr);
	}
	
	mytr = document.createElement(tr);
	mytr.style.display = "block";
	mytr.style.width = "100%";
	mytr.style.margin = "0";
	mytr.style.display = tabler;
	mytr.style.cursor = "default";
	
	mytd1 = document.createElement(td);
	mytd1.appendChild(document.createTextNode("--"));
	mytd1.style.border = "1px solid";
	mytd1.style.width = "4%";
	mytd1.style.height = "20px";
	mytd1.style.display = tablec;
		
	mytd2 = document.createElement(td);
	mytd2.appendChild(document.createTextNode("Gesamt"));
	mytd2.style.border = "1px solid";
	mytd2.style.width = "65%";
	mytd2.style.height = "20px";
	mytd2.style.display = tablec;
		
	mytd3 = document.createElement(td);
	mytd3.appendChild(document.createTextNode("--"));
	mytd3.style.border = "1px solid";
	mytd3.style.width = "15%";
	mytd3.style.height = "20px";
	mytd3.style.display = tablec;
	
	mytd4 = document.createElement(td);
	mytd4.appendChild(document.createTextNode(myxml.lastChild.getAttributeNode("preis").nodeValue));
	mytd4.style.border = "1px solid";
	mytd4.style.width = "15%";
	mytd4.style.height = "20px";
	mytd4.style.display = tablec;
		
	mytr.appendChild(mytd1);
	mytr.appendChild(mytd2);
	mytr.appendChild(mytd3);
	mytr.appendChild(mytd4);
	mytable.appendChild(mytr);
	
	myorder = document.createElement("input");
	myordertype = document.createAttribute("type");
	myordertype.nodeValue = "button";
	myorder.setAttributeNode(myordertype);
	myorder.value = "Bestellen...";
	myorder.onclick = new Function ("sendOrder();");
	
	
	mydiv.innerHTML="";
	mydiv.appendChild(mytable);
	mydiv.appendChild(myorder);
}

function updateBask(myid,myvalue,lastanz) {
	if (!isNaN(myvalue.value)) {
		requeststring = "id="+myid+"&anz="+myvalue.value;
		objBask = erzXMLAsync();
		objBask.open("post","./updbask.php",true);
		objBask.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		objBask.onreadystatechange = readyuBask;
		objBask.send(requeststring);
	} else {
		myvalue.value = lastanz;
	}
}

function readyuBask () {
	info = document.getElementById("Info");
	switch (objBask.readyState) {
		case 0:
			info.innerHTML = "uninitialized...";
			break;
		case 1:
			info.innerHTML = "initialized...";
			break;
		case 2:
			info.innerHTML = "sent...";
			break;
		case 3:
			info.innerHTML = "loading...";
			break;
		case 4:
			if (objBask.status == 200) {
				info.innerHTML = "ready...";
				showBask();
			} else {
				info.innerHTML = "Error...";
			}
			break;
	}
}

var logedin = 0;
var logedinuser = "";
var logedinpass = "";

function showLogin () {
	myname = "login";
	mycont = "loginh";
	if(!document.getElementById(mycont)) {
		createWindow("Anmelden",myname,0,0,100,200,1,0,0);
		mydiv = document.createElement("div");
		mydivid = document.createAttribute("id");
		mydivid.nodeValue=mycont;
		mydiv.setAttributeNode(mydivid);
		document.getElementById(myname).appendChild(mydiv);
	} else {
		mydiv = document.getElementById(mycont);
	}
	if (logedin == 0) {
		mydivu = document.createElement("div");
		mydesc = document.createTextNode("E-Mail:");
		mydivu.appendChild(mydesc);
		mydivu.style.marginTop = "5px";
		mydivu.style.marginLeft = "25px";
		
		myuname = document.createElement("input");
		myuname.onchange = new Function ("userChange(this.value);");
		myuname.style.width = "150px";
		if (navigator.appName != "Microsoft Internet Explorer" ) {
			myuname.style.height = "15px";
		} else {
			myuname.style.height = "18px";
		}

		mydivu.appendChild(myuname);
		
		mydivp = document.createElement("div");
		mydescp = document.createTextNode("Passwort:");
		mydivp.appendChild(mydescp);
		mydivp.style.marginTop = "5px";
		mydivp.style.marginLeft = "25px";
		
		mypass = document.createElement("input");
		mypass.onchange = new Function ("authent(this.value);");
		mypasst = document.createAttribute("type");
		mypasst.nodeValue = "password";
		mypass.setAttributeNode(mypasst);
		mypass.style.width = "150px";
		if (navigator.appName != "Microsoft Internet Explorer" ) {
			mypass.style.height = "15px";
		} else {
			mypass.style.height = "18px";
		}
		
		mydivp.appendChild(mypass);
		
		mydiv.appendChild(mydivu);
		mydiv.appendChild(mydivp);
	} else {
		closeWindow(myname);
	}
}

var mail = null;
var myuname = "";
function userChange(mymail) {
	if (mymail != "") {
		requeststring = "mail="+mymail;
		mail = mymail;
		myuname = mail;
		objMailTest = erzXMLAsync();
		objMailTest.open("post","./checkmail.php",true);
		objMailTest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		objMailTest.onreadystatechange = readyCheckMail;
		objMailTest.send(requeststring);
	} else {
		myuname = "";
		mail = "";
	}
}

function readyCheckMail () {
	info = document.getElementById("Info");
	switch (objMailTest.readyState) {
		case 0:
			info.innerHTML = "uninitialized...";
			break;
		case 1:
			info.innerHTML = "initialized...";
			break;
		case 2:
			info.innerHTML = "sent...";
			break;
		case 3:
			info.innerHTML = "loading...";
			break;
		case 4:
			if (objMailTest.status == 200) {
				info.innerHTML = "ready...";
				if (objMailTest.responseText == "vorh") {
					showError("Benutzer vorhanden...");
				} else if (objMailTest.responseText == "nvorh") {
					showError("Benutzer nicht vorhanden");
					closeWindow("login");
					showRegister();
				}
			} else {
				info.innerHTML = "Error...";
			}
			break;
	}
}

function authent (mypass) {
	logedinuser = mail;
	logedinpass = mypass;
	requeststring = "mail="+mail+"&pass="+mypass;
	objMailTest = erzXMLAsync();
	objMailTest.open("post","./authend.php",true);
	objMailTest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	objMailTest.onreadystatechange = readyAuthend;
	objMailTest.send(requeststring);
}

function readyAuthend () {
	info = document.getElementById("Info");
	switch (objMailTest.readyState) {
		case 0:
			info.innerHTML = "uninitialized...";
			break;
		case 1:
			info.innerHTML = "initialized...";
			break;
		case 2:
			info.innerHTML = "sent...";
			break;
		case 3:
			info.innerHTML = "loading...";
			break;
		case 4:
			if (objMailTest.status == 200) {
				info.innerHTML = "ready...";
				if (objMailTest.responseText == "auth") {
					logedin = 1;
					closeWindow("login");
					showError("Sie wurden erfolgreich angemeldet...");
				} else if (objMailTest.responseText == "nauth") {
					showError("Falsches Passwort...");
				}
			} else {
				info.innerHTML = "Error...";
			}
			break;
	}
}

function showRegister () {
	myname = "reg";
	mycont = "regh";
	if(!document.getElementById(mycont)) {
		createWindow("Registrieren",myname,0,0,410,200,1,0,0);
		mydiv = document.createElement("div");
		mydivid = document.createAttribute("id");
		mydivid.nodeValue=mycont
		mydiv.setAttributeNode(mydivid);
		document.getElementById(myname).appendChild(mydiv);
	} else {
		mydiv = document.getElementById(mycont);
	}
	
	if (logedin == 0) {
		mydivu = document.createElement("div");
		mydesc = document.createTextNode("E-Mail:");
		mydivu.appendChild(mydesc);
		mydivu.style.marginTop = "5px";
		mydivu.style.marginLeft = "25px";
		
		myuname = document.createElement("input");
		myuname.onblur = new Function ("chtmpMail(this.value);");
		myuname.value = mail;
		myuname.style.width = "150px";
		if (navigator.appName != "Microsoft Internet Explorer" ) {
			myuname.style.height = "15px";
		} else {
			myuname.style.height = "18px";
		}
		
		mydivu.appendChild(myuname);
		mydiv.appendChild(mydivu);
		
		mydivp = document.createElement("div");
		mydescp = document.createTextNode("Passwort:");
		mydivp.appendChild(mydescp);
		mydivp.style.marginTop = "5px";
		mydivp.style.marginLeft = "25px";
		
		mypass = document.createElement("input");
		mypass.onblur = new Function ("chkpass();");
		mypassid = document.createAttribute("id");
		mypassid.nodeValue = "pass";
		mypass.setAttributeNode(mypassid);
		mypasst = document.createAttribute("type");
		mypasst.nodeValue = "password";
		mypass.setAttributeNode(mypasst);
		mypass.style.width = "150px";
		if (navigator.appName != "Microsoft Internet Explorer" ) {
			mypass.style.height = "15px";
		} else {
			mypass.style.height = "18px";
		}
		
		mydivp.appendChild(mypass);
		mydiv.appendChild(mydivp);
		
		mydivpw = document.createElement("div");
		mydescpw = document.createTextNode("Passwort (Wiederholung):");
		mydivpw.appendChild(mydescpw);
		mydivpw.style.marginTop = "5px";
		mydivpw.style.marginLeft = "25px";
		
		mypassw = document.createElement("input");
		mypassw.onblur = new Function ("chkpass();");
		mypasswid = document.createAttribute("id");
		mypasswid.nodeValue = "passw";
		mypassw.setAttributeNode(mypasswid);
		mypasswt = document.createAttribute("type");
		mypasswt.nodeValue = "password";
		mypassw.setAttributeNode(mypasswt);
		mypassw.style.width = "150px";
		if (navigator.appName != "Microsoft Internet Explorer" ) {
			mypassw.style.height = "15px";
		} else {
			mypassw.style.height = "18px";
		}
		
		mydivpw.appendChild(mypassw);
		mydiv.appendChild(mydivpw);
		
		mydivv = document.createElement("div");
		mydescpv = document.createTextNode("Vorname:");
		mydivv.appendChild(mydescpv);
		mydivv.style.marginTop = "5px";
		mydivv.style.marginLeft = "25px";
		
		mypassv = document.createElement("input");
		mypassv.onblur = new Function ("vorn(this.value);");
		mypassv.style.width = "150px";
		if (navigator.appName != "Microsoft Internet Explorer" ) {
			mypassv.style.height = "15px";
		} else {
			mypassv.style.height = "18px";
		}
		
		mydivv.appendChild(mypassv);
		mydiv.appendChild(mydivv);
		
		mydivn = document.createElement("div");
		mydescpn = document.createTextNode("Nachname:");
		mydivn.appendChild(mydescpn);
		mydivn.style.marginTop = "5px";
		mydivn.style.marginLeft = "25px";
		
		mypassn = document.createElement("input");
		mypassn.onblur = new Function ("nachn(this.value);");
		mypassn.style.width = "150px";
		if (navigator.appName != "Microsoft Internet Explorer" ) {
			mypassn.style.height = "15px";
		} else {
			mypassn.style.height = "18px";
		}
		
		mydivn.appendChild(mypassn);
		mydiv.appendChild(mydivn);
		
		mydivs = document.createElement("div");
		mydescps = document.createTextNode("Strasse:");
		mydivs.appendChild(mydescps);
		mydivs.style.marginTop = "5px";
		mydivs.style.marginLeft = "25px";
		
		mypasss = document.createElement("input");
		mypasss.onblur = new Function ("street(this.value);");
		mypasss.style.width = "150px";
		if (navigator.appName != "Microsoft Internet Explorer" ) {
			mypasss.style.height = "15px";
		} else {
			mypasss.style.height = "18px";
		}
		
		mydivs.appendChild(mypasss);
		mydiv.appendChild(mydivs);
		
		mydivpl = document.createElement("div");
		mydescppl = document.createTextNode("PLZ:");
		mydivpl.appendChild(mydescppl);
		mydivpl.style.marginTop = "5px";
		mydivpl.style.marginLeft = "25px";
		
		mypasspl = document.createElement("input");
		mypasspl.onblur = new Function ("plz(this.value);");
		mypasspl.style.width = "150px";
		if (navigator.appName != "Microsoft Internet Explorer" ) {
			mypasspl.style.height = "15px";
		} else {
			mypasspl.style.height = "18px";
		}
		
		mydivpl.appendChild(mypasspl);
		mydiv.appendChild(mydivpl);
		
		mydivo = document.createElement("div");
		mydescpo = document.createTextNode("Ort:");
		mydivo.appendChild(mydescpo);
		mydivo.style.marginTop = "5px";
		mydivo.style.marginLeft = "25px";
		
		mypasso = document.createElement("input");
		mypasso.onblur = new Function ("down(this.value);");
		mypasso.style.width = "150px";
		if (navigator.appName != "Microsoft Internet Explorer" ) {
			mypasso.style.height = "15px";
		} else {
			mypasso.style.height = "18px";
		}
		
		mydivo.appendChild(mypasso);
		mydiv.appendChild(mydivo);
		
		mydiva = document.createElement("div");
		mydesca = document.createTextNode("AGB Akzeptiert");
		
		mydiva.style.marginTop = "5px";
		mydiva.style.marginLeft = "25px";
		
		mypassa = document.createElement("input");
		mypassa.onchange = new Function ("send();");
		mypassat = document.createAttribute("type");
		mypassat.nodeValue = "checkbox";
		mypassa.setAttributeNode(mypassat);
		if (navigator.appName != "Microsoft Internet Explorer" ) {
			mypassa.style.height = "15px";
		} else {
			mypassa.style.height = "18px";
		}
		
		mydiva.appendChild(mypassa);
		mydiva.appendChild(mydesca);
		mydiv.appendChild(mydiva);
	} else {
		closeWindow(myname);
	}
}
var mypass = "";
function chkpass () {
	if ( document.getElementById("pass").value == document.getElementById("passw").value ) {
		requeststring = "pass="+document.getElementById("pass").value;
		objPassset = erzXMLAsync();
		objPassset.open("post","./setpass.php",true);
		objPassset.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		objPassset.onreadystatechange = readyPassset;
		objPassset.send(requeststring);
		mypass = document.getElementById("pass").value;
	} else if ( document.getElementById("passw").value == "") {
		showError("Bitte Passwort wiederholung eingeben.");
		mypass = "";
	} else {
		showError("Passwort wiederholung stimmt nicht.");
		mypass = "";
	}
}

function readyPassset () {
	info = document.getElementById("Info");
	switch (objPassset.readyState) {
		case 0:
			info.innerHTML = "uninitialized...";
			break;
		case 1:
			info.innerHTML = "initialized...";
			break;
		case 2:
			info.innerHTML = "sent...";
			break;
		case 3:
			info.innerHTML = "loading...";
			break;
		case 4:
			if (objPassset.status == 200) {
				info.innerHTML = "ready...";
				showError(unescape("Daten %FCbermittelt"));
			} else {
				info.innerHTML = "Error...";
			}
			break;
	}
}
var myvorname = "";
function vorn (myval) {
	if(myval != "") {
		requeststring = "vorn="+myval;
		objPassset = erzXMLAsync();
		objPassset.open("post","./setvorn.php",true);
		objPassset.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		objPassset.onreadystatechange = readyVorn;
		objPassset.send(requeststring);
		myvorname = myval;
	} else {
		showError("Bitte Vornamen eingeben...");
		myvorname = "";
	}
}

function readyVorn () {
	info = document.getElementById("Info");
	switch (objPassset.readyState) {
		case 0:
			info.innerHTML = "uninitialized...";
			break;
		case 1:
			info.innerHTML = "initialized...";
			break;
		case 2:
			info.innerHTML = "sent...";
			break;
		case 3:
			info.innerHTML = "loading...";
			break;
		case 4:
			if (objPassset.status == 200) {
				info.innerHTML = "ready...";
				showError(unescape("Daten %FCbermittelt..."));
			} else {
				info.innerHTML = "Error...";
			}
			break;
	}
}

var mynachname = "";
function nachn (myval) {
	if (myval != "") {
		requeststring = "nachn="+myval;
		objPassset = erzXMLAsync();
		objPassset.open("post","./setnachn.php",true);
		objPassset.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		objPassset.onreadystatechange = readyVorn;
		objPassset.send(requeststring);
		mynachname = myval;
	} else {
		showError("Bitte Nachnamen eingeben...");
		mynachname = "";
	}
}
var mystrasse = "";
function street (myval) {
	if (myval != "") {
		requeststring = "street="+myval;
		objPassset = erzXMLAsync();
		objPassset.open("post","./setstreet.php",true);
		objPassset.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		objPassset.onreadystatechange = readyVorn;
		objPassset.send(requeststring);
		mystrasse = myval;
	} else {
		showError("Bitte Strasse eingeben...");
		mystrasse = "";
	}
}

var myort = "";
function down (myval) {
	if (myval != "") {
		requeststring = "ort="+myval;
		objPassset = erzXMLAsync();
		objPassset.open("post","./setort.php",true);
		objPassset.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		objPassset.onreadystatechange = readyVorn;
		objPassset.send(requeststring);
		myort = myval;
	} else {
		showError("Bitte Ort eingeben...");
		myort = "";
	}
}

var myplz = "";
function plz (myval) {
	if (myval != "") {
		requeststring = "plz="+myval;
		objPassset = erzXMLAsync();
		objPassset.open("post","./setplz.php",true);
		objPassset.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		objPassset.onreadystatechange = readyVorn;
		objPassset.send(requeststring);
		myplz = myval;
	} else {
		showError("Bitte PLZ eingeben...");
		myplz = "";
	}
}

function send () {
	if( allfset () ) {
		objPassset = erzXMLAsync();
		objPassset.open("post","./agreeagb.php",true);
		objPassset.onreadystatechange = readyagb;
		objPassset.send(null);
	} else {
		showError(unescape("Nicht alle Felder ausgef%FCllt..."));
	}
}

function allfset () {
	if ( myuname == "" || mypass == "" || myvorname == "" || mynachname == "" || mystrasse == "" || myplz == "" || myort == "" ) {
		return false;
	} else {
		return true;
	}
}

function readyagb () {
	info = document.getElementById("Info");
	switch (objPassset.readyState) {
		case 0:
			info.innerHTML = "uninitialized...";
			break;
		case 1:
			info.innerHTML = "initialized...";
			break;
		case 2:
			info.innerHTML = "sent...";
			break;
		case 3:
			info.innerHTML = "loading...";
			break;
		case 4:
			if (objPassset.status == 200) {
				info.innerHTML = "ready...";
				if(objPassset.responseText == "") {
					closeWindow("reg");
					showError("Registrierung erfolgreich...");
				} else {
					showError("Nicht erfolgreich eingetragen...");
				}
			} else {
				info.innerHTML = "Error...";
			}
			break;
	}
}

function sendOrder () {
	if (logedin == 1) {
		objOrder = null;
		requestString = "mail="+logedinuser+"&pass="+logedinpass;
		objOrder = erzXMLAsync();
		objOrder.open("post","./order.php",true);
		objOrder.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		objOrder.onreadystatechange = readyOrder;
		objOrder.send(requestString);
	} else {
		showError("Sie mussen sich erst anmelden...");
		showLogin();
	}
}

function readyOrder () {
	info = document.getElementById("Info");
	switch (objOrder.readyState) {
		case 0:
			info.innerHTML = "uninitialized...";
			break;
		case 1:
			info.innerHTML = "initialized...";
			break;
		case 2:
			info.innerHTML = "sent...";
			break;
		case 3:
			info.innerHTML = "loading...";
			break;
		case 4:
			if (objOrder.status == 200) {
				viewOrder(objOrder.responseXML);
			} else {
				info.innerHTML = "Error...";
			}
			break;
	}
}

function viewOrder (myxml) {
	if ( myxml ) {
		showError (unescape("Bestellung m%F6glich..."));
		myname = "bestellung";
		mycont = "bestellunginh";
		if(!document.getElementById(mycont)) {
			createWindow("Bestellung",myname,0,0,450,500,1,1,0);
			mydiv = document.createElement("div");
			mydivid = document.createAttribute("id");
			mydivid.nodeValue=mycont
			mydiv.setAttributeNode(mydivid);
			mydiv.style.overflow = "scroll";
			mydiv.style.width = "100%";
			mydiv.style.height = "450px";
			document.getElementById(myname).appendChild(mydiv);
		} else {
			mydiv = document.getElementById(mycont);
		}
		
		if (navigator.appName != "Microsoft Internet Explorer" ) {
			table = "table";
			tr = "tr";
			td = "td";
			tablest = "table";
			tabler = "table-row";
			tablec = "table-cell";
		} else {
			table = "div";
			tr = "div";
			td = "span";
			tablest = "block";
			tabler = "block";
			tablec = "inline";
		}
		
		myhead = document.createElement("div");
		
		myheadname = document.createElement("div");
		myheadname.appendChild(document.createTextNode(unescape(myxml.lastChild.getAttributeNode("name").nodeValue)));
		
		myheadstreet = document.createElement("div");
		myheadstreet.appendChild(document.createTextNode(unescape(myxml.lastChild.getAttributeNode("strasse").nodeValue)));
		
		myheaddown = document.createElement("div");
		myheaddown.appendChild(document.createTextNode(myxml.lastChild.getAttributeNode("plz").nodeValue + " " + myxml.lastChild.getAttributeNode("ort").nodeValue));
		
		myhead.appendChild(myheadname);
		myhead.appendChild(myheadstreet);
		myhead.appendChild(myheaddown);
				
		mytable = document.createElement(table);
		mytable.style.border = "1px solid";
		mytable.style.width = "100%";
		mytable.style.display = tablest;
		
		mytr = document.createElement(tr);
		mytr.style.display = "block";
		mytr.style.width = "100%";
		mytr.style.margin = "0";
		mytr.style.display = tabler;
		mytr.style.cursor = "default";
		
		mytd1 = document.createElement(td);
		mytd1.appendChild(document.createTextNode("St."));
		mytd1.style.border = "1px solid";
		mytd1.style.width = "4%";
		mytd1.style.height = "20px";
		mytd1.style.display = tablec;
			
		mytd2 = document.createElement(td);
		mytd2.appendChild(document.createTextNode("Beschreibung"));
		mytd2.style.border = "1px solid";
		mytd2.style.width = "65%";
		mytd2.style.height = "20px";
		mytd2.style.display = tablec;
			
		mytd3 = document.createElement(td);
		mytd3.appendChild(document.createTextNode("Preis/St."));
		mytd3.style.border = "1px solid";
		mytd3.style.width = "15%";
		mytd3.style.height = "20px";
		mytd3.style.display = tablec;
		
		mytd4 = document.createElement(td);
		mytd4.appendChild(document.createTextNode("ges Preis"));
		mytd4.style.border = "1px solid";
		mytd4.style.width = "15%";
		mytd4.style.height = "20px";
		mytd4.style.display = tablec;
			
		mytr.appendChild(mytd1);
		mytr.appendChild(mytd2);
		mytr.appendChild(mytd3);
		mytr.appendChild(mytd4);
		mytable.appendChild(mytr);
		
		for(i=0;i<myxml.lastChild.childNodes.length;i++) {
			mytr = document.createElement(tr);
			mytr.style.display = "block";
			mytr.style.width = "100%";
			mytr.style.margin = "0";
			mytr.style.display = tabler;
			mytr.style.cursor = "default";
			
			mytd1 = document.createElement(td);
			
			mystk = document.createElement("div");
			mystk.style.width = "100%";
			mystk.style.height = "100%";
			mystk.appendChild(document.createTextNode(unescape(myxml.lastChild.childNodes[i].getAttributeNode("anzahl").nodeValue)));
			mystk.style.margin = "0";
			mystk.style.padding = "0";
			mystk.style.border = "0";
			mystk.style.backgroundColor = "#FFFFFF";
			mystk.style.textAlign = "center";
			
			mytd1.appendChild(mystk);
			mytd1.style.border = "1px solid";
			mytd1.style.width = "4%";
			mytd1.style.height = "20px";
			mytd1.style.display = tablec;
			mytd1.style.overflow = "hidden";
			mytd1.style.backgroundColor = "#FFFFFF";
			
			mytd2 = document.createElement(td);
			mytd2.appendChild(document.createTextNode(unescape(myxml.lastChild.childNodes[i].firstChild.firstChild.nodeValue)));
			mytd2.style.border = "1px solid";
			mytd2.style.width = "65%";
			mytd2.style.height = "20px";
			mytd2.style.display = tablec;
			
			mytd3 = document.createElement(td);
			mytd3.appendChild(document.createTextNode(myxml.lastChild.childNodes[i].lastChild.getAttributeNode("einzeln").nodeValue));
			mytd3.style.border = "1px solid";
			mytd3.style.width = "15%";
			mytd3.style.height = "20px";
			mytd3.style.display = tablec;
			
			mytd4 = document.createElement(td);
			mytd4.appendChild(document.createTextNode(myxml.lastChild.childNodes[i].lastChild.getAttributeNode("gesamt").nodeValue));
			mytd4.style.border = "1px solid";
			mytd4.style.width = "15%";
			mytd4.style.height = "20px";
			mytd4.style.display = tablec;
			
			mytr.appendChild(mytd1);
			mytr.appendChild(mytd2);
			mytr.appendChild(mytd3);
			mytr.appendChild(mytd4);
			mytable.appendChild(mytr);
		}
		
		mytr = document.createElement(tr);
		mytr.style.display = "block";
		mytr.style.width = "100%";
		mytr.style.margin = "0";
		mytr.style.display = tabler;
		mytr.style.cursor = "default";
		
		mytd1 = document.createElement(td);
		mytd1.appendChild(document.createTextNode("--"));
		mytd1.style.border = "1px solid";
		mytd1.style.width = "4%";
		mytd1.style.height = "20px";
		mytd1.style.display = tablec;
			
		mytd2 = document.createElement(td);
		mytd2.appendChild(document.createTextNode("Gesamt"));
		mytd2.style.border = "1px solid";
		mytd2.style.width = "65%";
		mytd2.style.height = "20px";
		mytd2.style.display = tablec;
			
		mytd3 = document.createElement(td);
		mytd3.appendChild(document.createTextNode("--"));
		mytd3.style.border = "1px solid";
		mytd3.style.width = "15%";
		mytd3.style.height = "20px";
		mytd3.style.display = tablec;
		
		mytd4 = document.createElement(td);
		mytd4.appendChild(document.createTextNode(myxml.lastChild.getAttributeNode("preis").nodeValue));
		mytd4.style.border = "1px solid";
		mytd4.style.width = "15%";
		mytd4.style.height = "20px";
		mytd4.style.display = tablec;
			
		mytr.appendChild(mytd1);
		mytr.appendChild(mytd2);
		mytr.appendChild(mytd3);
		mytr.appendChild(mytd4);
		mytable.appendChild(mytr);
		
		myorder = document.createElement("input");
		myordertype = document.createAttribute("type");
		myordertype.nodeValue = "button";
		myorder.setAttributeNode(myordertype);
		myorder.value = "Bestellen & AGB akzeptieren...";
		myorder.onclick = new Function ("sendRealOrder();");
		
		
		mydiv.innerHTML="";
		mydiv.appendChild(myhead);
		mydiv.appendChild(mytable);
		mydiv.appendChild(myorder);
	} else {
		showError (unescape("Bestellung nicht m%F6glich..."));
	}
}

function sendRealOrder () {
		if (logedin == 1) {
		objOrder = null;
		requestString = "mail="+logedinuser+"&pass="+logedinpass;
		objOrder = erzXMLAsync();
		objOrder.open("post","./realorder.php",true);
		objOrder.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		objOrder.onreadystatechange = readyRealOrder;
		objOrder.send(requestString);
	} else {
		showError("Sie mussen sich erst anmelden...");
		showLogin();
	}
}

function readyRealOrder () {
	info = document.getElementById("Info");
	switch (objOrder.readyState) {
		case 0:
			info.innerHTML = "uninitialized...";
			break;
		case 1:
			info.innerHTML = "initialized...";
			break;
		case 2:
			info.innerHTML = "sent...";
			break;
		case 3:
			info.innerHTML = "loading...";
			break;
		case 4:
			if (objOrder.status == 200) {
				alert(objOrder.responseText);
				if (objOrder.responseText=="ok") {
					showError (unescape("Bestellung wurde durchgef%FChrt..."));
				} else {
					showError (unescape("Bestellung konnte nicht durchgef%FChrt werden..."));
				}
			} else {
				info.innerHTML = "Error...";
			}
			break;
	}
}
