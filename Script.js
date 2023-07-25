fetch("secret.txt")
  .then(response => response.text())
  .then(data => {
    const secretKey = data.trim();
    console.log("Key Loaded");

    // API - Team Numbers per Match
    const scouterInputs = document.getElementsByName('scouter');
    const matchInput = document.getElementsByName('match')[0];
    const teamInput = document.getElementsByName('team')[0];

    scouterInputs.forEach(input => {
        input.addEventListener("input", getTeams);
    });
    scouterInputs.forEach(input => {
        input.addEventListener("input", getHeader);
    });
    matchInput.addEventListener("input", () => {
        setTimeout(getHeader, 500);
    });

    teamInput.addEventListener("input", getHeader); 
    matchInput.addEventListener("input", getTeams); 


    //Input Storage Update

    function logInputChange(event) {
      var inputElement = event.target;
      var id = inputElement.id || "inputID";
      var name = inputElement.name || "inputName";
      var value = inputElement.value;

      sessionStorage.setItem(window.location.href+"|"+name+"|"+id, value);
      
      const scoutName = sessionStorage.getItem(window.location.href+"|"+"name|name");
      localStorage.setItem(window.location.href+"|"+"name|name", scoutName);
    }

    var inputElements = document.querySelectorAll('input');

    inputElements.forEach(function(inputElement) {
      inputElement.addEventListener('input', logInputChange);
    });

    //On Load Function 

    function windowLoaded() {
      document.getElementById('name').value = localStorage.getItem(window.location.href+"|"+"name|name");
      // You can perform other actions here after the window has loaded
    }

    // Attach the onload event to the window object
    window.onload = windowLoaded;




    function getTeams() {
        const apiKey = secretKey;
        const eventKey = "2023gal";
        const matchNumber = parseInt(document.getElementsByName('match')[0].value);
    
        const endpoint = `https://www.thebluealliance.com/api/v3/event/${eventKey}/matches/simple`;
    
        fetch(endpoint, { headers: { "X-TBA-Auth-Key": apiKey } })
        .then(response => response.json())
        .then(matches => {
            const match = matches.find(match => match.match_number === matchNumber && match.comp_level === "qm");
            if (match) {
            const teamNumbers = [match.alliances.blue.team_keys, match.alliances.red.team_keys]
            .flat() .map(teamKey => teamKey.replace(/^frc/, ''));
            const [b1, b2, b3, r1, r2, r3] = teamNumbers;
            console.log(`Teams for match ${matchNumber}:${b1},${b2},${b3},${r1},${r2},${r3}`);
            document.getElementById('b1').textContent = b1;
            document.getElementById('b2').textContent = b2;
            document.getElementById('b3').textContent = b3;
            document.getElementById('r1').textContent = r1;
            document.getElementById('r2').textContent = r2;
            document.getElementById('r3').textContent = r3;
            document.getElementById('team').type = 'hidden';
            document.getElementById('team').value = '';
        } else {
            console.log(`Match ${matchNumber} not found or not a qualification match`);
            document.getElementById('b1').textContent = "Blue\u00A01";
            document.getElementById('b2').textContent = "Blue\u00A02";
            document.getElementById('b3').textContent = "Blue\u00A03";
            document.getElementById('r1').textContent = "Red\u00A01";
            document.getElementById('r2').textContent = "Red\u00A02";
            document.getElementById('r3').textContent = "Red\u00A03";
            document.getElementById('team').type = 'number';
        
            }
        })
        .catch(error => console.error(error));
    }

    // Header Function
    function getHeader() {
        scouterInputs.forEach(input => {
            if (input.checked) {
              var img = document.getElementById("team-image");
              img.src = "";
              const value = input.value;
              const MatchValue = document.getElementById('match').value;
              const TeamValue = document.getElementById('team').value;
              const headerValues = {
                'b1': 'Blue 1',
                'b2': 'Blue 2',
                'b3': 'Blue 3',
                'r1': 'Red 1',
                'r2': 'Red 2',
                'r3': 'Red 3',
              };
              if (TeamValue > 0 && headerValues[value]) {
                document.getElementById('header').textContent = headerValues[value] + ": " + TeamValue;
              }  else if (headerValues[value] && MatchValue !== "") {
                document.getElementById('header').textContent = headerValues[value] + ": " + document.getElementById(value).textContent;
              }  else {
                document.getElementById('header').textContent = headerValues[value] + ":"
              }
              var teamKey = document.getElementById(value).textContent;
              var year = "2023";
              var apiKey = secretKey;
              var url = "https://www.thebluealliance.com/api/v3/team/frc" + teamKey + "/media/" + year + "?X-TBA-Auth-Key=" + apiKey;
              fetch("https://www.thebluealliance.com/api/v3/team/frc" + teamKey + "?X-TBA-Auth-Key=" + apiKey)
                .then(response => response.json())
                .then(data => {
                  const teamNickname = data.nickname;
                  document.getElementById('header').textContent += teamNickname ? " - " + teamNickname : "";
              })
              fetch(url)
                .then(response => response.json())
                .then(data => {
                  var media = data[0].details.base64Image;
                  var img = document.getElementById("team-image");
                  img.src = media ? "data:image/png;base64," + media : "" || "";
              })
              .catch(error => console.error(error));
              }
        });
    }
  })
  .catch(error => {
    console.error('Error fetching secret:', error);
  });



// Button Cycling
function trigger(button) {
  var buttons = document.querySelectorAll('[name="' + button.name + '"]');
  
  for (var i = 0; i < buttons.length; i++) {
    var btn = buttons[i];
    for (var j = 0; j < btn.children.length; j++) {
      btn.children[j].style.display = "none";
    }
    if (btn.id === button.id) {
      var num = btn.value;
      num++;
      btn.value = num % (button.count || 2);
      sessionStorage.setItem(window.location.href+"|"+btn.name+"|"+btn.id, btn.value);
    } else {
      btn.value = 0;
      sessionStorage.setItem(window.location.href+"|"+btn.name+"|"+btn.id, btn.value);
    }
    btn.style.backgroundColor = buttons[i].options[btn.value].color || "";
    btn.children[btn.value].style.display = "block";
  }
}
function counter(button) {
  var btn = button;
    var num = btn.value;
    num++;
    btn.value = num;
    btn.innerHTML = (button.Prefix  || "") + " " + button.value + " " + (button.suffix || "");
    sessionStorage.setItem(window.location.href+"|"+btn.name+"|"+btn.id, btn.value);

}
function counterDown(button) {
  var btn = button;
    var num = btn.value;
    if (num > 0) {
      num--;
    }
    btn.value = num;
    btn.innerHTML = (button.Prefix  || "") + " " + button.value + " " + (button.suffix || "");
    sessionStorage.setItem(window.location.href+"|"+btn.name+"|"+btn.id, btn.value);

}