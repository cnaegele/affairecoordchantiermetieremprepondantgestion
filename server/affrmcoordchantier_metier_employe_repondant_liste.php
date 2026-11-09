<?php
require_once 'gdt/cldbgoeland.php';
header("Access-Control-Allow-Origin: *");
if (isset($_GET['idmetier'])) {
    $idMetier = $_GET['idmetier'];
    $dbgo = new DBGoeland();
    $dbgo->queryRetJson2("cn_aff_rm_coord_chantier_lien_metier_emprepondant_liste $idMetier");
    echo $dbgo->resString;
    unset($dbgo);
} else {
    echo '[]';
}
