<?php

require 'connect.php';

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)) {
	$request = json_decode($postdata);

	$text = mysqli_real_escape_string($db_conn, trim($request->text));
	$user_id = mysqli_real_escape_string($db_conn, trim($request->user_id));

	$sql = "INSERT INTO `post` (`text`, `user_id`) VALUES ('{$text}', '{$user_id}')";

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
