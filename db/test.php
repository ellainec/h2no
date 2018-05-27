
<!DOCTYPE html>
<html>
<body>

<?php
    $servername = "localhost";
    $username = "root";
    $password = "h2no4thewin";
    $dbname = "h2no";


    try {
        //create connection
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        //set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $sql2="SELECT * FROM alltime ORDER BY score DESC";
        $statement2 = $conn->query($sql2);
        $data =  $statement2->fetchAll(PDO::FETCH_ASSOC));
        echo $data;

     }

    catch(PDOException $e)
        {
        echo "failed ". $e->getMessage();
        }
?>
</body>
</html>