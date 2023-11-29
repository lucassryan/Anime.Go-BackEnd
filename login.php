<?php

if($_SERVER["REQUEST_METHOD"] == "GET")
{
    if(!empty($_GET["email"]) && !empty($_GET["senha"]))
    {
        $email = $_GET["email"];
        $senha = $_GET["senha"];

        $hostname = "localhost";
        $database = "db_animego";
        $password = ""; 
        $user = "root";

        $conexao = new mysqli($hostname, $user, $password, $database);

        $sqlVerificarSeExiste = mysqli_query($conexao, "SELECT username FROM users WHERE email LIKE '".$email."' AND senha lIKE '".$senha."'");

        if(!mysqli_num_rows($sqlVerificarSeExiste))
        {
            die("Senha ou e-mail inválidos.");
        }
        else
        {
            header("Location: home.html");
            exit();
        }

        if($conexao->connect_error)
        {
            die("Conexão falhou...");
        }

    }
}

?>