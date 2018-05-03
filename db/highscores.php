<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "h2no";

    $methodType = $_SERVER['REQUEST_METHOD'];
    $data = "not working";

if ($methodType === 'POST') {
    $data = "this is a POST request";
    //$timePeriod = $_POST['period'];
    try {
        //create connection
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        //set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
/*
            $sql = "INSERT INTO leadership (name, score, datePlayed) VALUES (:name, :score, curdate() )";
            $statement = $conn->prepare($sql);
            $statement->bindParam(':name', $name);
            $statement->bindParam(':score', $score);
            $name = $_POST['name'];
            $score = $_POST['score'];
            $statement->execute();
*/
            $sql="SELECT * FROM leadership ORDER BY score DESC";
        $statement = $conn->query($sql);
        $data = $statement->fetchAll(PDO::FETCH_ASSOC);


        }
    catch(PDOException $e)
        {
        echo "failed ". $e->getMessage();
        }
        echo json_encode($data, JSON_FORCE_OBJECT);
}