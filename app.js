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
// var flake = document.createElement('button')
//         flake.setAttribute('Id', ready)
function familySelect(){
    familyState = true;
    officeState = false;
    childrenState = false;
    collegeState = false;
    partyState = false;
    test('family');
}
function officeSelect(){
    familyState = false;
    officeState = true;
    childrenState = false;
    collegeState = false;
    partyState = false;
    test('office');
}

function collegeSelect(){
    familyState = false;
    officeState = false;
    childrenState = false;
    collegeState = true;
    partyState = false;
    test('college');
}
function partySelect(){
    familyState = false;
    officeState = false;
    childrenState = false;
    collegeState = false;
    partyState = true;
    test('party');
}
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

// var ready = document.getElementById("ready");
// ready.addEventListener("click", catagoryInput);

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
      removeFadeOut(document.getElementById('titleText'), 1000);

      secondTitleText.innerHTML = "Or just lazy?";
      secondTitleText.setAttribute("Id", "titleTextTwo");

      document.getElementById("internalDiv").appendChild(secondTitleText);
      var thirdTitleText = document.createElement("div");
      setTimeout(function () {
        // document.getElementById('titleText').innerHTML = "Or just Lazy?"
        // fadeIn(document.getElementById('titleText'), 6000);
        removeFadeOut(document.getElementById('titleTextTwo'), 3000);
    //     removeFadeOut(document.getElementById('titleTextTwo'), 3000);
        
      
      var thirdTitleText = document.createElement("div");
      thirdTitleText.innerHTML = "Either way...";
      thirdTitleText.setAttribute("Id", "titleTextThree");

      document.getElementById("internalDiv").appendChild(thirdTitleText);
      document.getElementById("head").style.backgroundImage = "linear-gradient(rgba(255, 0, 0, 0.6),rgba(255, 0, 0, 0.6))," + " url(dieGuy.jpg)";
      
      var background = document.getElementById("head");

    background.classList.toggle("transformed-state");
    setTimeout(function(){
        removeFadeOut(document.getElementById('titleTextThree'), 2000);


        var thirdTitleText = document.createElement("div");
      thirdTitleText.innerHTML = "YOU NEED AN EXCUSE!";
      thirdTitleText.setAttribute("Id", "titleTextThree");


      setTimeout(function(){

        // firstTitleText.parentNode.removeChild(firstTitleText);
        // secondTitleText.parentNode.removeChild(secondTitleText);
        // thirdTitleText.parentNode.removeChild(thirdTitleText);
        document.getElementById("internalDiv").appendChild(thirdTitleText);
        var flake = document.createElement('button');
        flake.setAttribute('Id', 'ready');
        flake.innerHTML = "FLAKE!"
        flake.addEventListener("click", catagoryInput);
        document.getElementById("head").prepend(flake);

        
        var flake = document.createElement('button');
        flake.setAttribute('Id', 'familyButton');
        flake.innerHTML = "Family";
        flake.addEventListener("click", familySelect);
        document.getElementById("head").prepend(flake);
        


        
        var flake = document.createElement('button');
        flake.setAttribute('Id', 'officeButton');
        flake.innerHTML = "Office";
        flake.addEventListener("click", catagoryInput);
        document.getElementById("head").prepend(flake);
        
        
        
        
        
        fadeIn(flake, 2000);

      },2000)

    //   document.getElementById("internalDiv").appendChild(thirdTitleText);
        

    },6000);

    //   thirdTitleText.style.transition = "opacity 3s ease";
    //   setTimeout(function(){
        
    //     thirdTitleText.style.opacity = 0;
         
    //   },3000);
      }, 5000);
    }, 3000);
  }, 6000);
}, 4000);

//   setTimeout(function(){
//       firstTitleText.parentNode.removeChild(firstTitleText);
//       var secondTitleText = document.getElementById("titleTextTwo");
//   secondTitleText.style.transition = "opacity 3s ease";
//   secondTitleText.style.opacity = 0;

//   var thirdTitleText = document.createElement("div");
// thirdTitleText.setAttribute("Id", "titleTextThree");
// thirdTitleText.innerHTML = 'Either way...'
// document.getElementById("internalDiv").appendChild(thirdTitleText);

// var secondTitleText = document.getElementById("titleTextTwo");
//         secondTitleText.style.transition = "opacity 3s ease";
//         secondTitleText.style.opacity = 0;

//         var thirdTitleText = document.createElement("div");
//         thirdTitleText.setAttribute("Id", "titleTextThree");
//         thirdTitleText.innerHTML = "Either way...";
//         document.getElementById("internalDiv").appendChild(thirdTitleText);

function removeFadeOut( el, speed ) {
    var seconds = speed/1000;
    el.style.transition = "opacity "+seconds+"s ease";

    el.style.opacity = 0;
    // setTimeout(function() {
    //     el.parentNode.removeChild(el);
    // }, speed);
}
function fadeIn( el, speed ) {
    var seconds = speed/1000;
    el.style.transition = "opacity "+seconds+"s ease";

    el.style.opacity = 1;
    // setTimeout(function() {
    //     el.parentNode.removeChild(el);
    // }, speed);
}

// removeFadeOut(document.getElementById('test'), 2000);