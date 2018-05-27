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

        //insert into weekly, monthly, all time tables in name and score is passed in
        if (isset($_POST['name']) && isset($_POST['score'])) {
            $sql = "INSERT INTO weekly (score, name, datePlayed) VALUES (:score, :name, curdate());";
            $statement = $conn->prepare($sql);
                        $statement->bindParam(':name', $name);
                        $statement->bindParam(':score', $score);
                        $name = $_POST['name'];
                        $score = $_POST['score'];
                        $statement->execute();

            $sql = "INSERT INTO monthly (score, name, datePlayed) VALUES (:score, :name, curdate());";
            $statement = $conn->prepare($sql);
                        $statement->bindParam(':name', $name);
                        $statement->bindParam(':score', $score);
                        $name = $_POST['name'];
                        $score = $_POST['score'];
                        $statement->execute();

            $sql = "INSERT INTO alltime (score, name, datePlayed) VALUES (:score, :name, curdate());";
            $statement = $conn->prepare($sql);
                        $statement->bindParam(':name', $name);
                        $statement->bindParam(':score', $score);
                        $name = $_POST['name'];
                        $score = $_POST['score'];
                        $statement->execute();
        }
        //delete old entries from weekly table
        $sql = "delete from weekly where date(datePlayed) < date_add(curdate(), interval 1-dayofweek(curdate()) day);";
        $statement = $conn->query($sql);
        //delete old entries from monthly table
        $sql = "delete from monthly where month(datePlayed) < month(curdate())";
        $statement = $conn->query($sql);
        //delete the lowest score entry from alltime table
        //$sql = "delete from alltime order by score asc limit 1";
        //$statement = $conn->query($sql);

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
