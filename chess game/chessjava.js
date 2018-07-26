
 	let dragged;
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
    if(clas.indexOf("pawn")>-1){
      pawnmoves(figure.parentNode.id);
    }
    if(clas.indexOf("knight")>-1){
      knightmoves(figure.parentNode.id);
    }
    if(clas.indexOf("bishop")>-1){
      bishopmoves(figure.parentNode.id);
    }
    if(clas.indexOf("queen")>-1){
      queenmoves(figure.parentNode.id);
    }
    if(clas.indexOf("king")>-1){
      kingmoves(figure.parentNode.id);
    }
  
       console.log(moves);
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

  function rookmoves (fiel){
    let i = fiel.charAt(0);
    let j = fiel.charAt(1);

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

  }

  function pawnmoves(fiel){
    let i = fiel.charAt(0);
    let j = fiel.charAt(1);
    if( turn == "white"){
      if (i < 8){
        let id = (1+Number(i)) + j;
        let field = document.getElementById(id);

        if(isEmpty(field.children)){
          moves.push(id);
        }
        if (j < 8){
          id = (1+Number(i)) + "" + (1+Number(j));
          field = document.getElementById(id);

          if(!isEmpty(field.children)){
            if(field.children[0].className.indexOf(enemy) > -1){
              moves.push(id);
            }
          }
        }
        if (j > 1){
          id = (1+Number(i)) + "" + (Number(j)-1);
          field = document.getElementById(id);

          if(!isEmpty(field.children)){
            if(field.children[0].className.indexOf(enemy) > -1){
              moves.push(id);
            }
          }
        }
        if ( i == 2){

          let id = (2+Number(i)) + j;
          let field = document.getElementById(id);

          if(isEmpty(field.children)){
            moves.push(id);
          }
        }
      }      
    }
    if( turn == "black"){
      if (i >1){
        let id = (Number(i)-1) + j;
        let field = document.getElementById(id);

        if(isEmpty(field.children)){
          moves.push(id);
        }
        if (j < 8){
          id = (Number(i)-1) + "" + (1+Number(j));
          field = document.getElementById(id);

          if(!isEmpty(field.children)){
            if(field.children[0].className.indexOf(enemy) > -1){
              moves.push(id);
            }
          }
        }
        if (j > 1){
          id = (Number(i)-1) + "" + (Number(j)-1);
          field = document.getElementById(id);

          if(!isEmpty(field.children)){
            if(field.children[0].className.indexOf(enemy) > -1){
              moves.push(id);
            }
          }
        }

        if ( i == 6){

          let id = (Number(i)-2) + j;
          let field = document.getElementById(id);

          if(isEmpty(field.children)){
            moves.push(id);
          }
        }
      }      
    }
  }

  function knightmoves(fiel){
    let i = fiel.charAt(0);
    let j = fiel.charAt(1);
      if (i < 7){
        if (j < 8){
          let id = (Number(i)+2) + "" +(Number(j)+1);
          let field = document.getElementById(id);

          if(isEmpty(field.children)){
            moves.push(id);
          }else if (field.children[0].className.indexOf(enemy) > -1){
            moves.push(id);
          }
        }
        if (j > 1){
          let id = (Number(i)+2) + "" +(Number(j)-1);
          let field = document.getElementById(id);

          if(isEmpty(field.children)){
            moves.push(id);
          }else if (field.children[0].className.indexOf(enemy) > -1){
            moves.push(id);
          }
        }
      }
      if (i < 8){
        if (j < 7){
          let id = (Number(i)+1) + "" +(Number(j)+2);
          let field = document.getElementById(id);

          if(isEmpty(field.children)){
            moves.push(id);
          }else if (field.children[0].className.indexOf(enemy) > -1){
            moves.push(id);
          }
        }
        if (j > 2){
          let id = (Number(i)+1) + "" +(Number(j)-2);
          let field = document.getElementById(id);

          if(isEmpty(field.children)){
            moves.push(id);
          }else if (field.children[0].className.indexOf(enemy) > -1){
            moves.push(id);
          }
        }
      }
      if (i >1){
        if (j < 7){
          let id = (Number(i)-1) + "" +(Number(j)+2);
          let field = document.getElementById(id);

          if(isEmpty(field.children)){
            moves.push(id);
          }else if (field.children[0].className.indexOf(enemy) > -1){
            moves.push(id);
          }
        }
        if (j > 2){
          let id = (Number(i)-1) + "" +(Number(j)-2);
          let field = document.getElementById(id);

          if(isEmpty(field.children)){
            moves.push(id);
          }else if (field.children[0].className.indexOf(enemy) > -1){
            moves.push(id);
          }
        }
      }
      if (i > 2){
        if (j < 8){
          let id = (Number(i)-2) + "" +(Number(j)+1);
          let field = document.getElementById(id);

          if(isEmpty(field.children)){
            moves.push(id);
          }else if (field.children[0].className.indexOf(enemy) > -1){
            moves.push(id);
          }
        }
        if (j > 1){
          let id = (Number(i)-2) + "" +(Number(j)-1);
          let field = document.getElementById(id);

          if(isEmpty(field.children)){
            moves.push(id);
          }else if (field.children[0].className.indexOf(enemy) > -1){
            moves.push(id);
          }
        }
      }
  }

  function bishopmoves (fiel){
    let i = fiel.charAt(0);
    let j = fiel.charAt(1);
    let count = 1;

    while (Number(i)+ count < 9 && Number(j) + count < 9){

      id = (Number(i)+count)+""+(Number(j) + count);
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
      count++
    }

    count = 1;
    while (Number(i)+ count < 9 && Number(j) - count > 0 ){
      
      id = (Number(i)+count)+""+(Number(j) - count);
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
      count++
    }
    count = 1;
    while (Number(i)- count > 0 && Number(j) + count < 9){

      id = (Number(i)-count)+""+(Number(j) + count);
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
      count++
    }
    count = 1;
    while (Number(i)- count > 0 && Number(j) - count >0){

      id = (Number(i)-count)+""+(Number(j) - count);
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
      count++
    }
  }

  function queenmoves(field){
    rookmoves(field);
    bishopmoves(field);
  }

  function kingmoves(fiel){
    let i = fiel.charAt(0);
    let j = fiel.charAt(1);

      if (j < 8){
        id = (Number(i)) + "" +(Number(j)+1);
        let field = document.getElementById(id);

        if(isEmpty(field.children)){
          moves.push(id);
        }else if (field.children[0].className.indexOf(enemy) > -1){
          moves.push(id);
        }
      }
      if (j > 1){
        id = (Number(i)) + "" +(Number(j)-1);
        let field = document.getElementById(id);

        if(isEmpty(field.children)){
          moves.push(id);
        }else if (field.children[0].className.indexOf(enemy) > -1){
          moves.push(id);
        }
      }


    if (i < 8 ){
      let id = (Number(i)+1) + "" +(Number(j));
      let field = document.getElementById(id);

      if(isEmpty(field.children)){
        moves.push(id);
      }else if (field.children[0].className.indexOf(enemy) > -1){
        moves.push(id);
      }


      if (j < 8){
        id = (Number(i)+1) + "" +(Number(j)+1);
        let field = document.getElementById(id);

        if(isEmpty(field.children)){
          moves.push(id);
        }else if (field.children[0].className.indexOf(enemy) > -1){
          moves.push(id);
        }
      }
      if (j > 1){
        id = (Number(i)+1) + "" +(Number(j)-1);
        let field = document.getElementById(id);

        if(isEmpty(field.children)){
          moves.push(id);
        }else if (field.children[0].className.indexOf(enemy) > -1){
          moves.push(id);
        }
      }
    }    
    if (i > 1){
      let id = (Number(i)-1) + "" +(Number(j));
      let field = document.getElementById(id);

      if(isEmpty(field.children)){
        moves.push(id);
      }else if (field.children[0].className.indexOf(enemy) > -1){
        moves.push(id);
      }


      if (j < 8){
        id = (Number(i)-1) + "" +(Number(j)+1);
        let field = document.getElementById(id);

        if(isEmpty(field.children)){
          moves.push(id);
        }else if (field.children[0].className.indexOf(enemy) > -1){
          moves.push(id);
        }
      }
      if (j > 1){
        id = (Number(i)-1) + "" +(Number(j)-1);
        let field = document.getElementById(id);

        if(isEmpty(field.children)){
          moves.push(id);
        }else if (field.children[0].className.indexOf(enemy) > -1){
          moves.push(id);
        }
      }
    }
  }

  function showmoves(){
    for (let i = 0; i < moves.length; i++){
      document.getElementById(moves[i]).style.backgroundColor = "orange";
    }
  }
  function resetcolor(){
    for (let i = 0; i < moves.length; i++){
     if(document.getElementById(moves[i]).className.indexOf('1') > -1) {
     document.getElementById(moves[i]).style.backgroundColor = "#769656";
     }else{
     document.getElementById(moves[i]).style.backgroundColor = "#eeeed2";
     }
   }
  }


 	document.addEventListener("dragstart",function(event) {
    createmove(event.target);
 		event.dataTransfer.setData('text/plain',null);
 		dragged = event.target;
    showmoves();

 	})

 	document.addEventListener("dragend", function(event) {
    resetcolor();
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
