window.onscroll = function () {
  scroll();
};

function scroll() {
  let header = document.getElementsByTagName("header")[0];
  let length = 50;

  // console.log(document.body.scrollTop)
  // console.log(document.documentElement.scrollTop)

  if (document.body.scrollTop > length || document.documentElement.scrollTop > length) {
    header.classList.add("small");
    header.classList.remove("full");
  } else {
    header.classList.add("full");
    header.classList.remove("small");
  }
}
