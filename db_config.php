<?php
    $servername="localhost";
    $username="root";
    $password="";
    $dbname = "testform";
    $conn = mysqli_connect($servername, $username, $password, $testform);
      if(!$conn){
          die('Could not Connect MySql Server:'. mysqli_connect_error());
        }
?>