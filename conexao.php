<?php

    $host = "localhost";
    $usuario = "root";
    $senha= "";
    $bd = "ocorrencia";

    $mysqli = new mysqli($host, $usuario, $senha, $bd);

    if($mysqli->connect_errno)
    echo "Falha na conexao:" ("mysqli->connect_erro.") .$mysqli->connect_error;

?>