const carouselItems = document.querySelectorAll(".carousel-item1");
let currentIndex = 0;

function showSlide(index) {
  // Hide all carousel items
  carouselItems.forEach((item) => {
    item.style.display = "none";
  });

  // Show the slide at the specified index
  carouselItems[index].style.display = "block";
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  showSlide(currentIndex);
}

function previousSlide() {
  currentIndex =
    (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  showSlide(currentIndex);
}

// Show the first slide initially
showSlide(currentIndex);

// Set up event listeners for next and previous buttons
document.getElementById("nextBtn").addEventListener("click", nextSlide);
document.getElementById("prevBtn").addEventListener("click", previousSlide);

const carouselItems2 = document.querySelectorAll(".carousel-item2");
let currentIndex2 = 0;

function showSlide2(index) {
  // Hide all carousel items
  carouselItems2.forEach((item) => {
    item.style.display = "none";
  });

  // Show the slide at the specified index
  carouselItems2[index].style.display = "block";
}

function nextSlide2() {
  currentIndex2 = (currentIndex2 + 1) % carouselItems2.length;
  showSlide2(currentIndex2);
}

function previousSlide2() {
  currentIndex2 =
    (currentIndex2 - 1 + carouselItems2.length) % carouselItems2.length;
  showSlide2(currentIndex2);
}

// Show the first slide initially
showSlide2(currentIndex2);

// Set up event listeners for next and previous buttons
document.getElementById("nextBtn2").addEventListener("click", nextSlide2);
document.getElementById("prevBtn2").addEventListener("click", previousSlide2);



const carouselItems3 = document.querySelectorAll(".carousel-item3");
let currentIndex3 = 0;

function showSlide3(index) {
  // Hide all carousel items
  carouselItems3.forEach((item) => {
    item.style.display = "none";
  });

  // Show the slide at the specified index
  carouselItems3[index].style.display = "block";
}

function nextSlide3() {
  currentIndex3 = (currentIndex3 + 1) % carouselItems2.length;
  showSlide3(currentIndex3);
}

function previousSlide3() {
  currentIndex3 =
    (currentIndex3 - 1 + carouselItems3.length) % carouselItems3.length;
  showSlide3(currentIndex3);
}

// Show the first slide initially
showSlide3(currentIndex3);

// Set up event listeners for next and previous buttons
document.getElementById("nextBtn3").addEventListener("click", nextSlide3);
document.getElementById("prevBtn3").addEventListener("click", previousSlide3);

