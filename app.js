var family = 0;
var office = 0;
var children = 0;
var college = 0;
var party = 0;

var familyState = false;
var officeState = false;
var childrenState = false;
var collegeState = false;
var partyState = false;

var familyArr = [];
var officeArr = [];
var childrenArr = [];
var collegeArr = [];
var partyArr = [];

function familySelect() {
  familyState = true;
  officeState = false;
  childrenState = false;
  collegeState = false;
  partyState = false;
  pullAndPrint("family");
}
function officeSelect() {
  familyState = false;
  officeState = true;
  childrenState = false;
  collegeState = false;
  partyState = false;
  pullAndPrint("office");
}

function collegeSelect() {
  familyState = false;
  officeState = false;
  childrenState = false;
  collegeState = true;
  partyState = false;
  pullAndPrint("college");
}
function partySelect() {
  familyState = false;
  officeState = false;
  childrenState = false;
  collegeState = false;
  partyState = true;
  pullAndPrint("party");
}
console.log("loaded");
function pullAndPrint(e) {
  $.get("https://excuser.herokuapp.com/v1/excuse" + "/" + e, (data) => {
    if (familyState && family <= 10) {
      console.log(familyState, family);
      if (familyArr.indexOf(data[0].excuse) === -1) {
        familyArr.push(data[0].excuse);
        var firstExcuse = document.createElement("li");
        firstExcuse.innerText = data[0].excuse + "...";
        var bigBoi = document.getElementById("list");
        bigBoi.appendChild(firstExcuse);
        family++;
      } else if (
        familyArr.indexOf(data[0].excuse) !== -1 &&
        familyArr.length < 9
      ) {
        console.log("already found");
        pullAndPrint("family");
      } else {
        var firstExcuse = document.createElement("li");
        firstExcuse.innerText = "No more suggestions in this catagory." + "...";
        var bigBoi = document.getElementById("list");
        bigBoi.appendChild(firstExcuse);
        console.log("No more suggestions in this catagory.");
        console.log(familyArr);
      }
    }
    if (partyState && party <= 10) {
      console.log(partyState, party);
      if (partyArr.indexOf(data[0].excuse) === -1) {
        partyArr.push(data[0].excuse);
        var firstExcuse = document.createElement("li");
        firstExcuse.innerText = data[0].excuse + "...";
        var bigBoi = document.getElementById("list");
        bigBoi.appendChild(firstExcuse);
        party++;
      } else if (
        partyArr.indexOf(data[0].excuse) !== -1 &&
        partyArr.length < 9
      ) {
        console.log("already found");
        pullAndPrint("party");
      } else {
        var firstExcuse = document.createElement("li");
        firstExcuse.innerText = "No more suggestions in this catagory." + "...";
        var bigBoi = document.getElementById("list");
        bigBoi.appendChild(firstExcuse);
        console.log("No more suggestions in this catagory.");
        console.log(partyArr);
      }
    }
    if (officeState && office <= 10) {
      console.log(officeState, office);
      if (officeArr.indexOf(data[0].excuse) === -1) {
        officeArr.push(data[0].excuse);
        var firstExcuse = document.createElement("li");
        firstExcuse.innerText = data[0].excuse + "...";
        var bigBoi = document.getElementById("list");
        bigBoi.appendChild(firstExcuse);
        office++;
      } else if (
        officeArr.indexOf(data[0].excuse) !== -1 &&
        officeArr.length < 9
      ) {
        console.log("already found");
        pullAndPrint("office");
      } else {
        var firstExcuse = document.createElement("li");
        firstExcuse.innerText = "No more suggestions in this catagory." + "...";
        var bigBoi = document.getElementById("list");
        bigBoi.appendChild(firstExcuse);
        console.log("No more suggestions in this catagory.");
        console.log(officeArr);
      }
    }
    if (childrenState && children <= 10) {
      console.log(childrenState, children);
      if (childrenArr.indexOf(data[0].excuse) === -1) {
        childrenArr.push(data[0].excuse);
        var firstExcuse = document.createElement("li");
        firstExcuse.innerText = data[0].excuse + "...";
        var bigBoi = document.getElementById("list");
        bigBoi.appendChild(firstExcuse);
        children++;
      } else if (
        childrenArr.indexOf(data[0].excuse) !== -1 &&
        childrenArr.length < 9
      ) {
        console.log("already found");
        pullAndPrint("children");
      } else {
        var firstExcuse = document.createElement("li");
        firstExcuse.innerText = "No more suggestions in this catagory." + "...";
        var bigBoi = document.getElementById("list");
        bigBoi.appendChild(firstExcuse);
        console.log("No more suggestions in this catagory.");
        console.log(childrenArr);
      }
    }
    if (collegeState && college <= 10) {
      console.log(collegeState, college);
      if (collegeArr.indexOf(data[0].excuse) === -1) {
        collegeArr.push(data[0].excuse);
        var firstExcuse = document.createElement("li");
        firstExcuse.innerText = data[0].excuse + "...";
        var bigBoi = document.getElementById("list");
        bigBoi.appendChild(firstExcuse);
        college++;
      } else if (
        collegeArr.indexOf(data[0].excuse) !== -1 &&
        collegeArr.length < 9
      ) {
        console.log("already found");
        pullAndPrint("college");
      } else {
        var firstExcuse = document.createElement("li");
        firstExcuse.innerText = "No more suggestions in this catagory." + "...";
        var bigBoi = document.getElementById("list");
        bigBoi.appendChild(firstExcuse);
        console.log("No more suggestions in this catagory.");
        console.log(collegeArr);
      }
    }
  });
}
function resetButton() {
  document.getElementsByTagName("UL")[0].innerHTML = "";
  family = 0;
  office = 0;
  children = 0;
  college = 0;
  party = 0;
  familyState = false;
  officeState = false;
  childrenState = false;
  collegeState = false;
  partyState = false;
  familyArr = [];
  officeArr = [];
  childrenArr = [];
  collegeArr = [];
  partyArr = [];
  console.log("Fields Cleared");
}
function catagoryInput() {
  var output = document.getElementById("inputField").value;
  var lowerCase = output.toLowerCase();
  console.log(lowerCase);

  if (lowerCase === "family") {
    familyState = true;
    officeState = false;
    childrenState = false;
    collegeState = false;
    partyState = false;
  } else if (lowerCase === "office") {
    familyState = false;
    officeState = true;
    childrenState = false;
    collegeState = false;
    partyState = false;
  } else if (lowerCase === "children") {
    familyState = false;
    officeState = false;
    childrenState = true;
    collegeState = false;
    partyState = false;
  } else if (lowerCase === "college") {
    familyState = false;
    officeState = false;
    childrenState = false;
    collegeState = true;
    partyState = false;
  } else if (lowerCase === "party") {
    familyState = false;
    officeState = false;
    childrenState = false;
    collegeState = false;
    partyState = true;
  }
  pullAndPrint(lowerCase);
}

