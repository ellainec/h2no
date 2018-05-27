         <?php
             $servername = "localhost";
             $username = "root";
             $password = "h2no4thewin";
             $dbname = "h2no";

          try {
                 //create connection
                 $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
                 array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
                     die(json_encode(array('outcome' => true)));
     }
     catch(PDOException $ex){
         die(json_encode(array('outcome' => false, 'message' => 'Unable to connect')));
     }