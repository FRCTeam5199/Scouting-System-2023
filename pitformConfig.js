fetch("pitformStructure.json")
  .then(response => response.json())
  .then(formStructure => {
  var formContainer = document.getElementById("autoInfo");
  formStructure.forEach(function(field) {
    formContainer.style.gridTemplateColumns = "repeat(" + field.sectionColumns + ", 1fr)"
    formContainer.style.gridTemplateRows = "repeat(" + field.sectionRows + ", 1fr)"
      if (field.type === "grid") {
        var grid = document.createElement("div");
        grid.className = "grid";
        grid.style.cssText = field.style;
        grid.style.gridRow = field.row || "";
        grid.style.gridColumn = field.column || "1/7";
        grid.style.gridTemplateRows = "repeat(" + field.rows + ", 1fr)";
        grid.style.gridTemplateColumns = "repeat(" + field.columns + ", 1fr)";
        field.elements.forEach(function(element) {
          if (element.type === "button") {
            var button = document.createElement("button");
            if (element.class === "button") {
              button.className = "button button--style";
            } else {
              button.className = "button";
            }
            button.id = element.id || "";
            button.name = element.name || "";
            button.type = "button";
            button.style.cssText = element.style;
            if (element.options) {
              button.options = element.options;
              button.options.forEach(function(option) {
                if (option.text) {
                  var optionElem = document.createElement("strong");
                  optionElem.innerText = option.text || "";
                  button.appendChild(optionElem);
                } else if (option.icon) {
                  var optionElem = document.createElement("img");
                  optionElem.src = option.icon;
                  button.style.padding = ".125em 5px"
                  button.appendChild(optionElem)
                }
              });
              button.style.backgroundColor = button.options[0].color || "";
              button.children[0].style.display = "block";
              button.count = element.options.length
              button.addEventListener("click", function() {
                trigger(button);
              })
            } else {
              button.addEventListener("click", function() {
                counter(button);
              })
              button.addEventListener("contextmenu", function() {
                event.preventDefault();
                counterDown(button);
              })
              button.style.backgroundColor = element.color;
              button.value = 0;
              button.Prefix = element.prefix;
              button.suffix = element.suffix;
              button.innerHTML = (button.Prefix  || "") + " " + button.value + " " + (button.suffix || "");
            }
            grid.appendChild(button);
            /*if (element.class === "radio" || element.class === "checkbox") {
              var label = document.createElement("label");
              label.className = "button";
              var input = document.createElement("input");
              input.value = element.value || "";
              input.name = element.name || "";
              input.type = element.class || "";
              label.appendChild(input);
              if (element.img) {
                var img = document.createElement("img");
                img.src = element.img;
                img.style.width = "2em"+
                img.id = element.id || "";
                img.className = "piece";
                img.style.backgroundColor = "#808080";
                img.style.zIndex = 2;
                label.style.padding ="0px 5px";
                label.appendChild(img)
              } else {
                var span = document.createElement("span");
                span.className = "piece";
                span.style.backgroundColor = element.color || "#16478e";
                label.appendChild(span);
              }
              if (element.icon) {
                var icon = document.createElement("img");
                icon.src = element.icon;
                icon.style.width = "2em"
                icon.id = element.id || "";
                label.style.padding ="0px 5px";
                label.appendChild(icon)
              } else if (element.text) {
                var strong = document.createElement("strong");
                strong.id = element.id || "";
                strong.innerText = element.text || "";
                label.appendChild(strong);
              }
              grid.appendChild(label);
            } else if (element.class === "count" || element.class === "cycle"){
              var button = document.createElement("Button");
              button.className = "button";
              button.type = "button";
              button.value = "0";
              button.innerHTML = element.option[0];
              button.count = element.option.length
              button.id = element.id
              button.option = element.option;
              if (element.class === "cycle") {
                button.addEventListener("click", function() {
                  increment(button.option, button.id, button.count);
                })
              } else if (element.class === "count") {
                button.addEventListener("click", function() {
                  incrementNormal(button.id);
                });
              }
              grid.appendChild(button);
            } */
          } else if (element.type === "text") {
            var div = document.createElement("div");
            div.style.height = "min-content";
            div.style.margin = "auto";
            div.style.gridRow = element.row || "";
            div.style.gridColumn = element.column || "";
            if (element.head) {
              var head = document.createElement("h1");
              head.innerText = element.head;
              head.className = "text";
              head.style.color = element.color;
              div.appendChild(head);
            } if (element.text) {
              var text = document.createElement("p");
              text.innerText = element.text;
              text.className = "text";
              text.style.color = element.color;
              div.appendChild(text);
            }
            grid.appendChild(div);
          } else if (element.type === "input") {
            var input = document.createElement("input");
            input.type = element.class || "text";
            input.className = "input";
            input.name = element.name || "";
            input.placeholder = element.placeholder || "";
            input.autocomplete = element.autocomplete || "";
            input.pattern = element.pattern || "";
            input.min = element.min || "";
            input.max = element.max || "";
            input.style.gridRow = element.row || "";
            input.style.gridColumn = element.column || "";
            if (element.class === "file") {
              input.type = "file";
              input.multiple = true;
              input.accept = "image/*";
            }
            grid.appendChild(input)
          } else if (element.type === "img") {
            var div = document.createElement("div");
            div.style.width = "100%";
            div.style.height = "100%";
            div.style.display = "grid"
            var img = document.createElement("img");
            img.src = element.src;
            img.className = "img";
            img.id = element.id || "";
            img.name = element.name || "";
            img.style.gridArea = "1 / 1";
            div.appendChild(img);
            if (element.buttons) {
              img.buttons = element.buttons;
              img.buttons.forEach(function(buttonElem) {
                var button = document.createElement("button");
                if (buttonElem.class === "button") {
                  button.className = "button button--style";
                } else {
                  button.className = "button";
                }
                button.id = buttonElem.id || "";
                button.name = buttonElem.name || "";
                button.type = "button";
                button.style.margin = "auto";
                button.style.gridArea = "1 / 1";
                button.style.height = buttonElem.height || "25%";
                button.style.width = buttonElem.width || "16.5%";
                button.style.top = buttonElem.top;
                button.style.left = buttonElem.left;
                button.style.padding = "0";
                button.style.minHeight = "0";
                if (buttonElem.options) {
                  button.options = buttonElem.options;
                  button.options.forEach(function(option) {
                    if (option.text) {
                      var optionElem = document.createElement("strong");
                      optionElem.innerText = option.text || "";
                      button.appendChild(optionElem);
                    } else if (option.icon) {
                      var optionElem = document.createElement("img");
                      optionElem.src = option.icon;
                      optionElem.style.maxHeight = "100%";
                      optionElem.style.height = "100%";
                      button.appendChild(optionElem)
                    }
                  });
                  button.style.backgroundColor = button.options[0].color || "";
                  button.children[0].style.display = "block";
                  button.count = buttonElem.options.length
                  button.addEventListener("click", function() {
                    trigger(button);
                  })
                } else {
                  button.addEventListener("click", function() {
                    counter(button);
                  })
                  button.addEventListener("contextmenu", function() {
                    event.preventDefault();
                    counterDown(button);
                  })
                  button.style.backgroundColor = buttonElem.color;
                  button.value = 0;
                  button.Prefix = buttonElem.prefix;
                  button.suffix = buttonElem.suffix;
                  button.innerHTML = (button.Prefix  || "") + " " + button.value + " " + (button.suffix || "");
                }
                
                div.appendChild(button)
              });
            }
            grid.appendChild(div);
          } 
        });
        formContainer.appendChild(grid);
      }
  });
});