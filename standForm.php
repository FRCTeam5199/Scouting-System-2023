<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="Icons/5199Icon.png">
    <title>Stand Scouting</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="formStyle.css">

</head>
</head>
<body>
    <!--NavBar-->
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
    <!--Form-->
    <form>
        <div class="grid head" style="display: flex; position: fixed; top: 80px; left: 50%; background-color: gray; z-index: 9; transition: 0.2s;">
            <p id="header" style="margin: auto 5px; color: white; padding-left: 20px;">Team Info</p>
            <img id="team-image" style="margin: auto 5px; padding-right: 20px;"/>
        </div>
        <!--Match Info-->
        <section style="grid-template-columns: 1fr;">
            <div class="grid" style="grid-template-columns: repeat(5, 1fr); grid-template-rows: repeat(3, 1fr);">
                <label class="button">
                    <input type="radio" value="r1" name="scouter">
                    <span class="piece" style="background-color: red;"></span>
                    <strong id="r1">Red&nbsp;1</strong>
                </label>
                <label class="button">
                    <input type="radio" value="r2" name="scouter">
                    <span class="piece" style="background-color: red;"></span>
                    <strong id="r2">Red&nbsp;2</strong>
                </label>
                <label class="button">
                    <input type="radio" value="r3" name="scouter">
                    <span class="piece" style="background-color: red;"></span>
                    <strong id="r3">Red&nbsp;3</strong>
                </label>
                <input type="text" placeholder="Scouter Name" name="name" style="grid-column: 4/6;" class="input" autocomplete="given-name">
                <label class="button">
                    <input type="radio" value="b1" name="scouter">
                    <span class="piece" style="background-color: #16478e;"></span>
                    <strong id="b1">Blue&nbsp;1</strong>
                </label>
                <label class="button">
                    <input type="radio" value="b2" name="scouter">
                    <span class="piece" style="background-color: #16478e;"></span>
                    <strong id="b2">Blue&nbsp;2</strong>
                </label>
                <label class="button">
                    <input type="radio" value="b3" name="scouter">
                    <span class="piece" style="background-color: #16478e;"></span>
                    <strong id="b3">Blue&nbsp;3</strong>
                </label>
                <input type="number" placeholder="Match Number" name="match" id="match" style="grid-column: 4/6;" class="input" min="0" pattern="[0-9]*" autocomplete="off">
                <label class="button" style="grid-column: 1/4;">
                    <input type="checkbox" value="noShow" name="noShow">
                    <span class="piece" style="background-color: black;"></span>
                    <strong id="nS">Not on Field</strong>
                </label>
                <input type="hidden" placeholder="Team Number" name="team" id="team" style="grid-column: 4/6;" class="input" min="0" pattern="[0-9]*" autocomplete="off">
            </div>
        </section>
        <!--Auto Info-->
        <section id="autoInfo">
            
        </section>
        <!--Tele Info-->
        <section id="teleInfo"></section>
        <!--Misc Info-->
        <section id="miscInfo"></section>
    </form>
    <script src="navBar.js"></script>
    <script src="formConfig.js"></script>    
    <script src="formScript.js"></script>

</body>
</html>
