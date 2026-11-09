<?php
require_once 'gdt/cldbgoeland.php';
header("Access-Control-Allow-Origin: *");
$dbgo = new DBGoeland();
$dbgo->queryRetJson2("cn_aff_rm_coord_chantier_dico_metier_liste");
echo $dbgo->resString;
unset($dbgo);

