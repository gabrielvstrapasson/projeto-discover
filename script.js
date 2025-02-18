function toggleMode() {
  const html = document.documentElement
  /*
  if (body.classList.contains("light")) {
    HTMLAllCollection.classList.remove("light")
  } else {
    HTMLAllCollection.classList.add("light")
  } */

  html.classList.toggle("light")
}
