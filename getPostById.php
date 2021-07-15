<?php

require 'connect.php';

$id = $_GET['id'];
  

$sql = "SELECT * FROM `post` WHERE `id` = '{$id}' LIMIT 1";

$result = mysqli_query($db_conn, $sql);
$row = mysqli_fetch_assoc($result);

echo $json = json_encode($row);
exit;

?>
