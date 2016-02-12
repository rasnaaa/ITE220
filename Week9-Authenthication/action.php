<?php
require_once ("connection.php");
session_start();
$form = $_GET['q'];
if($form == "login"){
    $username = $_POST["login-username"];
    $password = $_POST["login-password"];
    checkLogin($username, $password);
    if(checkLogin($username, $password)){
    // if($username == "admin" && $password == "1234"){
    	$_SESSION["username"] = $username;
        header("location:welcome.php");
        
    }
    else{
    	header("location:index.php?q=error");
    }
    
}
else if($form == "logout"){
	session_destroy();
	header("location:index.php");
     
}
elseif ($form == "register") {
    $username =$_POST["register-username"];
    $password =$_POST["register-password"];
    $repeatpassword =$_POST["register-repeat-password"];
    if($password==$repeatpassword){
       addNewUser($username, $password);

    }
       header("location:index.php");
    # code...
}
//echo $username . " " . $password;
?>