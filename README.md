# Scouting-System-2023
A browser based data entry form and local database for FRC Scouting

# How the entire system works:
This Web-based form collection and portable local database system is a tool designed for collecting data during robotics competitions. The system operates by using local-hosted Web-forms to gather information from participants and competitors during the competition. The forms can be easily accessed through a web browser, making the data collection process simple and efficient compared to the tedious task of standardizing which device is used for data collection.

The entire system including the database storage, server-hosting program, and html form site can all held on a flash drive and requires no program installation on the host device*. The collected data is stored in a local csv file on the drive, making it portable and easily transported to different competition locations, can be accessed and run offline, and has a plug-n-play nature for use on any windows system.

The form can be used to collect a variety of information, including team, robot, and performance data. It is whatever the designer needs it for. This information can be used to evaluate the performance of individual teams and robots and to make informed decisions about our pick list. The system will also be able to have its own chrting software in order to analize data on the site itself. 

# Program dependencies:
The entire system has no dependencies other than a Windows computer to run on. A Internet connection is not necessary. However if you do want to utilize the form hosting server, it must be connected to the other devices using a local network. When loading the system for the first time you must make sure that the file php.zip and apache.zip is extracted in the same root folder. In order to do this simply righ-click on the zip files and select 'Extract Here' you only need to do this once, and if the folder is succesfully extracted you can delete the zip file. 

# Blue Alliance API
This system, when connected to the interenet, interfaces with and gets usefull data from the Blue Alliance API. Aspects of the site are **Powered by the Blue Alliance** and help this site with data validation and data collection. As well as getting many key team, event, and match details and scoring. See their amazing site here at https://thebluealliance.com  

# HTML Form:
The html form is in a .php file for server hosting, but contains regular html formatting with some JavaScript, CSS and aditional PHP code. The site is based on the 2023 Season FRC Game and has multiple questions, buttons, toggles, and selection GUI's for the purpose of maximum data collection for the purpose of scouting data.

# Server-Hosting
Server hosting is taken care of by using a php server which hosts the index.php server with the html form on it. It will use the pre-installed php files to host it by giving your system a connection to use those files with the php command in cmd, and it will open the server terminal and webpage on port "5199" on your computer's local IP address. 

!! This form is only accessible from your local network !! (Unless manually port-forwarded)

# Data Output
The data collected on the form all outputs to a regular csv file which, if not existing already, will be created with the name scouting.csv. After it has been created all additional data submitted to the form will be appended to the .csv file. While no other data program is provided, you can import this csv file into multiple different programs for data analysis including Excel, Google Sheets, Tableau, etc. 

*Apache and PHP files needed to be downloaded as well as the files inside of this repository

*This is an old description, as the entire site is currently under development. check https://github.com/RedGriffen18/5199ScoutingSystem/tree/main if you want to see a working version
