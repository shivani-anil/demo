let items=[]
function newElement(){
  var inputValue=document.getElementById("myInput").value;
  items.push(inputValue)
  console.log(items)
  return items
}
  let s=""
    for (X of items)
    {
        s+=`<li>${X}</li>`
    }
  document.getElementById("myUL").innerHTML=s
  
