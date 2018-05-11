<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "h2no";

    $methodType = $_SERVER['REQUEST_METHOD'];
    $data = "not working";

    try {
        //create connection
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        //set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $sql = "INSERT INTO weekly (score, name, datePlayed) VALUES (:score, :name, curdate())";
        $statement = $conn->prepare($sql);
        $statement->bindParam(':name', $name);
        $statement->bindParam(':score', $score);
        $name = $_POST['name'];
        $score = $_POST['score'];
        $statement->execute();
     }

    catch(PDOException $e)
        {
        echo "failed ". $e->getMessage();
        }
