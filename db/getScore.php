<?php
    $servername = "localhost";
    $username = "root";
    $password = "h2no4thewin";
    $dbname = "h2no";

    $methodType = $_SERVER['REQUEST_METHOD'];
    $data = array();

    try {
        //create connection
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        //set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        //grab weekly, monthly, and all time highscores
        $sql2 = "SELECT * FROM weekly WHERE date(datePlayed) > date_add(CURDATE(), interval 1-dayofweek(curdate()) day) ORDER BY score DESC";
        $statement2 = $conn->query($sql2);
        array_push($data, $statement2->fetchAll(PDO::FETCH_ASSOC));

        $sql2="SELECT * FROM monthly WHERE MONTH(datePlayed) = MONTH(CURDATE()) ORDER BY score DESC";
        $statement2 = $conn->query($sql2);
        array_push($data, $statement2->fetchAll(PDO::FETCH_ASSOC));

        $sql2="SELECT * FROM alltime ORDER BY score DESC";
        $statement2 = $conn->query($sql2);
        array_push($data, $statement2->fetchAll(PDO::FETCH_ASSOC));

     }

    catch(PDOException $e)
        {
        echo "failed ". $e->getMessage();
        }
    echo json_encode($data, JSON_FORCE_OBJECT);
    ?>