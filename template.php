<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="Icons/5199Icon.png">
    <title>Stand Scouting</title>
    <link rel="stylesheet" href="style.css">
</head>
</head>
<body>
    <!--Navigation Bar-->
    <header>
        <div class="logo">
        <a href="index.html"><img src="icons/5199Icon.png" class="header--icon"></a>
            <a href="index.html">5199 Strategy Site</a>
        </div>
        <div class="menu">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
        <nav>
            <ul>
                <li><a href="#">Stand Scouting</a>
                    <ul>
                        <li>
                            <a href="standForm.php">Stand Form</a>
                            <a href="#">Scouter Schedule</a>
                        </li>
                    </ul>
                </li>
                <li><a href="#">Pit Scouting</a>
                    <ul>
                        <li>
                            <a href="#">Pit Form</a>
                            <a href="#">Picture Upload</a>
                        </li>
                    </ul>
                </li>
                <li><a href="#">QR Scanner</a></li>
                <li><a href="#">Data Analysis</a>
                    <ul>
                        <li>
                            <a href="#">Match Analysis</a>
                            <a href="#">Team Analysis</a>
                            <a href="#">Team Compairison</a>
                            <a href="#">Data Validation</a>
    
                        </li>
                    </ul>
                </li>
                <li><a href="#">Config</a>
                </li>
            </ul>
        </nav>  
    </header>
    <script src="navBar.js"></script>
    <div class="text" style="height: 400vh; background-color: #16478e;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur tenetur, quis nihil rerum quibusdam nisi perspiciatis eum quasi ea vel, maiores sunt consequuntur quo quidem perferendis iure odit minus? Magni.</div> 
    <script>
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/service-worker.js')
        }
    </script>
</body>
</html>