function pageload () {
	createStartbar ();
	addStartMenu (document.createTextNode(unescape("Algemeine Gesch%E4ftsbedingung")),"javascript:loadAGB();");
	addStartMenu (document.createTextNode(unescape("Warenkorb")),"javascript:showBask();");
	addStartMenu (document.createTextNode(unescape("Anmelden")),"javascript:showLogin();");
	
	getKategorien ();
	init_mousemove ();
}

var docEl = ( typeof document.compatMode != "undefined" && document.compatMode != "BackCompat" ) ? "documentElement" : "body";
var xPos;
var yPos;

function init_mousemove() {
        if(document.layers) document.captureEvents(Event.MOUSEMOVE);
        document.onmousemove =	dpl_mouse_pos;
}

function dpl_mouse_pos(e) {
        xPos = e? e.pageX : window.event.x;
        yPos = e? e.pageY : window.event.y;
    
        if (document.all && !document.captureEvents) {
            xPos    += document[docEl].scrollLeft;
            yPos    += document[docEl].scrollTop;
        }
        
        if (document.layers) routeEvent(e);
}

function createStartbar () {
	stb = document.createElement("div");
	stbid = document.createAttribute("id");
	stbid.nodeValue = "Startbar";
	stb.setAttributeNode(stbid);
	stb.style.position = "absolute";
	stb.style.width = document.body.offsetWidth + "px";
	
	stbbut = document.createElement("div");
	stbbutid = document.createAttribute("id");
	stbbutid.nodeValue = "Startbut";
	stbbut.setAttributeNode(stbbutid);
	stbbuttext = document.createTextNode("Start");
	stbbut.appendChild(stbbuttext);
	stbbut.style.textAlign = "center";
	stbbut.style.verticalAlign = "middle";

	if (navigator.appName != "Microsoft Internet Explorer" ) {
		stbbut.style.borderRight = "1px solid";
		stbbut.style.height = "25px";
		stbbut.style.width = "100px";
		stbbut.style.lineHeight = "25px";
		stb.style.top = document.body.offsetHeight - 25 + "px";
		stb.style.height = "25px";
	} else {
		stbbut.style.borderRight = "1px solid";
		stbbut.style.height = "25px";
		stbbut.style.width = "101px";
		stbbut.style.lineHeight = "25px";
		stb.style.top = document.body.offsetHeight - 30 + "px";
		stb.style.height = "25px";
	}
	
	stbinfo = document.createElement("div");
	stbinfoid = document.createAttribute("id");
	stbinfoid.nodeValue = "Info";
	stbinfo.setAttributeNode(stbinfoid);
	stbinfo.style.height = "25px";
	stbinfo.style.width = "100px";
	stbinfo.style.borderLeft = "1px solid";

	
	stbbuta = document.createElement("a");
	stbbutahref = document.createAttribute("href");
	stbbutahref.nodeValue = "javascript:displayStart();";
	stbbuta.setAttributeNode(stbbutahref);
	stbbuta.appendChild(stbbut);
	
	stbbut.onmouseover = new Function("this.style.backgroundColor = \"#48BD48\";");
	stbbut.onmouseout = new Function("this.style.backgroundColor = \"#41A141\";");
	
	stb.appendChild(stbinfo);
	stb.appendChild(stbbuta);
	
	stm = document.createElement("div");
	stmid = document.createAttribute("id");
	stmid.nodeValue = "Startmenu";
	stm.setAttributeNode(stmid);
	stm.style.display = "none";
	

	document.body.appendChild(stm);
	document.body.appendChild(stb);
}

function addStartMenu (mytitel,mylink) {
	entry = document.createElement("div");
	entrya = document.createElement("a");
	entry.onmouseover = new Function("this.style.backgroundColor = \"#D3D3D3\";");
	entry.onmouseout = new Function("this.style.backgroundColor = \"#EEEEEE\";");
	
	entryahref = document.createAttribute("href");
	entryahref.nodeValue = mylink + "javascript:closeStart();";
	entrya.setAttributeNode(entryahref);
	entrytext = mytitel;
	entry.appendChild(entrytext);
	entrya.appendChild(entry);
	entry.style.width = "100%";
	document.getElementById("Startmenu").appendChild(entrya);
}

function displayStart () {
	stm = document.getElementById("Startmenu");
	if (stm.style.display == "none") {
		stm.style.display = "block";
		if (navigator.appName != "Microsoft Internet Explorer" ) {
			stm.style.top = document.body.offsetHeight - stm.offsetHeight - 25 + "px";
		} else {
			stm.style.top = document.body.offsetHeight - stm.offsetHeight - 30 + "px";
		}
		stm.style.position = "absolute";
	} else {
		stm.style.display = "none";
	}
}

function closeStart () {
	stm = document.getElementById("Startmenu");
	stm.style.display = "none";
}

