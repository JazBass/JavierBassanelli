//Fade de elementos contactos
window.addEventListener('scroll', function () {
  let elements = document.getElementsByClassName('scroll-content');
  let screenSize = window.innerHeight;

  for (var i = 0; i < elements.length; i++) {
    let element = elements[i];

    if (element.getBoundingClientRect().top < screenSize) {
      element.classList.add('visible');
    } else {
      element.classList.remove('visible');
    }
  }
});
//Scroll de barra de navegación
window.addEventListener("scroll", function () {
  var header = document.getElementById("barranav");
  header.classList.toggle("abajo", window.scrollY > 0);
  var logo = document.getElementById("logo");
  logo.classList.toggle("aparecer", window.scrollY > 100);
})





