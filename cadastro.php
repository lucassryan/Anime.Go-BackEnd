
<?php

if(!empty($_GET["nome"]) && !empty($_GET["nome_usuario"]) && !empty($_GET["email"]) && !empty($_GET["senha"]) && !empty($_GET["data_nascimento"]))
{
    $nome_completo = $_GET["nome"];
    $nome_usuario = $_GET["nome_usuario"];
    $email = $_GET["email"];
    $senha = $_GET["senha"];
    $data_nascimento = $_GET["data_nascimento"];
    $estado = $_GET["estado"];

    $hostname = "localhost";
    $database = "db_animego";
    $password = ""; 
    $user = "root";

    $conexao = new mysqli($hostname, $user, $password, $database);

    $query = sprintf("INSERT INTO users (username, fullname, email, senha, data_nascimento, estado) VALUES ('%s','%s','%s','%s','%s','%s')",
    $conexao->real_escape_string($nome_usuario),
    $conexao->real_escape_string($nome_completo),
    $conexao->real_escape_string($email),
    $conexao->real_escape_string($senha),
    $conexao->real_escape_string($data_nascimento),
    $conexao->real_escape_string($estado)
);
    $res = mysqli_query($conexao, $query);
}



?>