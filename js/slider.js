function slickCenter(data) {
let item_length = $('.center > div').length;
//console.log(item_length);

$('.center').slick({
	centerMode: true,
	infinite: false,
	focusOnSelect: true,
	centerPadding: '10px',
	slidesToShow: 1,
	speed: 500,
	variableWidth: false,
	appendArrows: $('.slide-control'),
	prevArrow: $('.prev'),
	nextArrow: $('.next'),
	mobileFirst: true,
	responsive: [
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 1,
				centerPadding: '100px'
			}
		},
		{
			breakpoint: 670,
			settings: {
				slidesToShow: 1,
				centerPadding: '100px'
			}
		},
		{
			breakpoint: 700,
			settings: {
				slidesToShow: 1,
				centerPadding: '180px'
			}
		},
		{
			breakpoint: 940,
				settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 1200,
			settings: {
				centerPadding: '160px',
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 1540,
			settings: {
				slidesToShow: 5,
				centerPadding: '10px',
			}
		}
	]
});
$('.center').slick('slickGoTo', item_length, true);


$('.search-btn').click( (e) => {
	e.preventDefault();
	let maxYear = data[data.length-1].year;
	let minYear = data[0].year;
	let year = document.getElementById('search-input');
	if(year.value <= maxYear && year.value >= minYear){
		let currentYear = year.value - minYear;
		let slideIndex = currentYear;
		let slider = $('.center');
		slider[0].slick.slickGoTo(parseInt(slideIndex));
		year.value = "";
	} else {
		swal({
			type: 'error',
			title: 'Oops...',
			text: 'Enter Correct Data!'
		});
	}
});
}