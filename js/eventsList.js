function events(events, year){
	let current = 0;
  return `
    <div class="list__events">
      ${events.map(event => `<div class="event">
      <h3 class="event_caption">${event.nameEvent}</h3>
        <div class="event_info">
          <span class="event__date">${getDateForModal(event.dateTime)}</span>
					<div class="btn-open js-btn-open-campaing"><span id="${year + '-' + current++}">Detailes</span><span id="arrow_det"></span></div>
        </div>
      </div>`).join("")}
    </div>
  `;
}