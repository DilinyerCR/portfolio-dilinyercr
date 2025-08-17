const showMenu = document.getElementById("bars-icon");
const menu = document.getElementById("menu");
const closeMenu = document.getElementById("close-icon");
const menuLinks = document.querySelectorAll("#menu a");
const body = document.getElementById('body');

const img1 = document.querySelector(".img1");


showMenu.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
});

closeMenu.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
});

menuLinks.forEach(function (link) {
  link.addEventListener("click", () => {
    menu.classList.remove("show-menu");
  });
});

document.addEventListener("click", function (event) {
  const target = event.target;
  if (!menu.contains(target) && target !== showMenu) {
    menu.classList.remove("show-menu");
  }
});


// !======PROJECT IMG TRANSITION======

// !========IMAGE # 1========
img1.addEventListener("mouseenter", () => {
  img1.style.transform = "translateY(-36%)";
  img1.style.transition = "transform 4s ease-in-out 0.3s";
})

img1.addEventListener("mouseleave", () => {
  img1.style.transform = "translateY(0%)";
  img1.style.transition = "transform 1s ease-in-out 0.2s";
})

// !========IMAGE # 2========
// img2.addEventListener("mouseenter", () => {
//   img2.style.transform = "translateY(-45%)";
//   img2.style.transition = "transform 3s ease-in-out 0.3s";
// })

// img2.addEventListener("mouseleave", () => {
//   img2.style.transform = "translateY(0%)";
//   img2.style.transition = "transform 2s ease-in-out 0.2s";
// })

// !========IMAGE # 3========
// img3.addEventListener("mouseenter", () => {
//   img3.style.transform = "translateY(-54%)";
//   img3.style.transition = "transform 1s ease-in-out 0.3s";
// })

// img3.addEventListener("mouseleave", () => {
//   img3.style.transform = "translateY(0%)";
//   img3.style.transition = "transform 2s ease-in-out 0.2s";
// })



