<?php

require 'connect.php';

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)) {
	$request = json_decode($postdata);

	$id = mysqli_real_escape_string($db_conn, (int)$_GET['id']);

	$text = mysqli_real_escape_string($db_conn, trim($request->text));

	$sql = "UPDATE `post` SET `text` = '$text' WHERE `id` = '{$id}' LIMIT 1";

if(mysqli_query($db_conn, $sql))
{
  http_response_code(201);
}
else
{
  return http_response_code(422);
}
}


?>
