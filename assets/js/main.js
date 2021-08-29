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
