var myNodelist = document.getElementsByTagName("LI");
var i;
var index_task = 0;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}   

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


// Create a new list item when clicking on the "Add" button
function newElement() {
  index_task++;
  var li = document.createElement("li");
  var img = document.createElement("img");
  img.classList.add("output");
  li.appendChild(img);

  var p = document.createElement("p");
  p.classList.add("text");
  li.appendChild(p);
  
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
      index_task--;
    }
  }

}

var loadFile = function(event) {
  var image = document.getElementsByClassName('output')[index_task];
  image.src=URL.createObjectURL(event.target.files[0]);
};

let slideIndex = 0;
showSlides();

function showSlides() {
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


const element = document.getElementById("myUL");
element.scrollIntoView();





// LOVE COUNTER API
const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://love-calculator.p.rapidapi.com/getPercentage?sname=Alice&fname=John",
	"method": "GET",
	"headers": {
		"X-RapidAPI-Key": "66428dd4aamsh7c9acb8d969266bp1a2f6fjsn83f603991e41",
		"X-RapidAPI-Host": "love-calculator.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});

function send(){
  alert("Thanks for your respone!");
}