<?php

include 'includes/configuration.php';
include 'includes/fonctions.php';

$MysqlHandle = mysql_pconnect( SQL_SERVER, SQL_LOGIN, SQL_PASSWORD );
if ( !$MysqlHandle )
{
	echo "Error connecting to database.\n";
}

mysql_select_db( SQL_DATABASE, $MysqlHandle );

//The timezone you live in IE: America/Los_Angeles
date_default_timezone_set( "Europe/Paris" );

function CreateElement( $URL, $Date, $Freq, $Priority )
{
	$ReturnXML = "<url>\n";
	$ReturnXML .= "<loc>" . $URL . "</loc>\n";
	$ReturnXML .= "<lastmod>" . $Date . "</lastmod>\n";
	$ReturnXML .= "<changefreq>" . $Freq . "</changefreq>\n";
	$ReturnXML .= "<priority>" . $Priority . "</priority>\n";
	$ReturnXML .= "</url>\n";
	return $ReturnXML;
}

$File = "sitemap.xml";
//Link to your main website IE: http://climbersflash.valvx.com/
// SITE_URL = "[WEBSITEURL]";
//Any pages that are not dynamic IE: otherpage.php
// $StaticPages = array( SITE_URL . "[STATICPAGE]" );
$StaticPages = array();

$PageXML = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
$PageXML .= "<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n";

$PageXML .= CreateElement( SITE_URL, date( "Y-m-d" ), "monthly", 1.0 );

foreach( $StaticPages as $Page )
{
	$PageXML .= CreateElement( $Page, date( "Y-m-d" ), "monthly", 0.8 );
}

//This is adding in all the links for the specific routes

//Query for Mysql Database IE: SELECT * FROM ContentTable


/************* Listing des Chapitres *************/
$Query = "SELECT * FROM " . SITE_PREFIX . "_chapitre";
$Result = mysql_query( $Query );

while( $Info = mysql_fetch_array( $Result ) )
{
	//File and info to parse to it, like an id or unique name
	$Page = SITE_URL . "/c" . $Info["chp_id"] . "-" . $Info["chp_nom"];
	//The date of the last modification of the content, or you can use NOW()
	$PageXML .= CreateElement( $Page, "2014-09-24", "monthly", 0.5 );
}
/**/

/************* Listing des Familles *************/
$Query = "SELECT * FROM " . SITE_PREFIX . "_famille
				LEFT OUTER JOIN " . SITE_PREFIX . "_chapitre
					ON chp_id = fam_id_chp";
$Result = mysql_query( $Query );

while( $Info = mysql_fetch_array( $Result ) )
{
	//File and info to parse to it, like an id or unique name
	$Page = SITE_URL . "/c" . $Info["chp_id"] . "f" . $Info["fam_id"] . "-" . $Info["chp_nom"] . "-" . Rewrite_url( $Info["fam_nom"] );
	//The date of the last modification of the content, or you can use NOW()
	$PageXML .= CreateElement( $Page, "2014-09-24", "monthly", 0.5 );
}
/**/

/************* Listing des Gammes *************/
$Query = "SELECT * FROM " . SITE_PREFIX . "_gamme
				LEFT OUTER JOIN " . SITE_PREFIX . "_famille
					ON fam_id = gam_id_fam
				LEFT OUTER JOIN " . SITE_PREFIX . "_chapitre
					ON chp_id = fam_id_chp";

$Result = mysql_query( $Query );

while( $Info = mysql_fetch_array( $Result ) )
{
	//File and info to parse to it, like an id or unique name
	$Page = SITE_URL . "/c" . $Info["chp_id"] . "f" . $Info["fam_id"] . "g" . $Info["gam_id"] . "-" . $Info["chp_nom"] . "-" . Rewrite_url( $Info["fam_nom"] ) . "-" . Rewrite_url( $Info["gam_nom"] );
	//The date of the last modification of the content, or you can use NOW()
	$PageXML .= CreateElement( $Page, "2014-09-24", "monthly", 0.5 );
}
/**/

/************* Listing des Produits *************/
$Query = "SELECT * FROM " . SITE_PREFIX . "_produit
				LEFT OUTER JOIN " . SITE_PREFIX . "_gamme
					ON gam_id = pdt_id_gam
				LEFT OUTER JOIN " . SITE_PREFIX . "_famille
					ON fam_id = gam_id_fam
				LEFT OUTER JOIN " . SITE_PREFIX . "_chapitre
					ON chp_id = fam_id_chp";
$Result = mysql_query( $Query );

while( $Info = mysql_fetch_array( $Result ) )
{
	//File and info to parse to it, like an id or unique name
	$Page = SITE_URL . "/c" . $Info["chp_id"] . "f" . $Info["fam_id"] . "g" . $Info["gam_id"] . "p" . $Info["pdt_id"] . "-" . $Info["chp_nom"] . "-" . Rewrite_url( $Info["fam_nom"] ) . "-" . Rewrite_url( $Info["gam_nom"] ) . "-" . Rewrite_url( $Info["pdt_nom"] );
	//The date of the last modification of the content, or you can use NOW()
	$PageXML .= CreateElement( $Page, "2014-09-24", "monthly", 0.5 );
}
/**/


$PageXML .= "</urlset>";

$FileHandle = fopen( $File, "w" );
fwrite( $FileHandle, $PageXML );
fclose( $FileHandle );

//This pings googles webmaster tool set for your website. I recommend using it to keep track of your sitemap indexing( have to submit it through webmaster tools first ) and to check for crawling errors and other great information!
$CurlHandle = curl_init();
curl_setopt( $CurlHandle, CURLOPT_URL, "www.google.com/webmasters/tools/ping?sitemap=" . urlencode( SITE_URL . $File ) );
curl_setopt( $CurlHandle, CURLOPT_RETURNTRANSFER, 1 );

curl_exec( $CurlHandle );

curl_close( $CurlHandle );
?>
