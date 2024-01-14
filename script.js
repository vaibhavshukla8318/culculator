var display = document.getElementById("display")
var buttons = document.getElementsByClassName("button");

var expression = ""; 

for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    var value = this.getAttribute("data-value");

    if (value == "=") {
      var result = eval(expression); 
      display.innerText = result;
      expression = result.toString(); 
    }else if(value=="CE"){
      display.innerText = display.innerText.slice(0, -1); 
      expression = expression.slice(0, -1);
    }
     else if (value == "AC") {
      display.innerText = "";
      expression = "";
    } else {
      display.innerText += value;
      expression += value;
    }
  };
}






