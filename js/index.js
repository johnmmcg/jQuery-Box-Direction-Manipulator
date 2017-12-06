$(document).ready(() => {
  $('.fa-arrow-up').on('click', () => {
    $('.container').animate({top: "90px"},200).animate({top: "100px"}, 200);
    $('.square').animate({top: "20px"}, 500);
  });
  $('.fa-arrow-down').on('click', () => {
    $('.container').animate({top: "110px"},200).animate({top: "100px"}, 200);
    $('.square').animate({top: "230px"}, 500);
  })
  $('.fa-arrow-right').on('click', () => {
    $('.container').animate({marginLeft: "-290px"},200).animate({marginLeft: "-300px"}, 200);
    $('.square').animate({left: "230px"}, 500);
  })
  $('.fa-arrow-left').on('click', () => {
    $('.container').animate({marginLeft: "-310px"},200).animate({marginLeft: "-300px"}, 200);
    $('.square').animate({left: "20px"}, 500)
  });
});