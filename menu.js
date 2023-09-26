
/* --Função de transição de menu nav de LOGO AZUL e Background LARANJA para LOGO BRANCO e Background AZUL-- */

window.addEventListener("scroll", function(){
    let header = document.querySelector('#nav')
    header.classList.toggle('rolagem',window.scrollY > 820)
})

const logo = document.querySelector(".logo img");

window.addEventListener("scroll", function() {
  if (window.scrollY > 820) {
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

/* --Função de ao clicar na setinha será redirecionado para seção de Portfólios-- */

// Função para lidar com o clique no elemento com a classe .port
        document.querySelector(".width-setinha").addEventListener("click", function(event) {
            event.preventDefault(); // Impede o comportamento padrão do link

            // Calcula a posição do ponto 860 na tela
            var targetPosition = 860;

            // Rola suavemente até a posição desejada
            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        });

/* --Função de ao clicar no Portfólios no menu nav será redirecionado para seção de Portfólios-- */

// Função para lidar com o clique no elemento com a classe .port
        document.querySelector(".port").addEventListener("click", function(event) {
            event.preventDefault(); // Impede o comportamento padrão do link

            // Calcula a posição do ponto 860 na tela
            var targetPosition = 860;

            // Rola suavemente até a posição desejada
            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        });
