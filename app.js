const modalBtn = document.querySelector(".modal-btn");
const modalOvrlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

 modalBtn.addEventListener("click", function() {
     modalOvrlay.classList.add("open-modal");
 })
 closeBtn.addEventListener("click",function() {
     modalOvrlay.classList.remove("open-modal")
 })

