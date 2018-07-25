
 	let dragged;
  let rook = ["12","13","22"];
  let moves = [];
  let turn="white";
  let enemy = "black";
  let candrop = false;

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}



  function createmove(figure){
    let clas = figure.className;
    if (clas.indexOf("rook")>-1){
      rookmoves(figure.parentNode.id);
    }
/*      for (let i in rook){

         let field = document.getElementById(rook[i]);

         if(isEmpty(field.children)){

           moves.push(rook[i])

         }else{

          if(field.children[0].className.indexOf(turn) < 0){
            moves.push(rook[i])

          }
        }
      }*/
  }

  function checkmove(field){
      let id = field.id;
      for (let i in moves){
        if(id==moves[i]){
            return true;
        }
      }
     return false;
  }

  function rookmoves (field){
    let i = field.charAt(0);
    let j = field.charAt(1);

    let count =i;
      while ( count < 8 ){
        let id= (1+Number(count)) + j;
        let field = document.getElementById(id);

         if(isEmpty(field.children)){}
         else{
          if(field.children[0].className.indexOf(turn) > -1){
           break;
          }else{
             moves.push(id);
             break;
          }
        }
        moves.push(id);
        count ++;
      }

      count =i;
      while ( count > 1 ){
        let id= (Number(count) -1) + j;
        let field = document.getElementById(id);

         if(isEmpty(field.children)){}
         else{
          if(field.children[0].className.indexOf(turn) > -1){
           break;
          }else{
             moves.push(id);
             break;
          }
        }
        moves.push(id);
        count --;
      }

      count =j;
      while ( count > 1 ){
        let id= i + (Number(count) - 1);
        let field = document.getElementById(id);

         if(isEmpty(field.children)){}
         else{
          if(field.children[0].className.indexOf(turn) > -1){
           break;
          }else{
             moves.push(id);
             break;
          }
        }
        moves.push(id);
        count --;
      }

      count =j;
      while ( count < 8 ){
        let id= i + (1+Number(count));
        let field = document.getElementById(id);

         if(isEmpty(field.children)){

         }
         else{
          if(field.children[0].className.indexOf(turn) > -1){
           break;
          }else{
             moves.push(id);
             break;
          }
        }
        moves.push(id);
        count ++;
      }
      console.log(moves);
  }

 	document.addEventListener("dragstart",function(event) {
    createmove(event.target);
 		event.dataTransfer.setData('text/plain',null);
 		dragged = event.target;

 	})

 	document.addEventListener("dragend", function(event) {

    moves=[];
 	})

 	document.addEventListener("drag",function(event) {
 	})

 	document.addEventListener("dragenter",function(event) {
 		if(event.target.className=="item1" || event.target.className=="item2"){

      candrop=checkmove(event.target);
 		}else if(event.target.className.indexOf(enemy) >-1){
      candrop=checkmove(event.target.parentNode);
    }else{
      candrop=false;
    }
 	})

 	document.addEventListener("dragleave", function(event){

 	})

 	document.addEventListener("dragover", function( event ) {

      event.preventDefault();
	});

 	 document.addEventListener("drop", function( event ) {
      event.preventDefault();
      if ( candrop ) {
        if(!isEmpty(event.target.children)){

          let remove = event.target.children[0];
          event.target.removeChild( remove );
          dragged.parentNode.removeChild( dragged );
          event.target.appendChild( dragged );
        }else if(event.target.className.indexOf(enemy) >-1){
          dragged.parentNode.removeChild( dragged );
          event.target.parentNode.appendChild( dragged );
          event.target.parentNode.removeChild( event.target );

       }else{
              dragged.parentNode.removeChild( dragged );
              event.target.appendChild( dragged );
       }
      candrop=false;
    }
  });
