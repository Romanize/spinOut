/**
 * Change texts on mindsets home section
 */
const changeMindsetPhrases = () => {
    let i = 0;
    const mindsetPhrases = [
        '"No existe innovación sin disciplina',
        '"Vive plenamente consciente',
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

(function($) {
    $.fn.countTo = function(options) {
        // merge the default plugin settings with the custom options
        options = $.extend({}, $.fn.countTo.defaults, options || {});

        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(options.speed / options.refreshInterval),
            increment = (options.to - options.from) / loops;

        return $(this).each(function() {
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
        speed: 1000, // how long it should take to count between the target numbers
        refreshInterval: 50, // how often the element should be updated
        decimals: 0, // the number of decimal places to show
        onUpdate: null, // callback method for every time the element is updated,
        onComplete: null, // callback method for when the element finishes updating
    };
})(jQuery);

//Call Counters

jQuery(function($) {
    $(".numero-contador-header").countTo({
        from: 0,
        to: 420,
    });
});
jQuery(function($) {
    $("#104").countTo({
        from: 0,
        to: 104,
    });
});

jQuery(function($) {
    $("#148").countTo({
        from: 0,
        to: 148,
    });
});
jQuery(function($) {
    $("#112").countTo({
        from: 0,
        to: 112,
    });
});
jQuery(function($) {
    $("#76").countTo({
        from: 0,
        to: 76,
    });
});
jQuery(function($) {
    $("#16").countTo({
        from: 0,
        to: 16,
    });
});

//ALEPSO HOVER EVENT
$(".bloque-alepso").hover(
    function() {
        $(this).addClass("alepso-hover");
    },
    function() {
        $(this).removeClass("alepso-hover");
    }
);

$(".bloque--so-wrapper").hover(
    function() {
        $(this).addClass("alepso-hover");
    },
    function() {
        $(this).removeClass("alepso-hover");
    }
);