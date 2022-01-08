const heading = document.querySelector('.heading')
const resetButton =document.querySelector('.reset-btn') 
const gameCells = document.querySelectorAll('.cell')


var isXturn=true;
var count =0;

const checkGameStatus=()=>{
    const index0ClassList=gameCells[0].classList;
    const index1ClassList=gameCells[1].classList;
    const index2ClassList=gameCells[2].classList;
    const index3ClassList=gameCells[3].classList;
    const index4ClassList=gameCells[4].classList;
    const index5ClassList=gameCells[5].classList;
    const index6ClassList=gameCells[6].classList;
    const index7ClassList=gameCells[7].classList;
    const index8ClassList=gameCells[8].classList;

    const r=document.getElementById("r");
    const modal=document.getElementById("modal");
   
    // O win in wrt to 0th index
    if(index0ClassList.contains('O')){
        if(index1ClassList.contains('O') && index2ClassList.contains('O')){
            
            modal.classList.add("show_modal");
            r.innerText="The winner is O";
        }
        else if(index3ClassList.contains('O') && index6ClassList.contains('O' )){
            
            modal.classList.add("show_modal");
            r.innerText="The winner is O";
        }
        else if(index4ClassList.contains("0") && index8ClassList.contains('O' )){
            
            modal.classList.add("show_modal");
            r.innerText="The winner is O";
        }
        

    }

    // // O win in wrt to 4 index
    if(index4ClassList.contains('O')){
        if(index0ClassList.contains('O') && index8ClassList.contains('O')){
            
            modal.classList.add("show_modal");
            r.innerText="The winner is O";
        }
        if(index2ClassList.contains('O') && index6ClassList.contains('O')){
            
            modal.classList.add("show_modal");
            r.innerText="The winner is O";
        }


    }
   
    // O win in wrt to 1th index
    if(index1ClassList.contains('O')){

        if(index4ClassList.contains('O') && index7ClassList.contains('O')){
            
            modal.classList.add("show_modal");
            r.innerText="The winner is O";
        }
        
    }
    // O win in wrt to 2nd index
    if(index2ClassList.contains('O')){

        if(index4ClassList.contains('O') && index6ClassList.contains('O')){
            
            modal.classList.add("show_modal");
            r.innerText="The winner is O";
        }
        else if(index5ClassList.contains('O') && index8ClassList.contains('O')){
            
            modal.classList.add("show_modal");
            r.innerText="The winner is O";
        }
        
    }

    // O win in wrt to 3rd index

    if(index3ClassList.contains('O')){

        if(index4ClassList.contains('O') && index5ClassList.contains('O')){
            
            modal.classList.add("show_modal");
            r.innerText="The winner is O";
        }
        
    }
    // O win in wrt to 6th index
    if(index6ClassList.contains('O')){

        if(index7ClassList.contains('O') && index8ClassList.contains('O')){
            
            modal.classList.add("show_modal");
            r.innerText="The winner is O";
        }
        
    }

    // X wins conditions-----------------

    // X win in wrt to 0th index
    if(index0ClassList.contains('X')){
        if(index1ClassList.contains('X') && index2ClassList.contains('X')){
            
            modal.classList.add("show_modal");

            r.innerText="The winner is X";
        }
        else if(index3ClassList.contains('X') && index6ClassList.contains('X' )){
            
            modal.classList.add("show_modal");
            r.innerText="The winner is X";
        }
        else if(index4ClassList.contains("X") && index8ClassList.contains('X' )){
            
            modal.classList.add("show_modal");
            r.innerText="The winner is X";
        }
        

    }
     // // O win in wrt to 4 index
     if(index4ClassList.contains('X')){
        if(index0ClassList.contains('X') && index8ClassList.contains('X')){
            
            modal.classList.add("show_modal");
            r.innerText="The winner is X";
        }
        if(index2ClassList.contains('X') && index6ClassList.contains('X')){
            
            modal.classList.add("show_modal");
            r.innerText="The winner is X";
        }


    }
    // X win in wrt to 1st index
    if(index1ClassList.contains('X')){

        if(index4ClassList.contains('X') && index7ClassList.contains('X')){
            
            modal.classList.add("show_modal");
            r.innerText="The winner is X";
        }
        
    }
    // X win in wrt to 2nd index
    if(index2ClassList.contains('X')){

        if(index5ClassList.contains('X') && index8ClassList.contains('X')){
            
            modal.classList.add("show_modal");
            r.innerText="The winner is X";
        }
        else if(index4ClassList.contains('X') && index6ClassList.contains('X')){
            
            modal.classList.add("show_modal");
            r.innerText="The winner is X";
        }
        
    }

    // X win in wrt to 3rd index

    if(index3ClassList.contains('X')){

        if(index4ClassList.contains('X') && index5ClassList.contains('X')){
            
            modal.classList.add("show_modal");
            r.innerText="The winner is X";
        }
        
    }
    // X win in wrt to 6th index
    if(index6ClassList.contains('X')){

        if(index7ClassList.contains('X') && index8ClassList.contains('X')){
            
            modal.classList.add("show_modal");
            r.innerText="The winner is X";

        }
        
    }






}



function cellHandler(event){
   const classList= event.target.classList;
   if(classList.length>1){
       return;
   }
   if(isXturn){
        classList.add("X")
        isXturn=false;
        heading.textContent="O's turn"
        heading.style.color="#3f21af";

   }else{
       classList.add('O')
       isXturn=true;
       heading.textContent="X's turn"
       heading.style.color="#af3621";
   }
   count=count+1
   console.log(count)
   if(count >=5){
       checkGameStatus()
   }
}






for(cell of gameCells){
    cell.addEventListener('click',cellHandler)
}

const resetHandler=()=>{
    window.location.reload()
}


resetButton.addEventListener('click',resetHandler);

// Close button of the modal

const close_btn=document.getElementById("close_btn");
close_btn.style.cursor="pointer";

close_btn.addEventListener("click",function(){
  
    modal.classList.remove("show_modal");



});