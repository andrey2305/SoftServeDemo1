function slideTemplate(slide){
  var out = "";
  slide.forEach(element => {
    out += `
    <div class="sl__slide">
      <div class="sl__slide-front front">
      <div class="inner">
        <h1 class="year__num">${element.year}</h1>
        <div class="year__info">
          <div class="info__item">
            <h1>${eventsCount(element.events)}</h1>
            <span>events</span>
          </div>
          <div class="info__item">
            <h1>${speakersCount(element.events)}</h1>
            <span>speakers</span>
          </div>
          <div class="info__item">
            <h1>${placesCount(element.events)}</h1>
            <span>places</span>
          </div>
        </div>
      </div>
      </div>
      <div class="sl__slide-back back" id="${slide.year}"">
        ${element.events ? events(element.events, element.year) : ""}
      </div>
    </div>
    `;
  });
  $('#slider').html(out);
}
