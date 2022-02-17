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

console.log("loaded");
function test(e) {
  $.get("https://excuser.herokuapp.com/v1/excuse" + "/" + e, (data) => {
    
    if (familyState && family <= 10) {
        console.log(familyState, family);
      if (familyArr.indexOf(data[0].excuse) === -1) {
        familyArr.push(data[0].excuse);
        var firstExcuse = document.createElement("li");
        firstExcuse.innerText = data[0].excuse + "...";
        var bigBoi = document.getElementById("listItem");
        bigBoi.appendChild(firstExcuse);
        family++;
      } else if (
        familyArr.indexOf(data[0].excuse) !== -1 &&
        familyArr.length < 9
      ) {
        console.log("already found");
        test("family");
      } else {
        var firstExcuse = document.createElement("li");
        firstExcuse.innerText = "No more suggestions in this catagory." + "...";
        var bigBoi = document.getElementById("listItem");
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
        var bigBoi = document.getElementById("listItem");
        bigBoi.appendChild(firstExcuse);
        party++;
      } else if (
        partyArr.indexOf(data[0].excuse) !== -1 &&
        partyArr.length < 9
      ) {
        console.log("already found");
        test("party");
      } else {
        var firstExcuse = document.createElement("li");
        firstExcuse.innerText = "No more suggestions in this catagory." + "...";
        var bigBoi = document.getElementById("listItem");
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
        var bigBoi = document.getElementById("listItem");
        bigBoi.appendChild(firstExcuse);
        office++;
      } else if (
        officeArr.indexOf(data[0].excuse) !== -1 &&
        officeArr.length < 9
      ) {
        console.log("already found");
        test("office");
      } else {
        var firstExcuse = document.createElement("li");
        firstExcuse.innerText = "No more suggestions in this catagory." + "...";
        var bigBoi = document.getElementById("listItem");
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
        var bigBoi = document.getElementById("listItem");
        bigBoi.appendChild(firstExcuse);
        children++;
      } else if (
        childrenArr.indexOf(data[0].excuse) !== -1 &&
        childrenArr.length < 9
      ) {
        console.log("already found");
        test("children");
      } else {
        var firstExcuse = document.createElement("li");
        firstExcuse.innerText = "No more suggestions in this catagory." + "...";
        var bigBoi = document.getElementById("listItem");
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
        var bigBoi = document.getElementById("listItem");
        bigBoi.appendChild(firstExcuse);
        college++;
      } else if (
        collegeArr.indexOf(data[0].excuse) !== -1 &&
        collegeArr.length < 9
      ) {
        console.log("already found");
        test("college");
      } else {
        var firstExcuse = document.createElement("li");
        firstExcuse.innerText = "No more suggestions in this catagory." + "...";
        var bigBoi = document.getElementById("listItem");
        bigBoi.appendChild(firstExcuse);
        console.log("No more suggestions in this catagory.");
        console.log(collegeArr);
      }

      }
    });
  }


var ready = document.getElementById("ready");
ready.addEventListener("click", catagoryInput);

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
  test(lowerCase);
}

setTimeout(function () {
  var secondExcuse = document.createElement("div");
  secondExcuse.innerHTML = "test";
  document.getElementById("internalDiv").appendChild(secondExcuse);
}, 4000);

