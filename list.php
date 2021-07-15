<?php

require 'connect.php';
  
$posts=[];
$sql = "SELECT * FROM post WHERE `user_id` = 1";

if($result = mysqli_query($db_conn,$sql)) {
$cr=0;
while($row=mysqli_fetch_assoc($result)) {
	$posts[$cr]['text'] = $row['text'];
	$posts[$cr]['id'] = $row['id'];
	$posts[$cr]['user_id'] = $row['user_id'];
	$posts[$cr]['date'] = $row['date'];
	$cr++;
}

//print_r($posts);
echo json_encode($posts);
}
else{http_response_code(404);}

?>
