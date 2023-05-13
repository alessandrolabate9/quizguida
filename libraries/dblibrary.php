<?php
    function openDB($server='localhost', $user='root', $passw, $database='scuolaguida'){
        $conn = mysqli_connect($server, $user, $passw, $database);
        if(!$conn)
            die("Errore connessione a Mysql" .mysqli_error($conn));
        return $conn;
    }
    
    function selectDB($conn, $sql){
        $risultatoquery = mysqli_query($conn, $sql);
        if(!$risultatoquery) die("Errore connessione sql: " .mysqli_error($conn));
        
        while($record = mysqli_fetch_assoc($risultatoquery)){ //ogni record array associato a variabile
            $records[] = $record; //array di array contenente query
        }
        
        mysqli_free_result($risultatoquery);
        return $records;
    }
    
    function closetab($conn){
        mysqli_close($conn);
    }
?>