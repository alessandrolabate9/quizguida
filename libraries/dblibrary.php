<?php
    function openDB($server, $user, $passw, $database){
        $conn = mysqli_connect();
        if(!$conn)
            die("Errore connessione a Mysql". mysqli_error($conn));
        return $conn;
    }
    
    function selectDB($conn, $sql){
        $risultatoquery = mysql_query($conn, $sql);
        if(!$risultatoquery) die("Errore connessione sql: " .mysqli_error($conn));
        //test
        $records = $risultatoquery;
        //test
        mysqli_free_result($risultatoquery);
        return $records;
    }
    
    function closetab($conn){
        mysqli_close($conn);
    }
?>