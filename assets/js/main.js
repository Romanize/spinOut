/**
 * Change texts on mindsets home section
 */
const changeMindsetPhrases = () => {
  let i = 0;
  const mindsetPhrases = [
    '"No existe innovación sin disciplina"',
    '"Vive plenamente consciente"',
    '"Abraza la incertidumbre"',
    '"Tienes que hacer realidad tus ideas"',
    '"La empatía importa"',
    '"Tus capacidades sólo se valoran por tus acciones tangibles"',
  ];
  setInterval(() => {
    $("#mindsets").text(mindsetPhrases[i]);
    if (i === 5) {
      i = 0;
    } else {
      i++;
    }
  }, 5000);
};

changeMindsetPhrases();

/**
 * Set carousel arrows click events
 */
const setCarouselArrowsFunction = () => {
  const leftArrow = $(".carousel-left");
  const rightArrow = $(".carousel-right");

  leftArrow.click(() => {
    $(".carousel-tarjetas").animate({ scrollLeft: "-=270" });
  });

  rightArrow.click(() => {
    console.log("Click");
    $(".carousel-tarjetas").animate({ scrollLeft: "+=270" });
  });

  const fundamentosCard = $(".boton-fundamentos");

  fundamentosCard.click((e) => {
    e.preventDefault();
    const parent = e.currentTarget.parentElement.parentElement;
    const actualScroll = $(".carousel-modelo").scrollLeft();

    if (e.currentTarget === document.getElementById("last-button")) {
      $(".carousel-modelo").animate({ scrollLeft: 0 });
    } else {
      // $('.carousel-modelo').scrollLeft(actualScroll + parent.offsetWidth + 200);
      $(".carousel-modelo").animate({
        scrollLeft: `+=${parent.offsetWidth + 200}`,
      });
    }
  });
};

setCarouselArrowsFunction();

//CONTADOR NUMEROS

(function ($) {
  $.fn.countTo = function (options) {
    // merge the default plugin settings with the custom options
    options = $.extend({}, $.fn.countTo.defaults, options || {});

    // how many times to update the value, and how much to increment the value on each update
    var loops = Math.ceil(options.speed / options.refreshInterval),
      increment = (options.to - options.from) / loops;

    return $(this).each(function () {
      var _this = this,
        loopCount = 0,
        value = options.from,
        interval = setInterval(updateTimer, options.refreshInterval);

      function updateTimer() {
        value += increment;
        loopCount++;
        $(_this).html(value.toFixed(options.decimals));

        if (typeof options.onUpdate == "function") {
          options.onUpdate.call(_this, value);
        }

        if (loopCount >= loops) {
          clearInterval(interval);
          value = options.to;

          if (typeof options.onComplete == "function") {
            options.onComplete.call(_this, value);
          }
        }
      }
    });
  };

  $.fn.countTo.defaults = {
    from: 0, // the number the element should start at
    to: 100, // the number the element should end at
    speed: 1500, // how long it should take to count between the target numbers
    refreshInterval: 50, // how often the element should be updated
    decimals: 0, // the number of decimal places to show
    onUpdate: null, // callback method for every time the element is updated,
    onComplete: null, // callback method for when the element finishes updating
  };
})(jQuery);

//FUNCION PARA EJECUTAR EL CONTEO CUANDO SE HAGA SCROLL EN LA SECCION IMPACTO

let S1 = $("section:eq(2)").offset().top + 200; //OBTENGO LA POSICION VERTICAL DE LA PRIMERA SECCION

let S2 = $("section:eq(4)").offset().top; //OBTENGO LA POSICION VERTICAL DE LA SEGUNDA SECCION

let bandera = 0;
window.onscroll = function () {
  //SI EL SCROLL ES MAYOR A LA SECCION NUMERO 1 Y MENOR A LA SECCION NUMERO 2, SE EJECUTA EL CODIGO
  if ($(this).scrollTop() > S1 && $(this).scrollTop() < S2) {
    if (bandera == 0) {
      //Call Counters

      $(function ($) {
        $(".numero-contador-header").countTo({
          from: 0,
          to: 420,
        });
      });
      $(function ($) {
        $("#awareness").countTo({
          from: 0,
          to: 76,
        });
      });

      $(function ($) {
        $("#learning").countTo({
          from: 0,
          to: 130,
        });
      });
      $(function ($) {
        $("#experiment").countTo({
          from: 0,
          to: 83,
        });
      });
      $(function ($) {
        $("#pursue").countTo({
          from: 0,
          to: 25,
        });
      });
      $(function ($) {
        $("#spinout").countTo({
          from: 0,
          to: 16,
        });
      });
      bandera = 1;
    }
  }
};

//ALEPSO HOVER EVENT
$(".bloque-alepso").hover(
  function () {
    $(this).addClass("alepso-hover");
  },
  function () {
    $(this).removeClass("alepso-hover");
  }
);

$(".bloque--so-wrapper").hover(
  function () {
    $(this).addClass("alepso-hover");
  },
  function () {
    $(this).removeClass("alepso-hover");
  }
);

$(".mapa-pin:not(.mapa-pin-label)").mouseenter((e) => {
  let x = e.pageX - 10;
  let y = e.pageY - 10;

  //mobile
  if (e.target.parentElement.offsetWidth < 300)
    x = document.body.offsetWidth / 2 - 125;

  const { title, location, name, role, email, img } = JSON.parse(
    e.target.dataset.options
  );
  const content = `
    <div class="tooltip-header">
      <p>${title}</p>
      <span>${location}</span>
    </div>
    <div class="tooltip-content d-flex align-items-center">
      <img src="${img}"" alt="${name}" />
      <div>
        <p>${name}</p>
        <span>${role}</span><br>
        <a href="mailto: ${email}">${email}</a>
      </div>
    </div>
    `;
  $("#tooltip")
    .html(content)
    .css("top", `${y}px`)
    .css("left", `${x}px`)
    .css("opacity", "1")
    .css("pointer-events", "all");
});

//hide tooltip
$("#tooltip").mouseleave((e) => {
  $("#tooltip").css("pointer-events", "none").text("").css("opacity", "0");
});

$("#mapa-bolivia").on("click", () => {
  $("#mapa-bolivia").removeClass("closed");
  $("#mapa-peru").addClass("closed");
});

$("#mapa-peru").on("click", () => {
  $("#mapa-peru").removeClass("closed");
  $("#mapa-bolivia").addClass("closed");
});

$(".mapa-pin-label").on("click", (e) => {
  $(e.target.dataset.target).removeClass("hidden").addClass("shown");
  $(e.target.parentElement).addClass("hidden");
  $(".closed").addClass("hidden");
  $("#backToPeru").addClass("d-block");
});

$("#backToPeru").on("click", () => {
  $("#backToPeru").removeClass("d-block");
  $("#mapa-peru").removeClass("hidden");
  $(".closed").removeClass("hidden");
  $(".shown").removeClass("shown").addClass("hidden");
});

//data-options='{"name":"Yesi Glecely Cutipa Carita","title":"Universidad Nacional Jorge Basadre Grohmann","location":"Tacna","role":"Coordinadora SpinOut UNJBG","email":"unjbg.spinout@gmail.com", "img":"assets/images/people/Yesi_tooltip.jpeg"}'

$(".nav-link").click((e) => {
  e.preventDefault();
  const scroll = $(e.target.hash)[0].offsetTop;
  $("html").animate({ scrollTop: scroll });
});
