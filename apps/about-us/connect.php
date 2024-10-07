<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "travel_agent";

// Create a connection
// $conn = mysqli_connect($servername, $username, $password, $database);
$conn = new mysqli($servername, $username, $password, $database);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form data is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form input values and sanitize them
    $name = $conn->real_escape_string($_POST['name']);
    $email = $conn->real_escape_string($_POST['email']);
    $subject = $conn->real_escape_string($_POST['subject']);
    $message = $conn->real_escape_string($_POST['message']);

    // Prepare SQL query to insert data into contacts table
    $sql = "INSERT INTO contact_us (name, email, subject, message) VALUES ('$name', '$email', '$subject', '$message')";

    // Execute the query
    if ($conn->query($sql) === TRUE) {
        header("Location: contact.html?success=true");
        exit();
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close the connection
    $conn->close();
}

?>