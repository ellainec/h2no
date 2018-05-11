<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "h2no";

    $methodType = $_SERVER['REQUEST_METHOD'];
    $data = array();

    try {
        //create connection
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        //set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $sql = "SELECT * FROM weekly WHERE datePlayed = CURDATE() ORDER BY score DESC";
        $statement = $conn->query($sql);
        array_push($data, $statement->fetchAll(PDO::FETCH_ASSOC));

        $sql="SELECT * FROM monthly WHERE MONTH(datePlayed) = MONTH(CURDATE()) ORDER BY score DESC";
        $statement = $conn->query($sql);
        array_push($data, $statement->fetchAll(PDO::FETCH_ASSOC));

        $sql="SELECT * FROM alltime ORDER BY score DESC";
        $statement = $conn->query($sql);
        array_push($data, $statement->fetchAll(PDO::FETCH_ASSOC));
     }

    catch(PDOException $e)
        {
        echo "failed ". $e->getMessage();
        }
    echo json_encode($data, JSON_FORCE_OBJECT);