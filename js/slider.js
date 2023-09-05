var images = document.querySelectorAll("#slider .f-box img")
var rightArrow = document.getElementById("r-arrow");
var leftArrow = document.getElementById("l-arrow");
var currentIndex = 0;
isSliderRunning = false
function showImage(index){

   for(var i=0 ;i<images.length;i++){
    if(i===index){
    images[i].style.display = "block"
    }
    else{
        images[i].style.display = "none"
    }
   }}
  
   function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
    updateDots();

  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
    updateDots();

  }
   
   function updateSlider() {
    showImage(currentIndex);
    updateDots();

  }   
  function startSlider() {
      sliderInterval = setInterval(nextSlide, 3000);
      isSliderRunning = true
      updateDots();
      updateSlider();
    } 
function createDots() {
    var dotsList = document.getElementById("dots-list");
    for (var i = 0; i < images.length; i++) {
       var dot = document.createElement("li");
       dot.className = "dot";
       dot.setAttribute("data-index", i); // إضافة معرّف للنقطة
       dot.addEventListener("click", function () {
          var dotIndex = parseInt(this.getAttribute("data-index"));
          currentIndex = dotIndex;
          updateSlider();
          clearInterval(sliderInterval);
          startSlider();
       });
       dotsList.appendChild(dot);
    }
 }
  
 function updateDots() {
    var dots = document.querySelectorAll(".dot");
    for (var i = 0; i < dots.length; i++) {
       if (i === currentIndex) {
          dots[i].classList.add("active");
       } else {
          dots[i].classList.remove("active");
       }
    }
 }
 startSlider()
createDots();

function stopSlider() {
    clearInterval(sliderInterval);
    isSliderRunning = false;
  }

  images.forEach(function(image) {
    image.addEventListener("mouseenter", function() {
       if (isSliderRunning) {
          stopSlider();
       }
    });
 
    image.addEventListener("mouseleave", function() {
       if (!isSliderRunning) {
          startSlider();
       }
    });
 });
 var sidebarElements = document.getElementsByClassName("sidebar");

if (sidebarElements.length > 0) {
   console.log(sidebarElements[0]);
  var x = sidebarElements[0].parentElement;
  console.log(x.nodeName);
} else {
  console.log("No elements with the 'sidebar' class found.");
}
rightArrow.addEventListener("click",nextSlide)
leftArrow.addEventListener("click",prevSlide)