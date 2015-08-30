-- phpMyAdmin SQL Dump
-- version 2.9.0-rc1
-- http://www.phpmyadmin.net
-- 
-- Host: localhost
-- Erstellungszeit: 09. November 2006 um 15:41
-- Server Version: 5.0.24
-- PHP-Version: 5.1.6
-- 
-- Datenbank: `webshop`
-- 
CREATE DATABASE `webshop` DEFAULT CHARACTER SET latin1 COLLATE latin1_german1_ci;
USE webshop;

-- --------------------------------------------------------

-- 
-- Tabellenstruktur für Tabelle `tbl_artikel`
-- 

CREATE TABLE `tbl_artikel` (
  `art_nr` varchar(32) collate latin1_german1_ci NOT NULL,
  `isbn_nr` varchar(13) collate latin1_german1_ci NOT NULL,
  `art_name` text collate latin1_german1_ci NOT NULL,
  `art_desc` text collate latin1_german1_ci NOT NULL,
  `art_preis` bigint(20) NOT NULL,
  `art_kat` bigint(20) unsigned NOT NULL,
  `art_aktion` enum('yes','no') collate latin1_german1_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_german1_ci;

-- 
-- Daten für Tabelle `tbl_artikel`
-- 

INSERT INTO `tbl_artikel` (`art_nr`, `isbn_nr`, `art_name`, `art_desc`, `art_preis`, `art_kat`, `art_aktion`) VALUES 
('59a5426d0bf7eaa86a386d3f37001d32', '9783936480085', 'Hellboy - Saat der Zerstörung', 'Der Vorweihnachtsabend 1944. Auf einer schottischen Insel vollzieht ein Magier im Auftrag der Nationalsozialisten ein düsteres Ritual mit dem Ziel, die drohende Kriegsniederlage durch ein Bündnis mit den Mächten der Finsternis im letzden Moment abzuwenden. Ein glücklicher Zufall will es, dass der heraufbeschworene Abgesandte der Hölle jedoch in den Händen der Alliierten landet: Hellboy. Ein halbes Jahrhundert später trifft Hellboy, inzwischen Ermittler einer Sondereinheit gegen paranormale Bedrohung, erneut auf den Mann, der ihn rief und der ihn nun endgültig für seine apokalyptischen Pläne einsetzen will ...', 1500, 1, 'no'),
('b1c65077b0e77c87299ef8bf46305864', '9783936480095', 'Hellboy - Der Teufel erwacht', 'Soho, New York City. Der Leiter eines Wachsfiguren-Kabinetts wird erschossen in seinem unheimlichen Museum aufgefunden. Ermittlungen ergeben, dass eine über zwei Meter große Holzkiste mit der Aufschrift "Giurescu, Objekt #666" verschwunden ist. Der vermutete Inhalt der Kiste ruft Hellboy und die "Behörde zur Untersuchung und Abwehr paranormaler Erscheinungen" auf den Plan. Die alte Legende um den blutrünstigen Adligen Vladimir Giurescu führt sie zu einem mittelalterlichen Schloss in Rumänien, wo sie ein wahrer Albtraum erwartet...\r\nHellboy sieht sich nicht nur mit Untoten und Hexen konfrontiert, sondern zudem mit seiner apokalyptischen Bestimmung: Ist er wirklich in dieser Welt, um das Ende der Menschheit einzuläuten?\r\nDeutsche Erstveröffentlichung der "Wake the Devil"-Storyline plus Epilog!', 1500, 1, 'no'),
('f58f14a6be3bd885dac8cdaded13d4a7', '9783936480109', 'Hellboy - Batman/Hellboy/Starman', 'Der dunkle Ritter zu Gast bei Hellboy! Dieser Crossover-Band enthält die Miniserien "Batman/Hellboy/Starman" und "Hellboy/Ghost", in deutscher Erstveröffentlichung. Außerdem wieder Hellboy-Pin-Ups deutscher Top- Zeichner (Schwarwel, Uwe de Witt, Horus). Batman/Hellboy/Starman wurde von James Robinson, dem "geistigen Vater" von Starman, geschrieben und von Mignola in Szene gesetzt. Die Story lohnt sich allein schon wegen der schönen Dialoge zwischen Batman und dem Höllenjungen. Die Geschichte um die Suche nach dem Vater von Starman (und damit die Rettung der gesamten Menschheit) ist typisch Mignola... Hellboy/Ghost wurde von Mignola geschrieben und vom Team Jasen Rodriguez/Sean Konot gezeichnet. Die Story zeigt, dass Mignola auch ohne seine eigene zeichnerische Unterstützung stimmungsvolle und spannende Geschichten erzählen kann - und Ghost ist als Charakter sowieso faszinierend. Wer die schöne Untote mit den zwei Pistolen noch nicht kennt, sollte diesen Band nicht verpassen!', 1500, 1, 'no'),
('2834b7cb5dcd92cbae27289f01389290', '9783936480249', 'Hellboy - Sarg in Ketten', 'Die unheimliche Ruine einer Kirche in East Bromwich, England. Getrieben von quälenden Zweifeln an seiner Bestimmung, ermittelt Hellboy in eigener Sache an jenem Ort, an dem fünfzig Jahre zuvor sein irdisches Leben begann. In einer Nacht voller Schrecken trifft der diabolische Jäger des Übernatürlichen hier nicht nur auf Geister und Dämonen, sondern auch auf das Geheimnis eines Sargs in Ketten. Der größte Horror jedoch offenbart sich ihm, als er seinen eigenen Ursprüngen ins Auge blickt...\r\nIn weiteren Fällen des Bandes bekommt Hellboy es unter anderem mit der Baba Jaga und einer äußerst geschwätzigen irischen Leiche zu tun. Ein grauenhaftes Blutbad auf dem Balkan bringt ihn auf die Fährte der "Wölfe von St. August", und die aberwitzigen Allmachtsfantasien eines Jahrhunderte alten Homunkulus schließlich in wahrhaft kolossale Bedrängnis. Wie immer mit Pin-Ups deutscher Top-Zeichner (u.a. Wittek, Anton Atzenhofer, Ulf K., Stephan Hagenow). Fette 200 Seiten mit Geschichten um den baldigen Filmhelden HELLBOY - Kinostart: Frühjahr 2004.', 1500, 1, 'no'),
('c5bfec6cebfd02e42fded6a15d9fe9f1', '9783936480257', 'Hellboy - Die rechte Hand des Schicksals', 'Dieser Band enthält weitere der populären Hellboy-Kurzgeschichten. Für die Hauptstory "Box Full of Evil" bekam Mignola den begehrten Harvey-Award. Desweiteren enthalten: Hellboy amüsante Jugendepisode "Pfannkuchen", "Die rechte Hand des Schicksals", "Der Varcolac", "König Volmer", "Auf Wiedersehen Herr Tod", die Drachen-Geschichte "Die Natur des Tieres" und natürlich die grandiose Story um menschenfressende japanische "Köpfe". Mit exklusivem Vorwort von TyRuben Ellingson, dem Production-Designer des Hellboy-Films, Skizzen-Galerie, neuen Pin-Ups deutscher Top-Zeichner, Hellboy-Pin-Ups japanischer Mangaka und einem Artikel über Mignolas Einflüsse aus Literatur und Kunst.', 1500, 1, 'no'),
('59a1a2e90ba8bcc334a4a294ecaeb862', '9783936480265', 'Hellboy - Sieger Wurm', 'Die B.U.A.P. schickt den von Menschen aufgezogenen Dämon Hellboy auf eine Mission, die seine Letzte für die Behörde sein wird. Am Ende des zweiten Weltkriegs führte der kostümierte Abenteurer Lobster Johnson einen Angriff der Alliierten auf Hitlers Raumfahrtprogramm. Was jedoch nicht verhinderte, dass die Nazis den ersten Menschen in den Weltraum schicken konnten. Nun, nach 60 Jahren, machen sich Hellboy und Roger der Homunkulus, dem eine Sprengladung implantiert wurde, auf den Weg, um die zurückkehrende Raumkapsel und ihren Passagier abzufangen... den Sieger Wurm! Mit Skizzen-Galerie, neuen Pin-Ups deutscher Top-Zeichner einer kompletten Timeline aller Hellboy-Abenteuer und einem Vorwort vom Regisseur des Hellboy-Films, Guillermo del Toro.', 1500, 1, 'no'),
('759bbb2dfc15fb2a4cd9066196e5c418', '9783936480079', 'Hellboy - Seltsame Orte', 'Hellboy hat seinen Dienst bei der B.U.A.P. quittiert und reist nach Afrika - wo er auf einen bananenwerfenden Dämon und den mysteriösen Medizinmann Mohlomi trifft. Im weiteren Verlauf der Story "Der dritte Wunsch", verschlägt es Hellboy hinab in die Tiefen des Meeres und in die Fänge einer Fischhexe. Schließlich taucht Hellboy in "Die Insel" wieder auf, an einer fremden, unheimlichen Küste. Dort wird ihm die geheime Geschichte der Welt offenbart - und das Geheimnis seiner rechten Hand! Wie gewohnt verbindet Mike Mignola die Welt der Sagen mit modernem Horror und Hardboiled-Elementen zu einer poetisch-skurrilen Erzählung.', 1500, 1, 'no'),
('72c7c4742a8e61c93c8c5b57c3c36c0f', '9783936480206', 'B.U.A.P. - Hohle Erde', 'Die Behörde zur Untersuchung und Abwehr paranormaler Erscheinungen (B.U.A.P.) setzt alles daran, ihre Agentin Liz Sherman zu retten, die von geheimnisvollen Mächten ins Innere der Erde entführt wurde. Dabei müssen sich die Agenten auch an ein Leben ohne Hellboy gewöhnen, der die Behörde am Ende des „Sieger Wurm"-Einsatzes verlassen hat. Neu im Team ist der deutsche ektoplasmische Agent Johann Kraus, der im zweiten Hellboy-Film eine große Rolle spielen wird.', 1500, 1, 'no'),
('4306579c09bd8dfa782fee611a5af271', '9783936480214', 'B.U.A.P. - Die Froschplage', 'Neue, spannende Abenteuer mit den aus den Hellboy-Comics und dem Hellboy-Film bekannten Helden Abe Sapien, Liz Sherman, Roger der Homunkulus und Johann Kraus. Ein Riesenpilz entweicht einem Geheimlabor. Als die Behörde zur Untersuchung und Abwehr paranormaler Erscheinungen (B.U.A.P.) auf den Fall angesetzt wird, sehen sich die Agenten plötzlich bizarren Froschmenschen gegenüber. Für Abe Sapien wird der Kampf gegen die Invasion der Froschkreaturen, den mutierenden Pilz und eine Sekte gleichzeitig zu einer Reise zu sich selbst. Im Verlauf der Ereignisse werden weitere Puzzleteile seiner mysteriösen Entstehungsgeschichte enthüllt.', 1500, 1, 'no'),
('feb453555cbf713c4563a3ec330ff8b0', '9783936480117', 'Sin City - Stadt ohne Gnade', 'Frank Millers düsteres Epos im neuen Gewand: Taschenbuchformat, Hardcover, neues Lettering, viele Extras!\r\nWillkommen in Sin City. Ein Ort wie kein anderer, reizvoll, unerbittlich, gefährlich. Liebe ist der Brennstoff und der inzwischen berüchtigte Marv hat das Streichholz... Er begibt sich auf die Jagd nach Goldies Killer. Es ist Zeit, diese Stadt brennen zu sehen!\r\nEine Tour de Force, kompromisslos, poetisch und brutal. Frank Millers Meisterwerk, in der Tradition von Pulp-Autoren wie Spillane und Cain, läßt niemanden kalt. Stilbildend für eine ganze Generation amerikanischer Comic-Zeichner und Autoren, von der Kritik gefeiert, ausgezeichnet mit sowohl einem Eisner Award als auch dem angesehenen National Cartoonists Award.', 1650, 2, 'no'),
('9afca53eb1b16a0a999c94cdb3bc6b1d', '9783936480125', 'Sin City - Eine Braut, für die man mordet', 'Frank Millers düsteres Epos - ab April 2005 im Kino. Die Kult-Comicvorlage ab sofort bei Cross Cult! Eine dieser heißen Nächte, trocken und windstill, die Menschen dazu bringt, im Verborgenen schweißtreibende Dinge zu tun. Dwight denkt darüber nach, wie er alles vermasselt hat und was er für nur eine gute Chance geben würde, seine Weste wieder weiß zu waschen, seinen Weg aus der gefühllosen grauen Hölle zu graben, die sein Leben gerade ist. Er würde alles dafür geben. Wenn er sich nur befreien könnte. Wenn er wieder das Feuer fühlen könnte. Nur noch ein mal. Und dann ruft Ava an...Mit umfangreichem redaktionellen Teil. Erscheint zum Start der Verfilmung (Regie: Robert Rodriguez, Frank Miller und Quentin Tarantino, mit Bruce Willis, Mickey Rourke, Jesica Alba, Brittany Murphy, Elijah Wood u.v.m.). Cross Cult veröffentlicht alle sieben US-Tradepaperbacks im edlen, verkleinerten Hardcoverformat.', 1650, 2, 'no'),
('6aa99f99181893c680f60ace1b7cc0d3', '9783936480133', 'Sin City - Das große Sterben', 'Die Neu-Edition von Frank Millers düsterem Epos - ab Sommer 2005 auch im Kino! Verbrecher hatten schon immer das Sagen in Sin City, egal ob Schmuggler, Spieler oder Politiker. Aber seit die erste Dame ihr „Geschäft" in Old Town eröffnet hat, werden diese Gassen nachts von den Frauen beherrscht. Es bestand eine heikle Waffenruhe, aber nun gibt es eine schmutzige Leiche und der Mob versucht, diese anrüchigen Strassen zurück zu gewinnen. Aber um das zu tun, müssen sie eine eingeschworene Truppe gefährlicher Frauen und Dwight erledigen. Aber er weiß etwas, das der Mob auf die harte Tour lernen wird: Für seine Freunde einstehen, kann bedeuten, dass man eine Menge Leute umbringen muss... Die Story dieses Bandes ist Teil des Kinofilms mit Clive Owen (King Arthur) als Dwight. ', 1650, 2, 'no'),
('bd45cabc214bd881659e9f648cbdb53e', '9783936480141', 'Sin City - Dieser feige Bastard', 'Die Neu-Edition von Frank Millers düsterem Epos - ab Sommer 2005 auch im Kino! Nur noch eine Stunde. Hartigan poliert seine Marke und macht sich bereit, ihr einen Abschiedskuss zu geben, ihr und dem, was sie repräsentiert: 30 verrückte Jahre als Freund und Helfer, Tränen, Blut und Erfolge. Er denkt an das Lächeln seiner Frau, an die Flasche Champagner, die sie auf Eis gelegt hat, an Ausschlafen bis zehn, daran, ganze Nachmittage faul in der Sonne zu liegen. Aber als nur noch eine Stunde vor ihm liegt, hört er etwas über den einen Fall, den er nicht lösen konnte: Ein junges Mädchen, hilflos einem geifernden Verrückten ausgeliefert. Nur noch eine Stunde... und Hartigan wird sich mit einem Knall verabschieden! Die Story dieses Bandes ist Teil der Verfilmung mit Bruce Willis als Hartigan. ', 2075, 2, 'no'),
('0e5c88ad00f97846378ae0e43ba75916', '9783936480150', 'Sin City - Familienbande', ' Dieser Band markiert den Abschied von Millers gewohnter Arbeitsweise: dem Erzählen in Fortsetzungsgeschichten. Denn dieses Epos strömte auf einmal aus seiner Feder ... und man kann kaum anders, als es auch auf einmal zu lesen! In Familienbande gibt es ein Wiedersehen mit vielen aus dem Sin City-Film bekannten Figuren: Die tödliche Miho, die auf Roller Skates unterwegs ist, und Dwight, den das Adrenalin antreibt. Diese Geschichte aus der Stadt ohne Erbarmen darf man nicht verpassen. SIN CITY wurde von Frank Miller und Robert Rodriguez mit einem Ensemble von Hollywood Top-Stars verfilmt. Bild für Bild und Dialogzeile für Dialogzeile wurden auf die große Leinwand übertragen. Die wohl direkteste, mutigste und faszinierendste Verfilmung einer Comicvorlage, die es je gab. ', 1233, 2, 'no'),
('58bfc6b767bc02e12b0dcc79496978f3', '9783936480168', 'Sin City - Bräute, Bier und Blaue Bohnen', ' Dieser facettenreiche Band versammelt Frank Millers Sin City-Kurzgeschichten. Ein idealer Einstiegsband für neue Leser, die wissen möchten, worum es bei Sin City überhaupt geht und Stammleser, die einfach nicht genug bekommen können. Frank Miller hat damit ein mutiges, dekadentes und herrlich schmutziges Portrait dieser Stadt geschaffen. SIN CITY wurde von Frank Miller und Robert Rodriguez mit einem Ensemble von Hollywood Top-Stars verfilmt. Bild für Bild und Dialogzeile für Dialogzeile wurden auf die große Leinwand übertragen. Die wohl direkteste, mutigste und faszinierendste Verfilmung einer Comicvorlage, die es je gab. ', 1650, 2, 'no'),
('1b99ec32b0f93c188163a391f00f147e', '9783936480176', 'Sin City - Einmal Hölle und zurück', 'In der Stadt ohne Gnade ist es schwer, anständige Männer zu finden. Auftritt Wallace, ein Mann voller Geheimnisse. Ein netter Kerl, der sehr gut darin ist, Leute umzubringen. Während einer abendlichen Ausfahrt am Strand trifft er die Frau seiner Träume und sie versucht, sich das Leben zu nehmen! Warum? Und wer sind diese zwielichtigen Schergen die sie aus seinen Armen reißen? Wann wird der Sturm losbrechen? Comiclegende Frank Miller präsentiert seine bisher längste Sin City Graphic Novel ein kompromissloses Feuerwerk von brutaler Gewalt, dunklen Geheimnissen und heldenhafter Aufopferung. Ach, was solls es ist eine Liebesgeschichte!SIN CITY wurde von Frank Miller und Robert Rodriguez mit einem Ensemble von Hollywood Top-Stars verfilmt. Bild für Bild und Dialogzeile für Dialogzeile wurden auf die große Leinwand übertragen. Die wohl direkteste, mutigste und faszinierendste Verfilmung einer Comicvorlage, die es je gab.', 2916, 2, 'no'),
('849d8d55735027a30fbd6fa37620d991', '9783866071663', 'Superman - Die Rückkehr 01', 'Superman - Die Rückkehr 2 WIEDER VEREINTE LIEBE? Im ersten Band von Für das Morgen erfuhren wir, dass eine Million Menschen scheinbar spurlos verschwunden waren - darunter auch jemand, der Superman sehr nahe steht: seine geliebte Lois. In diesem zweiten Band kommt der Mann aus Stahl des Rätsels Lösung immer näher und muss sich schließlich dem bösen Drahtzieher der aufregenden Ereignisse stellen. Aber welche verzweifelten Maßnahmen wird unser Held ergreifen, um die Lage zu retten? Und hat Wonder Woman die Macht, um ihn aufzuhalten? Wie weit wird Superman "FÜR DAS MORGEN" gehen?\r\nDas phänomenale Kreativteam aus Autor Brian Azzarello (100 BULLETS) und den Zeichnern Jim Lee &amp; Scott Williams (BATMAN: HUSH) schuf eine epische Erfolgssaga, die kein Comic-Fan verpassen sollte. In diesem Band gesammelt ist die erste Hälfte von "Für das Morgen", welche ursprünglich in DIE RÜCKKEHR VON SUPERMAN 4 - 6 erschienen ist! Ebenfalls enthalten ist eine Nachwort und eine Skizzen-Abteilung von Jim Lee!', 1245, 3, 'no'),
('b04d414ecd7eaede8fe4b20327403110', '9783866071671', 'Superman - Die Rückkehr 02', 'Superman - Die Rückkehr 2 WIEDER VEREINTE LIEBE? Im ersten Band von Für das Morgen erfuhren wir, dass eine Million Menschen scheinbar spurlos verschwunden waren - darunter auch jemand, der Superman sehr nahe steht: seine geliebte Lois. In diesem zweiten Band kommt der Mann aus Stahl des Rätsels Lösung immer näher und muss sich schließlich dem bösen Drahtzieher der aufregenden Ereignisse stellen. Aber welche verzweifelten Maßnahmen wird unser Held ergreifen, um die Lage zu retten? Und hat Wonder Woman die Macht, um ihn aufzuhalten? Wie weit wird Superman "FÜR DAS MORGEN" gehen? Das phänomenale Kreativteam aus Autor Brian Azzarello (100 BULLETS) und den Zeichnern Jim Lee &amp; Scott Williams (BATMAN: HUSH) schuf eine epische Erfolgssaga, die kein Comic-Fan verpassen sollte. In diesem Band gesammelt ist die erste Hälfte von "Für das Morgen", welche ursprünglich in DIE RÜCKKEHR VON SUPERMAN 4 - 6 erschienen ist! Ebenfalls enthalten ist eine Nachwort und eine Skizzen-Abteilung von Jim Lee!', 1245, 3, 'no');

-- --------------------------------------------------------

-- 
-- Tabellenstruktur für Tabelle `tbl_bestell2kunden`
-- 

CREATE TABLE `tbl_bestell2kunden` (
  `id` bigint(20) unsigned NOT NULL auto_increment,
  `kundenid` bigint(20) unsigned NOT NULL,
  `timestamp` bigint(20) NOT NULL,
  `erl` enum('yes','no') collate latin1_german1_ci NOT NULL default 'no',
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_german1_ci AUTO_INCREMENT=1 ;

-- 
-- Daten für Tabelle `tbl_bestell2kunden`
-- 


-- --------------------------------------------------------

-- 
-- Tabellenstruktur für Tabelle `tbl_bestellung`
-- 

CREATE TABLE `tbl_bestellung` (
  `id` bigint(20) unsigned NOT NULL auto_increment,
  `bestell_id` bigint(20) unsigned NOT NULL,
  `art_nr` varchar(32) collate latin1_german1_ci NOT NULL,
  `anzahl` bigint(20) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_german1_ci AUTO_INCREMENT=1 ;

-- 
-- Daten für Tabelle `tbl_bestellung`
-- 


-- --------------------------------------------------------

-- 
-- Tabellenstruktur für Tabelle `tbl_kat`
-- 

CREATE TABLE `tbl_kat` (
  `id` bigint(20) unsigned NOT NULL auto_increment,
  `name` text collate latin1_german1_ci NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_german1_ci AUTO_INCREMENT=4 ;

-- 
-- Daten für Tabelle `tbl_kat`
-- 

INSERT INTO `tbl_kat` (`id`, `name`) VALUES 
(1, 'Hellboy'),
(2, 'Sin City'),
(3, 'Superman');

-- --------------------------------------------------------

-- 
-- Tabellenstruktur für Tabelle `tbl_kunden`
-- 

CREATE TABLE `tbl_kunden` (
  `ID` bigint(20) unsigned NOT NULL auto_increment,
  `email` text collate latin1_german1_ci NOT NULL,
  `passwort` varchar(32) collate latin1_german1_ci NOT NULL,
  `vorname` text collate latin1_german1_ci NOT NULL,
  `nachname` text collate latin1_german1_ci NOT NULL,
  `strasse` text collate latin1_german1_ci NOT NULL,
  `plz` varchar(4) collate latin1_german1_ci NOT NULL,
  `ort` text collate latin1_german1_ci NOT NULL,
  PRIMARY KEY  (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_german1_ci AUTO_INCREMENT=11 ;

-- --------------------------------------------------------

-- 
-- Tabellenstruktur für Tabelle `tbl_session`
-- 

CREATE TABLE `tbl_session` (
  `id` varchar(32) collate latin1_german1_ci NOT NULL,
  `remoteaddr` bigint(20) NOT NULL,
  `kunden_id` bigint(20) unsigned NOT NULL default '0',
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_german1_ci;

-- --------------------------------------------------------

-- 
-- Tabellenstruktur für Tabelle `tbl_warenkorb`
-- 

CREATE TABLE `tbl_warenkorb` (
  `id` bigint(20) unsigned NOT NULL auto_increment,
  `session_id` varchar(32) collate latin1_german1_ci NOT NULL,
  `art_id` varchar(32) collate latin1_german1_ci NOT NULL,
  `anzahl` bigint(20) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_german1_ci AUTO_INCREMENT=16 ;

-- --------------------------------------------------------

-- 
-- Tabellenstruktur für Tabelle `tmp_kunden`
-- 

CREATE TABLE `tmp_kunden` (
  `session_id` varchar(32) collate latin1_german1_ci NOT NULL,
  `email` text collate latin1_german1_ci,
  `passwort` varchar(32) collate latin1_german1_ci default NULL,
  `vorname` text collate latin1_german1_ci,
  `nachname` text collate latin1_german1_ci,
  `strasse` text collate latin1_german1_ci,
  `plz` varchar(4) collate latin1_german1_ci default NULL,
  `ort` text collate latin1_german1_ci
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_german1_ci;

-- 
-- Daten für Tabelle `tmp_kunden`
-- 

INSERT INTO `tmp_kunden` (`session_id`, `email`, `passwort`, `vorname`, `nachname`, `strasse`, `plz`, `ort`) VALUES 
('5eac71e475725738bae4d116f307983e', 'r.windegger@gmail.co', 'd41d8cd98f00b204e9800998ecf8427e', 'asdf', 'adsf', 'asdf', 'asdf', NULL),
('1281a3f6c8ccc7158a6ccf1ff1817108', 'asdf', 'd41d8cd98f00b204e9800998ecf8427e', NULL, NULL, NULL, NULL, NULL);
