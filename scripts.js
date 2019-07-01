let dragged;

document.addEventListener("dragstart",function(event)
{
  event.dataTransfer.setData('text/plain',null); //not for chrome
  dragged = event.target;
  event.target.style.opacity=0.5;
  event.target.style.border="none";
});

document.addEventListener("dragend", function(event) 
{
  event.target.style.opacity=1;
  // event.target.style.border="1px solid black";
});

// document.addEventListener("drag",function(event) {
// 	event.target.innerHTML = Math.floor( 100 * Math.random());
// })

document.addEventListener("dragenter",function(event) {
  if(event.target.className=="item2" || event.target.className=="item1"){   
    // event.target.style.backgroundColor="rgba(255,255,255, 0.5)";
    // dragged.style.border ="5px solid black";
  }
});

// document.addEventListener("dragleave", function(event){
//   if(event.target.className=="target"){
//     event.target.style.backgroundColor="none";
//     dragged.style.border ="none";
//   }
// });

document.addEventListener("dragover", function(event) {
  event.preventDefault();
});

document.addEventListener("drop", function( event ) 
{
  event.preventDefault();

  if (event.target.className=="item2" || event.target.className=="item1") {
      event.target.style.background = "";
      dragged.parentNode.removeChild(dragged);
      event.target.appendChild(dragged);
      event.target.backgroundColor = "blue";
  }
});
