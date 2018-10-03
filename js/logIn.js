$('.iconKey').click(() => {
  $('.login').toggleClass('active__log');
  $('.iconKey').toggleClass('active_key');
  $('.logIn').toggleClass('active_fields');
  $('.form__container').toggleClass('active__form');
});

$('.lblInp input').keyup(function() {
  if($(this).val().length > 0){
    $(this).closest('.lblInp input').addClass('filled');
  }
  else{
    $(this).closest('.lblInp input').removeClass('filled');
  }
});

function logIn(){
  let login = document.getElementById('login');
  let pass = document.getElementById('password')
  if (login.value != 'admin' || pass.value != 'admin') {
    swal({
			type: 'error',
			title: 'Sorry...',
      text: 'Enter Correct Password or Login!'
		});
  } else {
    login.value = "";
    pass.value = "";
    $('.login').toggleClass('active__log');
    $('.iconKey').toggleClass('active_key');
    $('.logIn').toggleClass('active_fields');
    $('.form__container').toggleClass('active__form');
    $('.iconKey').css('display', 'none');
    $('.logIn').css('display', 'none');
    $('.iconExit').fadeIn();
    $('.iconExit').addClass('active-door');
    $('.iconExit').addClass('active-handle');
    $('.add-btn').fadeIn();
  }
}

let elementLogIn = document.getElementById('submit_login');
let form = document.getElementById('form_login');

elementLogIn.addEventListener("click", () => { logIn(); }, false);
form.onkeypress = function(e) {
  if(e.keyCode == 13){
    elementLogIn.dispatchEvent(new Event('click'));
  }
}

$('.iconExit').click(() => {
  $('.iconExit').css('display', 'none');
  $('.iconKey').fadeIn();
  $('.logIn').fadeIn();
  $('.add-btn').fadeOut();
});

$('.add-btn').click(() => {
  $('.addEvent_wrapper').fadeIn();
});


$('.close-addform').click(function(){
	$('.addEvent_wrapper').fadeOut();
	$('.wrapper').css('filter', 'none');
});

$(document).keydown((e) => {
	if(e.keyCode == 27){
		$('.addEvent_wrapper').fadeOut();
		$('.wrapper').css('filter', 'none');
	}
});