function createWindow (mytitle,myid,mytop,myleft,myheight,mywidth,myclose,mymin,mymax) {
	/* Erstelle das Fenster */
	wnd = document.createElement("div");
	
	/* Attribute für das Fenster */
	wndid = document.createAttribute("id");
	wndid.nodeValue = myid;
	wnd.setAttributeNode(wndid);
	wndclass = document.createAttribute("class");
	wndclass.nodeValue = "window";
	wnd.setAttributeNode(wndclass);
	wnd.style.position = "absolute";
	if ( myheight == 0 ) {
		wnd.style.height = null;
	} else {
		if (navigator.appName != "Microsoft Internet Explorer" ) {
			wnd.style.height = 20 + myheight + "px";
		} else {
			wnd.style.height = 22 + myheight + "px";
		}
	}
	if ( mywidth == 0 ) {
		wnd.style.width = null;
	} else {
		if (navigator.appName != "Microsoft Internet Explorer" ) {
			wnd.style.width = mywidth + "px";
		} else {
			wnd.style.width = mywidth + 2 + "px";
		}
	}
	wndname = document.createAttribute("name");
	wndname.nodeValue = "window";
	wnd.setAttributeNode(wndname);
	
	wnd.style.top = mytop + "px";
	wnd.style.left = myleft + "px";
	
	wnd.onmousedown = new Function("giveFocus(\""+myid+"\");");
	
	/* Erstellen der Titelleiste */
	wndtitle = document.createElement("div");
	wndtitleclass = document.createAttribute("class");
	wndtitleclass.nodeValue = "title";
	wndtitletext = document.createTextNode(unescape(mytitle));
	wndtitle.setAttributeNode(wndtitleclass);
	
	/* Erstellen der Fenstersteuerung */
	wndbtns = document.createElement("div");
	wndbtnsid = document.createAttribute("id");
	wndbtnsid.nodeValue = "Wndbtns";
	wndbtns.setAttributeNode(wndbtnsid);
	 
	if ( myclose != 0 ) {
		wndclose = document.createElement("div");
		wndbtnclass = document.createAttribute("class");
		wndbtnclass.nodeValue = "button";
		wndclose.setAttributeNode(wndbtnclass);
		wndclose.appendChild(document.createTextNode("x"));
		wndclosea = document.createElement("a");
		wndcloseahref = document.createAttribute("href");
		wndcloseahref.nodeValue = "javascript:closeWindow(\"" + myid + "\");";
		wndclosea.setAttributeNode(wndcloseahref);
		wndclosea.appendChild(wndclose);
		wndbtns.appendChild(wndclosea);
	}
	if ( mymax != 0 ) {
		wndmax = document.createElement("div");
		wndbtnclass = document.createAttribute("class");
		wndbtnclass.nodeValue = "button";
		wndmax.setAttributeNode(wndbtnclass);
		wndmax.appendChild(document.createTextNode("m"));
		wndmaxa = document.createElement("a");
		wndmaxahref = document.createAttribute("href");
		wndmaxahref.nodeValue = "javascript:maxWindow(\"" + myid + "\"," + mytop + "," + myleft + "," + myheight + "," + mywidth + ");";
		wndmaxa.setAttributeNode(wndmaxahref);
		wndmaxa.appendChild(wndmax);
		wndbtns.appendChild(wndmaxa);
	}
	if ( mymin != 0 ) {
		wndmin = document.createElement("div");
		wndbtnclass = document.createAttribute("class");
		wndbtnclass.nodeValue = "button";
		wndmin.setAttributeNode(wndbtnclass);
		wndmin.appendChild(document.createTextNode("_"));
		wndmina = document.createElement("a");
		wndminahref = document.createAttribute("href");
		wndminahref.nodeValue = "javascript:minWindow(\"" + myid + "\"," + myheight + ");";
		wndmina.setAttributeNode(wndminahref);
		wndmina.appendChild(wndmin);
		wndbtns.appendChild(wndmina);
	}
	
	mytitlestb = document.createElement("div");
	mytitlestbtext = document.createTextNode(unescape(mytitle));
	mytitlestb.appendChild(mytitlestbtext);
	mytitlestbid = document.createAttribute("id");
	mytitlestbid.nodeValue = "stb" + myid;
	mytitlestb.setAttributeNode(mytitlestbid);
	mytitlestbcls = document.createAttribute("class");
	mytitlestbcls.nodeValue = "winstbbut";
	mytitlestb.setAttributeNode(mytitlestbcls);
	mytitlestb.onclick = new Function("giveFocus(\""+myid+"\");minWindow(\""+myid+"\");");
	mytitlestb.onmouseover = new Function("this.style.backgroundColor = \"#00AAFF\";");
	mytitlestb.onmouseout = new Function("this.style.backgroundColor = \"#0084FF\";");
	
	document.getElementById("Startbar").appendChild(mytitlestb);
	
	/* Fenster in Document einbinden */
	wndtitle.appendChild(wndbtns);
	wndtitle.appendChild(wndtitletext);
	
	wndtitlea = document.createElement("a");
	
	wndtitlea.onmousedown = new Function("startDrag(\""+myid+"\");");
	wndtitlea.onmouseup = new Function("stopDrag(\""+myid+"\");");
	wndtitlea.onmousemove = new Function("moveMe(\"" + myid + "\");");

	wndtitlea.appendChild(wndtitle);
	wnd.appendChild(wndtitlea);
	document.body.appendChild(wnd);
	giveFocus(myid);
}

