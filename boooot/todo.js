let items=[]
     function newElement() {
   var inputValue = document.getElementById("myInput").value;
   items.push(inputValue)
   console.log(items)
   let s=""
 for(x of items)
 {
     s+=`<li>${x}</li>`
 }
 document.getElementById("myUL").innerHTML=s
     

     // Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
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
}}
