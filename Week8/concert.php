<html>
<head><title>Concert Booking</title></head>
    <body>
        <link rel="stylesheet" href="css/custom.css">
        <link rel="stylesheet" href="css/bootstrap.css">
    
    
<?php
// echo "hello world";
echo "<h2>"."Welcome to Happy Band's Concert Page"."</br>"
    //blank space
    ."&nbsp;"."&nbsp;"."&nbsp;"."&nbsp;"."&nbsp;"."&nbsp;"."&nbsp;"
    //end of blank space
    ."Please pick a seat!"."</h2>";
        
$seats = ['A-1', 'A-2', 'A-3', 'A-4', 'A-5',
		  'B-1', 'B-2', 'B-3', 'B-4', 'B-5',
		  'C-1', 'C-2', 'C-3', 'C-4', 'C-5'];
$counter = 1;

			echo "<form action = 'concertResult.php' method='POST'>";

		  foreach ($seats as $seat) {

  
		  	echo "<input type='checkbox' class='squaredThree' name='seats[]' value='".$seat."'></input>";
		  	echo ($seat);
		  	if ($counter % 5 == 0){
		  		echo "<br>";

		  	}
		  ++$counter;
		  }

		  echo "<input type='submit' value='Buy Now' />";
?>
        </body>

</html>