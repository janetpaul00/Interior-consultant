function menu() {
  console.log("menu is clicked");

  const nav = document.querySelector(".navbar");

  if (nav.className.includes("open")) {
    nav.classList.remove("open");
  } else {
    nav.classList.add("open");
  }
}
