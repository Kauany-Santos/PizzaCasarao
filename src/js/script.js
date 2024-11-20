let show = true;
const menuContent = document.querySelector('.content');
const menuToggle = menuContent.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
    menuContent.classList.toggle('on', show);
    show = !show;
    
});

//Carrosel dos Destaques//

let slideIndex = 1;
showSlides(slideIndex);

//Setas do Carrosel//
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//Troca de Imagem//
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carrosel");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
    
}

//Cardapio//

function openPizzas(evt, cityName) {
    // Declare all variables
    var i, tabcontent, botao;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    botao = document.getElementsByClassName("botao");
    for (i = 0; i < botao.length; i++) {
      botao[i].className = botao[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }