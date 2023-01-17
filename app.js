   const button = document.getElementById("btn");
   const textInput = document.getElementById("title");
   const main = document.getElementsByTagName("ul")[0];
   
  
     button.addEventListener("click", (e) => {
        if(textInput.value ===""){
            alert("please to write anything")
        }
      else{main.innerHTML += `<li class="add remove "><button class="nav__check"><i class="fa-solid fa-check"></i></button> <span>${textInput.value}</span>  <button class="nav__remove"><i class="fa-solid fa-xmark"></i></button></li>`;
       textInput.value = "";} 
     });
     window.addEventListener("keyup", (e) => {
       e.code === "Enter" && button.click();
     });
    

     main.addEventListener("click", (e) => {
       //   let  button
      
       if (e.target.classList.contains("fa-xmark")) {
         e.target.closest("li").remove();
       }
       if (e.target.classList.contains("fa-check")) {
         //e.target.closest("nav").classList.toggle("nav_click")
         e.target.classList.toggle("click");
       }
       if (e.target.classList.contains("fa-check")) {
         e.target.closest("li").classList.toggle("nav_click");
       }
       if (e.target.classList.contains("fa-check")) {
         e.target.closest("li").classList.toggle("white");
       }
     })
   
