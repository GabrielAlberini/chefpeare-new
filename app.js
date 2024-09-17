/*Carga previa a mostrar contenido de página*/
window.onload = function () {
  $("#preload").fadeOut();
  $("body").removeClass("hidden");
};

/*Menu*/
((d) => {
  //Se declaran anteponiendo el $ porque
  //están haciendo referencia a un elemento del DOM
  const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu"),
    $check = d.querySelector(".check");

  $btnMenu.addEventListener("click", (e) => {
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;
    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
  });
})(document);

/*Contact Form*/
((d) => {
  const $form = d.querySelector(".contact-form"),
    $loader = d.querySelector(".contact-form-loader"),
    $response = d.querySelector(".contacto-form-response");

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    $loader.classList.remove("none");
    fetch("https://formsubmit.co/ajax/chefpeare@gmail.com", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        console.log(json);
        location.hash = "#gracias";
        $form.reset();
      })
      .catch((err) => {
        console.log(err);
        let message =
          err.status.text || "Ocurrio un error al enviar, intenta nuevamente.";
        $response.querySelector(
          "h3"
        ).innetHTML = `Error ${err.status}:${message}`;
      })
      .finally(() => {
        $loader.classList.add("none");
        setTimeout(() => {
          location.hash = "#close";
        }, 3000);
      });
  });
})(document);

//Cambio de idioma
((d) => {
  const $check = d.querySelector(".check");

  $check.addEventListener("click", () => {
    console.log($check);
    let checkValue = $check.checked;
    checkValue
      ? (location.href = "leng/index.html")
      : (location.href = "../index.html");
  });
})(document);

/*Música de página*/
((d) => {
  const checkbox = d.querySelector(".musica-check");
  const checkboxIngles = d.querySelector(".musica-ingles");
  const sonidoEs = d.querySelector(".sonido-mp3-es");
  const sonidoEn = d.querySelector(".sonido-mp3-en");

  checkbox.addEventListener("click", () => {
    const checkMusica = checkbox.checked;
    const checkMusicaIngles = checkboxIngles.checked;

    sonidoEs.innerHTML = checkMusica
      ? '<audio src="assets/audio-pagina.mp3" autoplay></audio>'
      : "";
    sonidoEn.innerHTML = checkMusicaIngles
      ? '<audio src="../assets/audio-pagina.mp3" autoplay></audio>'
      : "";
  });
})(document);

/*Owl Carousel whit JQuery*/
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 20,
  nav: false,
  autoplay: true,
  autoplayTimeout: 4000,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 2,
    },
  },
});
