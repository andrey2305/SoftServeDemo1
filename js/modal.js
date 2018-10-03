function modal(modal){
  return `
  <div class="close-popup js-close-campaing"></div>
	<div class="modal-content">
		<div class="modal_event">
			<h2 class="event-caption">${modal.nameEvent}</h2>
			<div class="modal__info-event">
				<span class="event-data">${modal.place}</span>
				<span class="event-data">${getDateForModal(modal.dateTime)}</span>
			</div>
		</div>
		<div class="discription__info">
			<div class="speakers">
					<h4 class="title">Speakers</h4>
					${modal.speakers ? speakers(modal.speakers) : ""}
			</div>
			<div class="discription">
				<h1 class="title">description</h1>
				<div class="dis_info">
					<p>${modal.description}</p>
				</div>
			</div>
		</div>
	</div>
`
}

function openModal(years){
$('.js-btn-open-campaing').click((event) => {
	$('.wrapper').css('filter', 'blur(4px)');
  $('.js-overlay-campaing').fadeIn();
	let target = event.target;
	let idEvent = target.getAttribute('id'); 
	idAll = idEvent.split('-');
	document.getElementById("popup").innerHTML = `
		${modal(years[+idAll[0]-years[0].year].events[+idAll[1]])}
	`;
	$('.js-close-campaing').click(function(){
		$('.js-overlay-campaing').fadeOut();
		$('.wrapper').css('filter', 'none');
	});
});
}

$(document).mouseup((e) =>{
	let popup = $('.js-popup-campaing');
	if(e.target !== popup && popup.has(e.target).length === 0){
		$('.js-overlay-campaing').fadeOut();
		$('.wrapper').css('filter', 'none');
	}
});

$(document).keydown((e) => {
	if(e.keyCode == 27){
		$('.js-overlay-campaing').fadeOut();
		$('.wrapper').css('filter', 'none');
	}
});