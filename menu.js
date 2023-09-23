
window.addEventListener("scroll", function(){
    let header = document.querySelector('#nav')
    header.classList.toggle('rolagem',window.scrollY > 350)
})

const logo = document.querySelector(".logo img");

window.addEventListener("scroll", function() {
  if (window.scrollY > 300) {
    // Altera a logo para uma versão branca
    logo.src = "assets/logo-branca-pt-2-min.jpg";

    // Define o tamanho da logo
    logo.width = 65;
    logo.height = 65;
  } else {
    // Altera a logo para a versão original
    logo.src = "assets/logo-aws-cinza.png";

    // Define o tamanho da logo
    logo.width = 65;
    logo.height = 65;
  }
});