<?php

//da test
header("Content-type: application/json");
include('config.php');

$numero=$_GET['numero'];
$num = 1;
$sql = "
select testo
from domande
where 1=1 and id_domanda=".$numero;
$records = selectDB($conn, $sql);
print(json_encode($records));
?>