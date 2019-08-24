$('.dropdown-button').on('click', function(){
    var currentDropdown = this;
    var openedArray = $('.opened').toArray();
    if(!$(currentDropdown).hasClass('opened')) {
        $(currentDropdown).parent('.dropdown').toggleClass('opened');
    }
    openedArray.forEach(function (elem) {
        $(elem).removeClass('opened');
    });
});

var copyTextareaBtn = document.querySelector('.copy-link-copy-button');

copyTextareaBtn.addEventListener('click', function(event) {
    var copyTextarea = document.querySelector('.copy-link-link');
    copyTextarea.focus();
    copyTextarea.select();
    document.execCommand('copy');

});

$('.close-button').on('click', function(){
    $(this).parent().remove();
    alertHeight();
});
$(document).click(function(event) {
    if (!$(event.target).closest(".dropdown ul, .dropdown").length) {
        $('.dropdown').removeClass('opened');
    }
});


alertHeight();
$('.add-li').on('click', function(){
    $('.alert-modal ul').append('<li class="alert-block">\n' +
        '            <div class="alert-icon"></div>\n' +
        '            <div class="text">\n' +
        '                <p class="alert-title">Error</p>\n' +
        '                <p class="alert-desc">Your password or login is incorrect </p>\n' +
        '            </div>\n' +
        '            <div class="close-button"></div>\n' +
        '        </li>');

        var lastChildLi = $('.alert-modal ul').children().last();

        setTimeout(function () {
            $(lastChildLi).addClass('hidden');

        },3000);


    alertHeight();
});

/*function alertHeight(){
    var sumLi = $('.alert-modal ul')[0].children.length;
    var array = [];
    var sum = 0;
    for ( var i = 0; i<sumLi; i++ ) {
        array[i] = $('.alert-modal ul').eq(i).outerHeight();
        sum = sum + array[i];
    }
    console.log(sum, sumLi);
    $('.alert-modal ul').outerHeight(sum);
    return;
}*/


function alertHeight(){

    var sum = 0;

    $('.alert-modal ul li').each(function () {

        sum += $(this).outerHeight(true);
    });

    $('.alert-modal ul').outerHeight(sum);

}

$('.add-widget-block .btn').on('click', function () {
    $('.widget-modal-create-widget').toggleClass('opened');
});
$('.copy-link-button').on('click', function () {
    $('.widget-modal-copy-link').toggleClass('opened');
});
$('.create-sample-group-button').on('click', function(){
    $('.widget-modal-create-group').toggleClass('opened');
});
$('.edit-sample-group-button').on('click', function(){
    $('.widget-modal-edit-sample-group').toggleClass('opened');
});
$('.add-sample-group-button').on('click', function(){
  $('.widget-modal-add-sample-group').toggleClass('opened');
});
$('.delete-sample-group-button').on('click', function(){
    $('.widget-modal-delete-sample-group').toggleClass('opened');
});
$('.delete-widget-button').on('click', function(){
    $('.widget-modal-delete-widget').toggleClass('opened');
});
$('.create-group-next-step-button').on('click', function(){
    $('.widget-modal-create-group').addClass('second-step');
    $('.create-group-next-step-button').text("Create");
});
$('.create-group-prev-step-button').on('click', function(){
    $('.widget-modal-create-group').removeClass('second-step');
    $('.create-group-next-step-button').text("Next");
});
$('.widget-modal .widget-modal-bg').on('click', function () {
    $(this).parent().removeClass('opened');
});
$('.widget-modal-template-list li').on('click', function () {
    $('.widget-modal-template-list li').removeClass('active');
    $(this).toggleClass('active');
});

$('.close-button-modal').on('click', function(){
  $(this).parent().parent().parent().removeClass('opened');
});

$('.copy-link-show-button').on('click', function(){
   $('.copy-link-block .copy-link-link').toggleClass('showed');
});


$('.select-input').on('click', function(){
    $(this).siblings('.select-input-options').toggleClass('opened');
});
$('.select-input-options li').on('click', function(){
    var thisValue = $(this).html();
    console.log(thisValue);
    $(this).parents('.select-input-options').siblings('.select-input').html(thisValue);
    $(this).parents('.select-input-options').removeClass('opened');
});


//Range slider init
$(".js-range-slider").ionRangeSlider({
    min: 0,
    max: 100,
    from: 70
});

//Upload input
$('.alert-settings .input-file-download-button').on('click', function () {
    $(this).parent().parent().addClass('downloaded');
    $(this).siblings('input').click();
});

//Turn back to empty input
$('.alert-settings .input-file-clear-button').on('click', function () {
    $(this).parent().parent().parent().removeClass('downloaded');
});

//Change user name popup
$('.user-settings .change-nickname-button').on('click', function () {
    $('.widget-modal-change.change-nickname').toggleClass('opened');
});

//Change user email popup
$('.user-settings .change-email-button').on('click', function () {
    $('.widget-modal-change.change-email').toggleClass('opened');
});

//Change user password popup
$('.user-settings .change-password-button').on('click', function () {
    $('.widget-modal-change.change-password').toggleClass('opened');
});

