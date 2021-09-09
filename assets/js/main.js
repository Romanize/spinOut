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
    const leftPosition = $(".carousel-tarjetas").scrollLeft();
    $(".carousel-tarjetas").scrollLeft(leftPosition - 350);
  });

  rightArrow.click(() => {
    console.log("Click");
    const leftPosition = $(".carousel-tarjetas").scrollLeft();
    $(".carousel-tarjetas").scrollLeft(leftPosition + 350);
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
        $("#104").countTo({
          from: 0,
          to: 104,
        });
      });

      $(function ($) {
        $("#148").countTo({
          from: 0,
          to: 148,
        });
      });
      $(function ($) {
        $("#112").countTo({
          from: 0,
          to: 112,
        });
      });
      $(function ($) {
        $("#76").countTo({
          from: 0,
          to: 76,
        });
      });
      $(function ($) {
        $("#16").countTo({
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

$(".mapa-pin:not(.mapa-pin-label)").on("mouseover", (e) => console.log(e));

$(".mapa .closed").on("click", (e) => console.log(e));
