<!DOCTYPE html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Choki Travel - Home</title>
    <link rel="stylesheet" href="../../stylesheet/styles.css">
    <link rel="stylesheet" href="../../stylesheet/sub-feature.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
        .styled-table {
            border-collapse: collapse;
            margin: 25px 0;
            font-size: 0.9em;
            font-family: sans-serif;
            min-width: 400px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
        }

        .styled-table thead tr {
            background-color: #009879;
            color: #ffffff;
            text-align: left;
        }

        .styled-table th,
        .styled-table td {
            padding: 12px 15px;
        }

        .styled-table tbody tr {
            border-bottom: 1px solid #dddddd;
        }

        .styled-table tbody tr:nth-of-type(even) {
            background-color: #f3f3f3;
        }

        .styled-table tbody tr:last-of-type {
            border-bottom: 2px solid #009879;
        }

        .styled-table tbody tr.active-row {
            font-weight: bold;
            color: #009879;
        }
    </style>
</head>

<body>
    <header class="header-content">
        <img width="80px" class="logo" src="../../assets/logo.png" alt="Choki Dorji">
        <h1 class="logo">Choki Travel Agent</h1>
        <div class="search">
            <input type="text" placeholder="Search" class="search-input">
            <i class="search-icon fa fa-search"></i>
        </div>

        <div class="responsive-header">
            <img width="80px" src="../../assets/logo.png" alt="Choki Dorji">
            <h1>Choki Travel Agent</h1>
        </div>
    </header>
    <nav>
        <ul class="my-menu">
            <li><a href="../index.html">HOME</a></li>
            <li><a href="#"> ABOUT US </a>
                <ul>
                    <li><a href="../about-us/contact.html">CONTACT</a></li>
                    <li><a href="../about-us/faq.html">FAQ</a></li>
                </ul>
            </li>
            <li><a href="book-now.html"> BHUTAN </a>
                <ul>
                    <li><a href="../bhutan/geography.html"> GEOGRAPHY </a></li>
                    <li><a href="../bhutan/hotel.html"> HOTELS </a></li>
                    <li><a href="../bhutan/calendar.html">FESTIVAL CALENDAR</a></li>
                    <li><a href="../bhutan/flight.html"> FLIGHT </a></li>
                    <li><a href="../bhutan/visa.html"> VISA </a></li>
                </ul>
            </li>
            <li><a href="#"> PACKAGES </a>
                <ul>
                    <li><a href="../packages/culture.html"> CULTURAL </a></li>
                    <li><a href="../packages/festival.html"> FESTIVAL </a></li>
                    <li><a href="../packages/trekking.html"> TREKKING </a></li>
                </ul>
            </li>
            <li>
                <a href="book-now.html"> BOOK NOW </a>
            </li>
        </ul>
    </nav>
    <!-- Main Contain -->
    <main style="display: flex; flex-direction: column;">
        <h3 style="margin-top: 12px; margin-bottom: 12px;">Booking Records</h3>
        <!-- <table class="styled-table" style="width: 80%;">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Points</th>
                    <th>Points</th>
                    <th>Points</th>
                    <th>Points</th>
                    <th>Points</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Dom</td>
                    <td>6000</td>
                    <td>6000</td>
                    <td>6000</td>
                    <td>6000</td>
                    <td>6000</td>
                </tr>
                <tr class="active-row">
                    <td>Melissa</td>
                    <td>5150</td>
                    <td>5150</td>
                    <td>5150</td>
                    <td>5150</td>
                    <td>5150</td>
                </tr>
            </tbody>
        </table> -->
        <?php
        // Database connection
        $servername = "localhost";
        $username = "root";
        $password = "";
        $database = "travel_agent";

        // Create connection
        $conn = new mysqli($servername, $username, $password, $database);

        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        // Fetch data from `book_now` table
        $sql = "SELECT first_name, last_name, gender, country, email, phone_number, start_date, end_date, message FROM book_now";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            echo "<table class='styled-table' style='width: 80%;'>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Gender</th>
                            <th>Country</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>";
            
            // Output data of each row
            while($row = $result->fetch_assoc()) {
                echo "<tr>
                        <td>" . htmlspecialchars($row["first_name"]) . "</td>
                        <td>" . htmlspecialchars($row["last_name"]) . "</td>
                        <td>" . htmlspecialchars($row["gender"]) . "</td>
                        <td>" . htmlspecialchars($row["country"]) . "</td>
                        <td>" . htmlspecialchars($row["email"]) . "</td>
                        <td>" . htmlspecialchars($row["phone_number"]) . "</td>
                        <td>" . htmlspecialchars($row["start_date"]) . "</td>
                        <td>" . htmlspecialchars($row["end_date"]) . "</td>
                        <td>" . htmlspecialchars($row["message"]) . "</td>
                    </tr>";
            }
            echo "</tbody></table>";
        } else {
            echo "No bookings found.";
        }

        // Close the database connection
        $conn->close();
        ?>
    </main>
    <footer>
        <p>&copy; 2024 Choki Dorji</p>
        <p><i class="fa fa-phone"></i>Phone No: <span>+975 17 44 22 82</span></p>
        <p><i class="fa fa-google"></i>Email Address: <span>chokidorji889@yahoo.com</span></p>
        <div style="display: flex; gap: 10px; margin: 16px 0; font-size: 36px">
            <i class="fa fa-facebook"></i>
            <i class="fa fa-whatsapp"></i>
            <i class="fa fa-twitter"></i>
        </div>

    </footer>
    <script src="../../scripts/form-validation.js"></script>
</body>

</html>