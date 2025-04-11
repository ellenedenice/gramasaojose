window.addEventListener("scroll", function () {
    const menuContainer = document.getElementById("containermenu");
    if (window.scrollY > 50) {
      menuContainer.classList.add("scrolled");
    } else {
      menuContainer.classList.remove("scrolled");
    }
  });

  document.getElementById("enviar-email").addEventListener("click", function (e) {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;
  
    const assunto = `Orçamento - ${nome}`;
    const corpo = `Nome: ${nome}%0AEmail: ${email}%0AMensagem: ${mensagem}`;
    window.location.href = `mailto:jlgramas@gmail.cim?subject=${assunto}&body=${corpo}`;
  });
  
  document.getElementById("enviar-whatsapp").addEventListener("click", function (e) {
    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;
  
    const texto = `Olá, meu nome é ${nome}. Gostaria de um orçamento.%0A${mensagem}`;
    const url = `https://wa.me/5515997184119?text=${texto}`;
    this.href = url;
  });


  let index = 0;

  function showNextSlide() {
    const slides = document.querySelector(".slides");
    const totalSlides = document.querySelectorAll(".slide").length;
  
    index = (index + 1) % totalSlides;
    slides.style.transform = `translateX(-${index * 100}%)`;
  }
  
  setInterval(showNextSlide, 2000); // velocidade da troca (2s)