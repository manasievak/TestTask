<?php

require 'connect.php';

$id = intval($_GET['id']);

// Delete.
$sql = "DELETE FROM `post` WHERE `id` ={$id} LIMIT 1";

if(mysqli_query($db_conn, $sql))
{
  http_response_code(204);
}
else
{
  return http_response_code(422);
}

?>
