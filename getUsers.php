<?php

require 'connect.php';
  
$user=[];
$sql = "SELECT * FROM user";

if($result = mysqli_query($db_conn,$sql)) {
$cr=0;
while($row=mysqli_fetch_assoc($result)) {
	$user[$cr]['user_id'] = $row['id'];
	$user[$cr]['name'] = $row['name'];
	$user[$cr]['lastname'] = $row['lastname'];
	$user[$cr]['img'] = $row['img'];
	$cr++;
}

//print_r($posts);
echo json_encode($user);
}
else{http_response_code(404);}

?>
