// Icons used into the markers options
var afdb = new google.maps.MarkerImage(
  'gmaps3/img/marqueurs/afdb.png',
  new google.maps.Size(80,68),
  new google.maps.Point(0,0),
  new google.maps.Point(30,50)
);
var met = new google.maps.MarkerImage(
  'gmaps3/img/marqueurs/met.png',
  new google.maps.Size(80,68),
  new google.maps.Point(0,0),
  new google.maps.Point(30,50)
);

var cdce = new google.maps.MarkerImage(
  'gmaps3/img/marqueurs/cdce.png',
  new google.maps.Size(80,68),
  new google.maps.Point(0,0),
  new google.maps.Point(30,50)
);

var dal = new google.maps.MarkerImage(
  'gmaps3/img/marqueurs/dal.png',
  new google.maps.Size(80,68),
  new google.maps.Point(0,0),
  new google.maps.Point(30,50)
);


var drou = new google.maps.MarkerImage(
  'gmaps3/img/marqueurs/drou.png',
  new google.maps.Size(80,68),
  new google.maps.Point(0,0),
  new google.maps.Point(30,50)
);

var saniz = new google.maps.MarkerImage(
  'gmaps3/img/marqueurs/saniz.png',
  new google.maps.Size(80,68),
  new google.maps.Point(0,0),
  new google.maps.Point(30,50)
);

var gay = new google.maps.MarkerImage(
  'gmaps3/img/marqueurs/gay.png',
  new google.maps.Size(80,68),
  new google.maps.Point(0,0),
  new google.maps.Point(30,50)
);

var gcr = new google.maps.MarkerImage(
  'gmaps3/img/marqueurs/gcr.png',
  new google.maps.Size(80,68),
  new google.maps.Point(0,0),
  new google.maps.Point(30,50)
);

var blc = new google.maps.MarkerImage(
  'gmaps3/img/marqueurs/blc.png',
  new google.maps.Size(80,68),
  new google.maps.Point(0,0),
  new google.maps.Point(30,50)
);

var b2c = new google.maps.MarkerImage(
  'gmaps3/img/marqueurs/b2c.png',
  new google.maps.Size(80,68),
  new google.maps.Point(0,0),
  new google.maps.Point(30,50)
);

var qgb = new google.maps.MarkerImage(
  'gmaps3/img/marqueurs/qgb.png',
  new google.maps.Size(80,68),
  new google.maps.Point(0,0),
  new google.maps.Point(30,50)
);

