<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "travel_agent";

// Create a connection
$conn = mysqli_connect($servername, $username, $password, $database);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form data is submitted
if (isset($_POST['save_booking'])) {
    // Get form input values and sanitize them
    $first_name = $conn->real_escape_string($_POST['first_name']);
    $last_name = $conn->real_escape_string($_POST['last_name']);
    $gender = $conn->real_escape_string($_POST['gender']);
    $country = $conn->real_escape_string($_POST['country']);
    $email = $conn->real_escape_string($_POST['email']);
    $phone_number = $conn->real_escape_string($_POST['phone_number']);
    // Format the start_date and end_date into Y-m-d
    $start_date = date('Y-m-d', strtotime($_POST['start_date']));
    $end_date = date('Y-m-d', strtotime($_POST['end_date']));

    $message = $conn->real_escape_string($_POST['message']);

    // Prepare SQL query to insert data into book now table
    $sql = "INSERT INTO book_now (first_name, last_name, gender, country, email,phone_number, start_date, end_date , message) 
    VALUES ('$first_name', '$last_name', '$gender', '$country', '$email', 
    '$phone_number', '$start_date', '$end_date', '$message')";

    // Execute the query
    if ($conn->query($sql) === TRUE) {
        // Output JavaScript to show an alert and then redirect
        echo "<script>
                alert('Your booking has been submitted successfully!');
                window.location.href = 'display-record.php';
             </script>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close the connection
    $conn->close();
}
