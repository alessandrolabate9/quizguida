<?php

//da test
header("Content-type: application/json");
include('config.php');

$num = 1;
$sql = "
select testo
from domande
where id_domanda=".$num;
$records = selectDB($conn, $sql)
print(json_encode($records));
?>