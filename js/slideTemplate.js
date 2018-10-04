function slideTemplate(slide){
  var out = "";
  slide.forEach(element => {
    out += `
    <div class="sl__slide">
      <div class="sl__slide-front front">
        <h3 class="year__num">${element.year}</h3>
        <div class="year__info">
          <div class="info__item">
            <h3>${eventsCount(element.events)}</h3>
            <span>events</span>
          </div>
          <div class="info__item">
            <h3>${speakersCount(element.events)}</h3>
            <span>speakers</span>
          </div>
          <div class="info__item">
            <h3>${placesCount(element.events)}</h3>
            <span>places</span>
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