// markers definition list
var list = [
	{lat:48.903761,lng:2.382988,data:{type: "magasin",nom:"Aubervilliers",adresse:"55 Bld Felix Faure",zip:93300 ,city:"Aubervilliers",agence:"AUB.jpg",tel:"<a href='tel:+33148331919'>Tel : 01 48 33 19 19</a><br /><a href='tel:+33148330203'>Fax : 01 48 33 02 03</a>",horaires:"Du lundi au vendredi de 7h à 18h30, le samedi de 7h30 à 17h.",infos:"PLOMBERIE / SANITAIRE / CHAUFFAGE"}, options: {icon: cdce}},
	{lat:43.287889,lng:5.601393,data:{type: "magasin",nom:"Aubagne",adresse:"ZI La Paluds - 430 Avenue de la Paluds",zip:13400 ,city:"Aubagne",agence:"AUG.jpg",tel:"<a href='tel:+33426783636'>Tel : 04 26 78 36 36</a><br /><a href='fax:+33426783637'>Fax : 04 26 78 36 37</a>",horaires:"Du lundi au vendredi de 8h à 18h.",infos:"PLOMBERIE / SANITAIRE / CHAUFFAGE"}, options: {icon: afdb}},
	{lat:48.914983,lng:2.338182,data:{type: "magasin",nom:"Forum Blindage",adresse:"248-250 Rue du landy",zip:93200 ,city:"Saint Denis",agence:"BLI.jpg",tel:"<a href='tel:+33140127070'>Tel : 01 40 12 70 70</a><br /><a href='tel:+33140127071'>Fax : 01 40 12 70 71</a>",horaires:"Du lundi au jeudi de 7h30 à 19h, le vendredi de 7h30 à 18h.",infos:"FABRICATION DE PORTE BLINDEE"}, options: {icon: met}},
	{lat:48.839037,lng:2.245775,data:{type: "magasin",nom:"Boulogne",adresse:"49 Route de la Reine",zip:92100 ,city:"Boulogne Billancourt",agence:"BOU.jpg",tel:"<a href='tel:+33141318080'>Tel : 01 41 31 80 80</a><br /><a href='tel:+33141318081'>Fax : 01 41 31 80 81</a>",horaires:"Du lundi au vendredi de 7h30 à 18h.",infos:"SERRURERIE / QUINCAILLERIE / PLOMBERIE / SANITAIRE"}, options: {icon: afdb}},
	{lat:48.801357,lng:2.27775,data:{type: "magasin",nom:"Chatillon",adresse:"69 Rue Pierre Brossolette",zip:92320 ,city:"Chatillon",agence:"CHA.jpg",tel:"<a href='tel:+33146457697'>Tel : 01 46 45 76 97</a><br /><a href='tel:+33146389124'>Fax : 01 46 38 91 24</a>",horaires:"Du lundi au jeudi de 8h à 17h30, le vendredi de 8h à 17h.",infos:"PLOMBERIE / SANITAIRE / CHAUFFAGE"}, options: {icon: cdce}},
	{lat:48.82687,lng:2.509571,data:{type: "magasin",nom:"Champigny Sur Marne",adresse:"111 Avenue de la Republique",zip:94500 ,city:"Champigny Sur Marne",agence:"CHM.jpg",tel:"<a href='tel:+33155981010'>Tel : 01 55 98 10 10</a><br /><a href='tel:+33155981011'>Fax : 01 55 98 10 11</a>",horaires:"Du lundi au vendredi de 7h30 à 18h30",infos:"SERRURERIE / QUINCAILLERIE / PLOMBERIE / SANITAIRE"}, options: {icon: afdb}},	
	{lat:48.779914,lng:2.23825,data:{type: "magasin",nom:"Clamart",adresse:"457 Avenue du Général de Gaulle",zip:92140 ,city:"Le Petit Clamart",agence:"CLA.jpg",tel:"<a href='tel:+33140838888'>Tel : 01 40 83 88 88</a><br /><a href='tel:+33140838889'>Fax : 01 40 83 88 89</a>",horaires:"Du lundi au vendredi de 7h30 à 18h30.",infos:"SERRURERIE / QUINCAILLERIE / PLOMBERIE / SANITAIRE"}, options: {icon: afdb}},
	{lat:48.750652,lng:1.929602,data:{type: "magasin",nom:"Coignières",adresse:"Le Semaphore - 45 RN 10",zip:78310 ,city:"Coignières",agence:"COI.jpg",tel:"<a href='tel:+33134614858'>Tel : 01 34 61 48 58</a><br /><a href='tel:+33134611529'>Fax : 01 34 61 15 29</a>",horaires:"Du lundi au vendredi 7h30 à 18H00, et le samedi de 8h30 à 12h00.",infos:"SERRURERIE / QUINCAILLERIE / SERVICE CLES"}, options: {icon: afdb}},
	// {lat:48.859226,lng:2.371517,data:{type: "magasin",nom:"Quincaillerie du Batiment",adresse:"21 Boulevard Richard Lenoir",zip:75011 ,city:"Paris",agence:"QDB.jpg",tel:"<a href='tel:+33148058080'>Tel : 01 48 05 80 80</a><br /><a href='tel:+33148058081'>Fax : 01 48 05 80 81</a>",horaires:"Du lundi au vendredi de 8h à 18h.",infos:"QUINCAILLERIE"}, options: {icon: qdb}},
	{lat:48.859226,lng:2.371517,data:{type: "magasin",nom:"Quincaillerie D'Alembert",adresse:"49 Boulevard Richard Lenoir",zip:75011 ,city:"Paris",agence:"DAL.jpg",tel:"<a href='tel:+33143381234'>Tel : 01 43 38 12 34</a><br /><a href='tel:+33143387171'>Fax : 01 43 38 71 71</a>",horaires:"Du lundi au vendredi de 8h30 à 18h.",infos:"SERRURERIE / QUINCAILLERIE / SERVICE CLES"}, options: {icon: dal}},
	{lat:48.532284,lng:2.015163,data:{type: "magasin",nom:"Quincaillerie Droulin",adresse:"11 Rue Fortin",zip:91410 ,city:"Dourdan",agence:"DRO.jpg",tel:"<a href='tel:+33164597106'>Tel : 01 64 59 71 06</a><br /><a href='tel:+33164598579'>Fax : 01 64 59 85 79</a>",horaires:"Du lundi au vendredi de 8h30 à 12h00, et de 13h30 à 17h30.",infos:"PLOMBERIE / QUINCAILLERIE / SERRURERIE"}, options: {icon: drou}},
	{lat:48.863342,lng:2.4051,data:{type: "magasin",nom:"GCR Créations",adresse:"15 Rue des Lyanes",zip:75020 ,city:"Paris",agence:"GCR.jpg",tel:"<a href='tel:+33140129000'>Tel : 01 40 12 90 00</a><br /><a href='tel:+33143644340'>Fax : 01 43 64 43 40</a>",horaires:"Du lundi au vendredi de 8h00 à 12h00, et de 13h30 à 18h00.",infos:"CONTROLE D'ACCES"}, options: {icon: gcr}},
	{lat:45.753735,lng:4.907631,data:{type: "magasin",nom:"Villeurbanne",adresse:"158 Avenue Paul Kruger",zip:69100 ,city:"Villeurbanne",agence:"LYO.jpg",tel:"<a href='tel:+33437916060'>Tel : 04 37 91 60 60</a><br /><a href='tel:+33437916061'>Fax : 04 37 91 60 61</a>",horaires:"Du lundi au vendredi de 7h30 à 12h00 et de 13h30 à 17h30.",infos:"SERRURERIE / QUINCAILLERIE"}, options: {icon: afdb}},
	{lat:43.310378,lng:5.369976,data:{type: "magasin",nom:"Marseille",adresse:"116 Boulevard de Paris",zip:13003 ,city:"Marseille",agence:"MAR.jpg",tel:"<a href='tel:+33495044040'>Tel : 04 95 04 40 40</a><br /><a href='tel:+33495044041'>Fax : 04 95 04 40 41</a>",horaires:"Du lundi au vendredi de 7h30 à 12h00, et de 13h30 à 18h00.",infos:"SERRURERIE / QUINCAILLERIE / PLOMBERIE / SANITAIRE"}, options: {icon: afdb}},
	{lat:48.914399,lng:2.336981,data:{type: "magasin",nom:"La Métallerie",adresse:"3 Boulevard Jean Jaurès",zip:93400 ,city:"Saint Ouen",agence:"MET.jpg",tel:"<a href='tel:+33140126575'>Tel : 01 40 12 65 75</a><br /><a href='tel:+33140126576'>Fax : 01 40 12 65 76</a>",horaires:"Du lundi au jeudi de 7h00 à 17h30, le vendredi de 7h00 à 16h30.",infos:"FABRICATION D'ELEMENTS METALIQUE"}, options: {icon: met}},
	{lat:43.575844,lng:3.85635,data:{type: "magasin",nom:"Montpellier",adresse:"48 Impasse Louis Ferdinand Herold",zip:34000 ,city:"Montpellier",agence:"MPL.jpg",tel:"<a href='tel:+33430051010'>Tel : 04 30 05 10 10</a><br /><a href='tel:+33430051011'>Fax : 04 30 05 10 11</a>",horaires:"Du lundi au jeudi de 7h30-12h & 13h30-18h00, Le vendredi de 7h30-12h & 13h30-17h.",infos:"PLOMBERIE / SANITAIRE / CHAUFFAGE"}, options: {icon: cdce}},
	{lat:48.844866,lng:2.310821,data:{type: "magasin",nom:"Paris 15ème (Pasteur)",adresse:"4 Boulevard Pasteur",zip:75015 ,city:"Paris",agence:"N15.jpg",tel:"<a href='tel:+33153585858'>Tel : 01 53 58 58 58</a><br /><a href='tel:+33153585859'>Fax : 01 53 58 58 59</a>",horaires:"Du lundi au vendredi de 7h30 à 18h00.",infos:"SERRURERIE / QUINCAILLERIE / PLOMBERIE / SANITAIRE"}, options: {icon: afdb}},
	{lat:48.895478,lng:2.173763,data:{type: "magasin",nom:"Nanterre",adresse:"7 Rue Lavoisier",zip:92000 ,city:"Nanterre",agence:"NAN.jpg",tel:"<a href='tel:+33155173691'>Tel : 01 55 17 36 91</a><br /><a href='tel:+33155173699'>Fax : 01 55 17 36 99</a>",horaires:"Du lundi au vendredi de 7h30 à 18h00.",infos:"SERRURERIE / QUINCAILLERIE / PLOMBERIE / SANITAIRE / SERVICE CLES"}, options: {icon: afdb}},
	{lat:43.814453,lng:4.334126,data:{type: "magasin",nom:"Nimes",adresse:"54 Route de Rouquairol",zip:30900 ,city:"Nimes",agence:"NIM.jpg",tel:"<a href='tel:+33430924040'>Tel : 04 30 92 40 40</a><br /><a href='tel:+33430924041'>Fax : 04 30 92 40 41</a>",horaires:"Du lundi au vendredi de 7h30 à 12h00, et de 13h30 à 18h00.",infos:"SERRURERIE / QUINCAILLERIE"}, options: {icon: afdb}},
	{lat:48.903382,lng:2.468793,data:{type: "magasin",nom:"Noisy Serrurerie",adresse:"110 Avenue Gallieni",zip:93130 ,city:"Noisy Le Sec",agence:"NOI.jpg",tel:"<a href='tel:+33141551414'>Tel : 01 41 55 14 14</a><br /><a href='tel:+33141551415'>Fax : 01 41 55 14 15</a>",horaires:"Du lundi au vendredi de 7h30 à 18h30.",infos:"SERRURERIE / QUINCAILLERIE"}, options: {icon: afdb}},
	{lat:48.90349,lng:2.468638,data:{type: "magasin",nom:"Noisy Plomberie",adresse:"108 Avenue Gallieni",zip:93130 ,city:"Noisy Le Sec",agence:"NOP.jpg",tel:"<a href='tel:+33141555657'>Tel : 01 41 55 56 57</a><br /><a href='tel:+33141555658'>Fax : 01 41 55 56 58</a>",horaires:"Du lundi au vendredi de 7h30 à 18h30.",infos:"PLOMBERIE / SANITAIRE"}, options: {icon: cdce}},
	{lat:48.869344,lng:2.338754,data:{type: "magasin",nom:"Paris 2ème",adresse:"68 rue de Richelieu",zip:75002 ,city:"Paris",agence:"P02.jpg",tel:"<a href='tel:+33180487171'>Tel : 01 80 48 71 71</a><br /><a href='tel:+33180487172'>Fax : 01 80 48 71 72</a>",horaires:"Du lundi au vendredi de 8h00 à 18h00.",infos:"SERRURERIE / QUINCAILLERIE / PLOMBERIE / OUTILLAGE / ELECTRICITE"}, options: {icon: afdb}},
	{lat:48.878941,lng:2.34702,data:{type: "magasin",nom:"Paris 9ème",adresse:"47 Rue de Maubeuge",zip:75009 ,city:"Paris",agence:"P09.jpg",tel:"<a href='tel:+33177530303'>Tel : 01 77 53 03 03</a><br /><a href='tel:+33177530304'>Fax : 01 77 53 03 04</a>",horaires:"Du lundi au vendredi de 8h00 à 13h00 et de 14h00 à 18h00.",infos:"SERRURERIE / QUINCAILLERIE / PLOMBERIE / SANITAIRE"}, options: {icon: afdb}},
	{lat:48.862138,lng:2.372006,data:{type: "magasin",nom:"Paris 11ème",adresse:"87 Boulevard Richard Lenoir",zip:75011 ,city:"Paris",agence:"P11.jpg",tel:"<a href='tel:+33149294646'>Tel : 01 49 29 46 46</a><br /><a href='tel:+33143382526'>Fax : 01 43 38 25 26</a>",horaires:"Du lundi au vendredi de 7h30 à 19h et le samedi de 7h30 à 13h.",infos:"SERRURERIE / QUINCAILLERIE"}, options: {icon: afdb}},
	{lat:48.839398,lng:2.408387,data:{type: "magasin",nom:"Paris 12ème",adresse:"51 Boulevard Soult",zip:75012 ,city:"Paris",agence:"P12.jpg",tel:"<a href='tel:+33156954747'>Tel : 01 56 95 47 47</a><br /><a href='tel:+33156954748'>Fax : 01 56 95 47 48</a>",horaires:"Du lundi au vendredi de 7h30 à 18h30.",infos:"SERRURERIE / QUINCAILLERIE / PLOMBERIE / SANITAIRE"}, options: {icon: afdb}},
	{lat:48.827548,lng:2.371512,data:{type: "magasin",nom:"Paris 13ème",adresse:"113 Rue de Patay",zip:75013 ,city:"Paris",agence:"P13.jpg",tel:"<a href='tel:+33145835164'>Tel : 01 45 83 51 64</a><br /><a href='tel:+33145843300'>Fax : 01 45 84 33 00</a>",horaires:"Du lundi au vendredi de 7h30 à 18h00.",infos:"SERRURERIE / QUINCAILLERIE"}, options: {icon: afdb}},
	{lat:48.819743,lng:2.342276,data:{type: "magasin",nom:"Paris 14ème",adresse:"14-16 Boulevard Jourdan",zip:75014 ,city:"Paris",agence:"P14.jpg",tel:"<a href='tel:+33177483030'>Tel : 01 77 48 30 30</a><br /><a href='tel:+33177483031'>Fax : 01 77 48 30 31</a>",horaires:"Du lundi au vendredi de 7h00 à 18h00.",infos:"SERRURERIE / QUINCAILLERIE / PLOMBERIE / SANITAIRE"}, options: {icon: afdb}},
	{lat:48.835691,lng:2.286744,data:{type: "magasin",nom:"Paris 15ème (Desnouettes)",adresse:"61-63 Rue Desnouettes",zip:75015 ,city:"Paris",agence:"P15.jpg",tel:"<a href='tel:+33153684646'>Tel : 01 53 68 46 46</a><br /><a href='tel:+33153684647'>Fax : 01 53 68 46 47</a>",horaires:"Du lundi au vendredi de 7h30 à 19h, le samedi de 7h30 à 13h.",infos:"SERRURERIE / QUINCAILLERIE / PLOMBERIE / SANITAIRE"}, options: {icon: afdb}},
	{lat:48.882257,lng:2.285561,data:{type: "magasin",nom:"Paris 17ème Plomberie",adresse:"6 Boulevard Pershing",zip:75017 ,city:"Paris",agence:"P17.jpg",tel:"<a href='tel:+33158055050'>Tel : 01 58 05 50 50</a><br /><a href='tel:+33158055051'>Fax :01 58 05 50 51</a>",horaires:"Du lundi au vendredi de 8h à 18h.",infos:"PLOMBERIE / SANITAIRE / CHAUFFAGE"}, options: {icon: afdb}},
	{lat:48.89614,lng:2.338178,data:{type: "magasin",nom:"Paris 18ème",adresse:"119 Rue Damremont",zip:75018 ,city:"Paris",agence:"P18.jpg",tel:"<a href='tel:+33142628888'>Tel : 01 42 62 88 88</a><br /><a href='tel:+33142623476'>Fax : 01 42 62 34 76</a>",horaires:"Du lundi au vendredi de 7h00 à 19h et le samedi de 7h30 à 13h.",infos:"SERRURERIE / QUINCAILLERIE / PLOMBERIE / SANITAIRE"}, options: {icon: afdb}},
	{lat:48.886184,lng:2.396398,data:{type: "magasin",nom:"Paris 19ème",adresse:"25 Boulevard Indochine",zip:75019 ,city:"Paris",agence:"P19.jpg",tel:"<a href='tel:+33153197373'>Tel : 01 53 19 73 73</a><br /><a href='tel:+153197374'>Fax : 01 53 19 73 74</a>",horaires:"Du lundi au vendredi de 7h30 à 19h.",infos:"SERRURERIE / QUINCAILLERIE / PLOMBERIE / SANITAIRE"}, options: {icon: afdb}},
	{lat:48.854424,lng:2.412052,data:{type: "magasin",nom:"Paris 20ème",adresse:"3 Rue des Docteurs Dejerine",zip:75020 ,city:"Paris",agence:"P20.jpg",tel:"<a href='tel:+33153273434'>Tel : 01 53 27 34 34</a><br /><a href='tel:+33153273435'>Fax : 01 53 27 34 35</a>",horaires:"Du lundi au vendredi de 7h30 à 18h00.",infos:"PLOMBERIE / SANITAIRE / CHAUFFAGE"}, options: {icon: afdb}},
	{lat:48.805711,lng:2.615604,data:{type: "magasin",nom:"Pontault Combault",adresse:"15 Avenue de la République",zip:77340 ,city:"Pontault Combault",agence:"POC.jpg",tel:"<a href='tel:+33160285164'>Tel : 01 60 28 51 64</a><br /><a href='tel:+33160294636'>Fax :01 60 29 46 36</a>",horaires:"Du lundi au vendredi de 7h30 à 18h00.",infos:"SERRURERIE / QUINCAILLERIE / PLOMBERIE / SANITAIRE"}, options: {icon: afdb}},
  {lat:48.833693,lng:2.308885,data:{type: "magasin",nom:"Paris 15ème (Comptoir)",adresse:"40-42 Rue Castagnary",zip:75015 ,city:"Paris",agence:"PPC.jpg",tel:"<a href='tel:+33145311773'>Tel : 01 45 31 17 73</a><br /><a href='tel:+33148281798'>Fax :01 48 28 17 98</a>",horaires:"Du lundi au vendredi de 7h30 à 18h00.",infos:"PLOMBERIE / SANITAIRE / CHAUFFAGE"}, options: {icon: cdce}},
  {lat:48.863656,lng:2.408878,data:{type: "magasin",nom:"Paris 20ème (Comptoir)",adresse:"213 Boulevard Davout",zip:75020 ,city:"Paris",agence:"PPE.jpg",tel:"<a href='tel:+33153391010'>Tel : 01 53 39 10 10</a><br /><a href='tel:+33153391011'>Fax : 01 53 39 10 11</a>",horaires:"Du lundi au vendredi de 7h30 à 12h30, et de 13h30 à 18h00.",infos:"PLOMBERIE / SANITAIRE / CHAUFFAGE"}, options: {icon: cdce}},
  {lat:48.862456,lng:2.371863,data:{type: "magasin",nom:"Paris 11ème (Comptoir)",adresse:"91 Boulevard Richard Lenoir",zip:75011 ,city:"Paris",agence:"PRL.jpg",tel:"<a href='tel:+33149294545'>Tel : 01 49 29 45 45</a><br /><a href='tel:+33149294546'>Fax : 01 49 29 45 46</a>",horaires:"Du lundi au vendredi de 7h30 à 19h et le samedi de 7h30 à 13h.",infos:"PLOMBERIE / SANITAIRE / CHAUFFAGE"}, options: {icon: cdce}},
  {lat:48.933042,lng:2.439438,data:{type: "magasin",nom:"Quincaillerie Générale du Bourget",adresse:"ZI Parc de l'espace, 49 bis Rue Commandant Rolland",zip:93350 ,city:"Le Bourget",agence:"qgb.jpg",tel:"<a href='tel:+330148372966'>Tel : 01 48 37 29 66</a><br /><a href='tel:+33148372466'>Fax : 01 48 37 24 66</a>",horaires:"Du lundi au vendredi de 7h30 à 17h30, Le samedi de 8h30 à 12h00.",infos:"PLOMBERIE / SANITAIRE / CHAUFFAGE"}, options: {icon: qgb}},
  {lat:48.881324,lng:2.28505,data:{type: "magasin",nom:"Paris 17ème Serrurerie",adresse:"3 Boulevard Pershing",zip:75017 ,city:"Paris",agence:"S17.jpg",tel:"<a href='tel:+33158055151'>Tel : 01 58 05 51 51</a><br /><a href='tel:+33158055152'>Fax : 01 58 05 51 52</a>",horaires:"Du lundi au vendredi de 8h à 18h.",infos:"SERRURERIE / QUINCAILLERIE"}, options: {icon: afdb}},
  {lat:48.93592,lng:2.175475,data:{type: "magasin",nom:"Sartrouville",adresse:"211-213 Avenue Maurice Berteaux",zip:78500 ,city:"Sartrouville",agence:"SAR.jpg",tel:"<a href='tel:+33139576231'>Tel : 01 39 57 62 31</a><br /><a href='tel:+33139576010'>Fax : 01 39 57 60 10</a>",horaires:"Du lundi au vendredi de 7h30 à 12H30 et de 13h30 à 18h30.",infos:"SERRURERIE / QUINCAILLERIE / PLOMBERIE / SANITAIRE"}, options: {icon: afdb}},
  {lat:48.914399,lng:2.336981,data:{type: "magasin",nom:"Service Clés",adresse:"3 Boulevard Jean Jaurès",zip:93400,city:"Saint Ouen",agence:"SCL.jpg",tel:"<a href='tel:+33140128999'>Tel : 01 40 12 89 99</a><br /><a href='tel:+33140129000'>Fax : 01 40 12 90 00</a>",horaires:"Du lundi au vendredi de 7h à 18h.",infos:"PLOMBERIE / SANITAIRE / CHAUFFAGE"}, options: {icon: afdb}},
  {lat:43.683833,lng:7.187612,data:{type: "magasin",nom:"St Laurent du Var",adresse:"9 Allée des Peintres - ZI Secteur A",zip:06700 ,city:"St Laurent du Var",agence:"SLV.jpg",tel:"<a href='tel:+33497191010'>Tel : 04 97 19 10 10</a><br /><a href='tel:+33497191011'>Fax : 04 97 19 10 11</a>",horaires:"Du lundi au vendredi, de 7h45 à 12h15 et de 13h15 à 18h00.",infos:"SERRURERIE / QUINCAILLERIE / PLOMBERIE / SANITAIRE"}, options: {icon: afdb}},
  {lat:43.115207,lng:5.857472,data:{type: "magasin",nom:"La Seyne sur Mer",adresse:"Rue François Noël Babeuf - ZI Camp Laurent",zip:83500 ,city:"La Seyne sur Mer",agence:"SME.jpg",tel:"<a href='tel:+33494940202'>Tel : 04 94 94 02 02</a><br /><a href='tel:+33494065815'>Fax : 04 94 06 58 15</a>",horaires:"Du lundi au jeudi de 8h00-12h & 13h30-17h30, Le vendredi de 8h00-12h & 13h30-17h.",infos:"SERRURERIE / QUINCAILLERIE"}, options: {icon: afdb}},
  {lat:48.914399,lng:2.336981,data:{type: "magasin",nom:"Saint Ouen",adresse:"3 Boulevard Jean Jaurès",zip:93400 ,city:"Saint Ouen",agence:"STO.jpg",tel:"<a href='tel:+33140128585'>Tel : 01 40 12 85 85</a><br /><a href='tel:+33140128889'>Fax : 01 40 12 88 89</a>",horaires:"Ouvert 7 jours sur 7 sans interruption de 7h à 22h.",infos:"SERRURERIE / QUINCAILLERIE / PLOMBERIE / SANITAIRE"}, options: {icon: afdb}},
  {lat:48.53154,lng:2.689483,data:{type: "magasin",nom:"Vaux le Penil",adresse:"401 Rue Pierre et Marie Curie",zip:77000 ,city:"Vaux le Penil",agence:"VLP.jpg",tel:"<a href='tel:+33140619090'>Tel : 01 40 61 90 90</a><br /><a href='tel:+33140619091'>Fax : 01 40 61 90 91</a>",horaires:"Du lundi au jeudi de 7h30 à 17h30, Le vendredi de 7h30 à 16h30.",infos:"PLOMBERIE / SANITAIRE / CHAUFFAGE"}, options: {icon: afdb}},
  {lat:48.844864,lng:2.307984,data:{type: "magasin",nom:"SaniZ 15",adresse:"20 Rue Jean Daudin",zip:75015 ,city:"Paris",agence:"Z15.jpg",tel:"<a href='tel:+33148331919'>Tel : 01 48 33 19 19</a><br /><a href='tel:+33148330203'>Fax : 01 48 33 02 03</a>",horaires:"Du lundi au jeudi de 8h00 à 18h00,  le vendredi de 8h00 à 16h00.",infos:"PLOMBERIE / SANITAIRE / CHAUFFAGE"}, options: {icon: saniz}},
  {lat:48.882695,lng:2.37491,data:{type: "magasin",nom:"SaniZ 19",adresse:"64 bis Rue Meaux",zip:75019 ,city:"Paris",agence:"Z19.jpg",tel:"<a href='tel:+33142063000'>Tel : 01 42 06 30 00</a><br /><a href='tel:+33142063681'>Fax : 01 42 06 36 81</a>",horaires:"Du lundi au vendredi de 7h30 à 18h30.",infos:"PLOMBERIE / SANITAIRE / CHAUFFAGE"}, options: {icon: saniz}},
  {lat:48.856728,lng:2.371116,data:{type: "magasin",nom:"Gayon 11 Desbrueres",adresse:"28 Boulevard Richard Lenoir",zip:75011 ,city:"Paris",agence:"G11.jpg",tel:"<a href='tel:+33140211949'>Tel : 01 40 21 19 49</a><br /><a href='+33143558667'>Fax : 01 43 55 86 67</a>",horaires:"Du Lundi au jeudi 8h00-17h00 et vendredi 8h00-16h00.",infos:"SERRURERIE / OUTILLAGE"}, options: {icon: gay}},
  {lat:48.846854,lng:2.299995,data:{type: "magasin",nom:"Gayon 15",adresse:"20 Rue de la Croix Nivert",zip:75015 ,city:"Paris",agence:"G15.jpg",tel:"<a href='tel:+33153696060'>Tel : 01 53 69 60 60</a><br /><a href='tel:+33142063681'>Fax : 01 42 06 36 81</a>",horaires:"Du Lundi au jeudi 7h30 de 17h30 et vendredi 7h30-16h00",infos:"SERRURERIE / OUTILLAGE"}, options: {icon: gay}},
  {lat:49.003612,lng:1.897754,data:{type: "magasin",nom:"Gayon 78",adresse:"34 Boulevard Michelet",zip:78250 ,city:"Hardricourt",agence:"G18.jpg",tel:"<a href='tel:+33134740034'>Tel : 01 34 74 00 34</a><br /><a href='tel:+33134740034'>Fax : 01 34 74 00 34</a>",horaires:"Du Lundi au jeudi 7h00 de 17h15 et vendredi 7h45-16h15.",infos:"SERRURERIE / OUTILLAGE"}, options: {icon: gay}},
  {lat:44.092967,lng:6.230466,data:{type: "magasin",nom:"Blanc Digne",adresse:"Quartier de la tour",zip:4000 ,city:"Digne les Bains",agence:"B04.jpg",tel:"<a href='tel:+33492312515'>Tel : 04 92 31 25 15</a><br /><a href='tel:+33492312515'>Fax : 04 92 31 25 15</a>",horaires:"Du Lundi au jeudi 7h45-18h00 et vendredi 7h45-16h00.",infos:"SERRURERIE / OUTILLAGE"}, options: {icon: blc}},
  {lat:43.487803,lng:5.38454,data:{type: "magasin",nom:"Blanc Aix",adresse:"625 Rue Georges Claude",zip:13852 ,city:"Aix en Provence",agence:"BAIX.jpg",tel:"<a href='tel:+33442393128'>Tel : 04 42 39 31 28</a><br /><a href='+33442393128'>Fax : 04 42 39 31 28</a>",horaires:"Du Lundi au jeudi 7h30-17h00 et vendredi 7h30-16h00.",infos:"SERRURERIE / OUTILLAGE"}, options: {icon: blc}},
  {lat:43.284277,lng:5.601981,data:{type: "magasin",nom:"Blanc Aubagne",adresse:"Z.I Les Paluds - Avenue des Caniers",zip:13400 ,city:"Aubagne",agence:"BAUG.jpg",tel:"<a href='tel:+33442820533'>Tel : 04 42 82 05 33</a><br /><a href='+33442820533'>Fax : 04 42 82 05 33</a>",horaires:"Du Lundi au jeudi 7h30-17h00 et vendredi 7h30-16h00.",infos:"SERRURERIE / OUTILLAGE"}, options: {icon: blc}},
  {lat:43.627114,lng:5.601981,data:{type: "magasin",nom:"Blanc Salon de Provence",adresse:"Z.I Gandonne, rue Ventadouiro",zip:13300 ,city:"Salon en Provence",agence:"BSDP.jpg",tel:"<a href='tel:+33490532967'>Tel : 04 90 53 29 67</a><br /><a href='+33490532967'>Fax : 04 90 53 29 67</a>",horaires:"Du Lundi au jeudi 7h30-17h00 et vendredi 7h30-16h00.",infos:"SERRURERIE / OUTILLAGE"}, options: {icon: blc}},
  {lat:43.812099,lng:4.329131,data:{type: "magasin",nom:"Blanc Nimes",adresse:"206 Chemin Du Mas de Cheylon",zip:30000 ,city:"Nimes",agence:"B30.jpg",tel:"<a href='tel:+33466041865'>Tel : 04 66 04 18 65</a><br /><a href='+33466041865'>Fax : 04 66 04 18 65</a>",horaires:"Du Lundi au jeudi 7h30-17h00 et vendredi 7h30-16h00.",infos:"SERRURERIE / OUTILLAGE"}, options: {icon: blc}},
  {lat:43.610259,lng:1.426247,data:{type: "magasin",nom:"Blanc Toulouse",adresse:"59 Rue de Béarnais",zip:31000 ,city:"Toulouse",agence:"B31.jpg",tel:"<a href='tel:+33562151020'>Tel : 05 62 15 10 20</a><br /><a href='+33562151020'>Fax : 05 62 15 10 20</a>",horaires:"Du Lundi au jeudi 7h30-17h00 et vendredi 7h30-16h00.",infos:"SERRURERIE / OUTILLAGE"}, options: {icon: blc}},
  {lat:43.137861,lng:5.930376,data:{type: "magasin",nom:"Blanc Toulon",adresse:"Z.I de Toulon Est 1418 avenue de Draguignan",zip:83130 ,city:"Toulon",agence:"B83.jpg",tel:"<a href='tel:+33494757878'>Tel : 04 94 75 78 78</a><br /><a href='+33494757878'>Fax : 04 94 75 78 78</a>",horaires:"Du Lundi au jeudi 7h30-17h00 et vendredi 7h30-16h00.",infos:"SERRURERIE / OUTILLAGE"}, options: {icon: blc}},
  {lat:43.934732,lng:4.784038,data:{type: "magasin",nom:"Blanc Avignon",adresse:"Z.I de Courtine 137 rue du petit Mas",zip:84000 ,city:"Avignon",agence:"B84.jpg",tel:"<a href='tel:+33490808888'>Tel : 04 90 80 88 88</a><br /><a href='+33490808888'>Fax : 04 90 80 88 88</a>",horaires:"Du Lundi au jeudi 7h30-17h00 et vendredi 7h30-16h00.",infos:"SERRURERIE / OUTILLAGE"}, options: {icon: blc}},
  {lat:45.764691,lng:4.868838,data:{type: "magasin",nom:"B2C",adresse:"7 Rue Baraban",zip:69006 ,city:"Lyon",agence:"B2C.jpg",tel:"<a href='tel:+33478520790'>Tel : 04 78 52 07 90</a><br /><a href='+33478520790'>Fax : 04 78 52 07 90</a>",horaires:"Du Lundi au jeudi 7h30-18h30 et vendredi 7h30-17h00.",infos:"SERRURERIE / OUTILLAGE"}, options: {icon: b2c}},
  {lat:45.742359,lng:4.841323,data:{type: "magasin",nom:"Forum Lyon",adresse:"11-A Rue de Gerland",zip:69007 ,city:"Lyon",agence:"LYO.jpg",tel:"<a href='tel:+33426783535'>Tel : 04 26 78 35 35</a><br /><a href='+33426783535'>Fax : 04 26 78 35 35</a>",horaires:"Du Lundi au vendredi 7h30-18h00.",infos:"SERRURERIE / OUTILLAGE"}, options: {icon: afdb}}
];


