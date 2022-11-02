// list containg numbes and alphabets only
var list = [20, 30, "d", "s"];

document.getElementById("definedList").innerHTML = "[ " + list + " ]";
var updatedListElm = document.getElementById("updatedList");
function add() {
  var inputValue = document.getElementById("inputValue").value.trim();
  var valueType = checkAlphaOrNumbers(inputValue);

  if (valueType == "alpha") {
    if (checkInput(inputValue)) {
      insert(inputValue);
      displayOutput();
    } else {
      displayError();
    }
  } else if (valueType == "num") {
    if (checkInput(parseInt(inputValue))) {
      insert(inputValue);
      displayOutput();
    } else {
      displayError();
    }
  } else if (!valueType) {
    alert("Enter valid input only alphabet Or number is accepted");
  }
}

function insert(date) {
  list.push(date);
}

function displayError() {
  alert("Value is not Greater than present element in the list");
}

function displayOutput() {
  updatedListElm.innerHTML = "[ " + list + " ]";
}
function checkAlphaOrNumbers(str) {
  var alpha = /^[A-Za-z]{1}$/;
  var num = /^[0-9]+$/;

  if (alpha.test(str)) {
    return "alpha";
  } else if (num.test(str)) {
    return "num";
  }

  return false;
}

function checkInput(data) {
  var filterList = list.filter(function (element) {
    return typeof element == typeof data;
  });

  // [10,20,]

  function bigger(number) {
    return data > number;
  }

  return filterList.every(bigger);
}
