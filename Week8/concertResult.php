<html>
<head><title>Concert Booking</title></head>
    <body>
        <link rel="stylesheet" href="css/custom.css">
        <link rel="stylesheet" href="css/bootstrap.css">

<?php
// print_r($_POST["seats"]);
$totalPrice =0;
$selectedSeats = $_POST["seats"];
echo "&nbsp;"."<div>"."You have bought " . count($selectedSeats) . " seat(s) <br>";
// echo "Those seats are: " , $_POST["seats"];
//define lucky seat
$luckySeat = "B-5";

foreach ($selectedSeats as $selSeat) {
	$price = 0;
    $disc = 0.5;
    
    echo  "<strong>".$selSeat ."</strong>". " : "; 
    
        if ($selSeat[0] ==  "A" ){
            $price = 3000;
        }
        else if($selSeat[0] == "B"){
            $price = 2000;
        }else {
            $price = 1000;
        }
    
        if($luckySeat == $selSeat) {
            $price = $price*$disc;
        }
    
    
        
        if($luckySeat == $selSeat) {
            echo "<strong>".$price."</strong>"."</br>"."This is the lucky seat!"."</br>"."You receive 50% discount!" . "</br>";
        }else {
            echo "<strong>".$price."</strong>"."</br>";    
        }
    $totalPrice += $price;
}


echo "<br/>" . "Total price: "  ."<strong>" .$totalPrice  . " THB"."</strong>"."</div>";


?>
    </body>
</html>