var lastX;
var lastY;
var dragswitch = 0;

function startDrag (myid) {
	if ( dragswitch == 0 ) {
		myel = document.getElementById(myid);
		lastX = parseInt(myel.style.left) - xPos;
		lastY = parseInt(myel.style.top) - yPos;
		dragswitch = myid;
	}
}

function showError (mytext) {
	myname = "Fehler";
	mycont = "Fehlerh";
	if(!document.getElementById(mycont)) {
		createWindow("System Meldungen",myname,100,200,100,300,1,0,0);
		mydiv = document.createElement("div");
		mydivid = document.createAttribute("id");
		mydivid.nodeValue=mycont
		mydiv.setAttributeNode(mydivid);
		mydiv.style.overflow = "scroll";
		mydiv.style.height = "100px";
		document.getElementById(myname).style.zIndex = 500;
		document.getElementById(myname).appendChild(mydiv);
	} else {
		mydiv = document.getElementById(mycont);
	}
	myndiv = document.createElement("div");
	myndiv.appendChild(document.createTextNode(mytext))
	mydiv.innerHTML = mytext + "<br>" + mydiv.innerHTML;
}

function giveFocus(myid) {
		if (navigator.appName != "Microsoft Internet Explorer" ) {
			allwnds = document.getElementsByName("window");
		} else {
			allwnds = document.body.childNodes;
		}
		for (i=0;i<allwnds.length;i++) {
			if (navigator.appName != "Microsoft Internet Explorer" ) {
				if (allwnds[i].getAttribute("id") != "Fehler") {
					allwnds[i].style.zIndex = 2;
				} else {
					allwnds[i].style.zIndex = 500;
				}
			} else {
				if(allwnds[i].getAttribute("id") != "Startbar" && allwnds[i].getAttribute("id") != "Startmenu" && allwnds[i].getAttribute("id") != "Fehler"){
					allwnds[i].style.zIndex = 2;
				} else {
					allwnds[i].style.zIndex = 500;
				}
			}
		}
		myel = document.getElementById(myid);
		if (myid == "Fehler") {
			myel.style.zIndex = 500;
		} else {
			myel.style.zIndex = 50;
		}
}

function moveMe (myid) {
	if ( dragswitch == myid ) {
		myel = document.getElementById(myid);
		myel.style.left = xPos + lastX + "px";
		myel.style.top = yPos + lastY + "px";
	}
}

function stopDrag (myid) {
	if ( dragswitch == myid ) {
		lastX = 0;
		lastY = 0;
		dragswitch = 0;
	}
}

function closeWindow (myid) {
	document.body.removeChild(document.getElementById(myid));
	document.getElementById("Startbar").removeChild(document.getElementById("stb"+myid));
}

function minWindow (myid,myheight) {
	myel = document.getElementById(myid);
	if(myel.style.display != "none") {
		myel.style.display = "none";
	} else {
		myel.style.display = "block";
	}
}

function maxWindow (myid,mytop,myleft,myheight,mywidth) {
	mymaxw = document.body.offsetWidth;
	mymaxh = document.body.offsetHeight;
	if (navigator.appName != "Microsoft Internet Explorer" ) {
		if ( document.getElementById(myid).style.width == mywidth + "px" ) {
			document.getElementById(myid).style.width = mymaxw - 3 +"px";
			document.getElementById(myid).style.height = mymaxh - 25 - 3 +"px";
			document.getElementById(myid).style.top = 0;
			document.getElementById(myid).style.left = 0;
		} else {
			document.getElementById(myid).style.width = mywidth +"px";
			if ( myheight == 0 ) {
				document.getElementById(myid).style.height = null;
			} else {
				document.getElementById(myid).style.height = 20 + myheight +"px";
			}
			document.getElementById(myid).style.top = mytop + "px";
			document.getElementById(myid).style.left = myleft + "px";
		}
	} else {
		if ( document.getElementById(myid).style.width == mywidth + 2 + "px" ) {
			document.getElementById(myid).style.width = mymaxw - 4 +"px";
			document.getElementById(myid).style.height = mymaxh - 25 - 4 +"px";
			document.getElementById(myid).style.top = 0;
			document.getElementById(myid).style.left = 0;
		} else {
			document.getElementById(myid).style.width = mywidth + 2 +"px";
			if ( myheight == 0 ) {
				document.getElementById(myid).style.height = null;
			} else {
				document.getElementById(myid).style.height = 22 + myheight +"px";
			}
			document.getElementById(myid).style.top = mytop + "px";
			document.getElementById(myid).style.left = myleft + "px";
		}
	}	
}