setTimeout(function () {
  var firstTitleText = document.createElement("div");
  firstTitleText.innerHTML = "Running late?...";
  firstTitleText.setAttribute("Id", "titleText");
  document.getElementById("internalDiv").appendChild(firstTitleText);
  setTimeout(function () {
    var background = document.getElementById("head");

    background.classList.toggle("transformed-state");
    var secondTitleText = document.createElement("div");

    setTimeout(function () {
      var firstTitleText = document.getElementById("titleText");
      fadeOut(document.getElementById("titleText"), 1000);

      secondTitleText.innerHTML = "Or just lazy?";
      secondTitleText.setAttribute("Id", "titleTextTwo");

      document.getElementById("internalDiv").appendChild(secondTitleText);
      var thirdTitleText = document.createElement("div");
      setTimeout(function () {
        fadeOut(document.getElementById("titleTextTwo"), 3000);
        var thirdTitleText = document.createElement("div");
        thirdTitleText.innerHTML = "Either way...";
        thirdTitleText.setAttribute("Id", "titleTextThree");
        document.getElementById("internalDiv").appendChild(thirdTitleText);
        document.getElementById("head").style.backgroundImage =
          "linear-gradient(rgba(255, 0, 0, 0.6),rgba(255, 0, 0, 0.6))," +
          " url(dieGuy.jpg)";

        var background = document.getElementById("head");

        background.classList.toggle("transformed-state");
        setTimeout(function () {
          fadeOut(document.getElementById("titleTextThree"), 2000);
          var thirdTitleText = document.createElement("div");
          thirdTitleText.innerHTML = "YOU NEED AN EXCUSE!";
          thirdTitleText.setAttribute("Id", "titleTextThree");
          setTimeout(function () {
            document.getElementById("internalDiv").appendChild(thirdTitleText);
            var flake = document.createElement("button");
            flake.setAttribute("Id", "collegeButton");
            flake.innerHTML = "COLLEGE";
            flake.addEventListener("click", collegeSelect);
            document.getElementById("head").prepend(flake);

            var flake = document.createElement("button");
            flake.setAttribute("Id", "familyButton");
            flake.innerHTML = "FAMILY";
            flake.addEventListener("click", familySelect);
            document.getElementById("head").prepend(flake);

            var flake = document.createElement("button");
            flake.setAttribute("Id", "officeButton");
            flake.innerHTML = "OFFICE";
            flake.addEventListener("click", officeSelect);
            document.getElementById("head").prepend(flake);

            var flake = document.createElement("button");
            flake.setAttribute("Id", "partyButton");
            flake.innerHTML = "PARTY";
            flake.addEventListener("click", partySelect);
            document.getElementById("head").prepend(flake);

            var flake = document.createElement("button");
            flake.setAttribute("Id", "resetButton");
            flake.innerHTML = "RESET";
            flake.addEventListener("click", resetButton);
            document.getElementById("head").prepend(flake);

            fadeIn(flake, 2000);
          }, 2000);
        }, 6000);
      }, 5000);
    }, 3000);
  }, 6000);
}, 4000);

function fadeOut(variable, mils) {
  var time = mils / 1000;
  variable.style.transition = "opacity " + time + "s ease";
  variable.style.opacity = 0;
}
function fadeIn(el, speed) {
  var time = mils / 1000;
  variable.style.transition = "opacity " + time + "s ease";
  variable.style.opacity = 1;
}
