window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".fixed-top").classList.add("scrolled");
  } else {
    document.querySelector(".fixed-top").classList.remove("scrolled");
  }
}
