const gallery = [
  'images/front_terrace.jpg',
  'images/room.jpg',
  'images/terrace.jpg',
  'images/front_building.jpg',
  'images/view.jpg',
  'images/restaurant.jpg',
  'images/spumante.jpg',
  'images/primo_pesce.jpg',
  'images/terrace_2.jpg',
  'images/building.jpg',
  'images/cake.jpg',
  'images/concerto.jpg',
  'images/chef.jpeg',
  'images/lasagna.jpeg',
  'images/antipasto.jpeg',
  'images/risotto.jpeg',
  'images/restaurant1.jpg',
  'images/bar1.jpg',
  'images/terrace3.jpg',
  'images/restaurant2.jpg',
  'images/bar2.jpg',
  'images/terrace4.jpg',
  'images/restaurant3.jpg',
  'images/bar3.jpg',
]

let current_img = 0;

$('a.gallery_ref').on('click', function(){
  
  $('#popup_img').attr('src', $(this).attr('href'));
  document.getElementById('popup').style.zIndex = 1000;
  $('#popup').show();
  $('#close_popup').show();
  $('#next_img').show();
  $('#prev_img').show();

  for (let i = 0; i < gallery.length; i++) {
    if (gallery[i] == $(this).attr('href')) {
      current_img = i;
      break;
    }
  }
  return false;
})

$('#close_popup').on('click', function(){
  $('#popup').hide();
  $('#close_popup').hide();
})

$('#next_img').on('click', function(){
  if (current_img == gallery.length-1) {
    current_img = 0;
  }
  else {
    current_img++;
  }
  $('#popup_img').attr('src', gallery[current_img]);
})

$('#prev_img').on('click', function(){
  if (current_img == 0) {
    current_img = gallery.length-1;
  }
  else {
    current_img--;
  }
  $('#popup_img').attr('src', gallery[current_img]);
})

/*
let touchstartX = 0
let touchendX = 0

document.getElementById('popup_img').addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX;
})

document.getElementById('popup_img').addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX;
  if (touchendX < touchstartX) {
    if (current_img == gallery.length-1) {
    current_img = 0;
    }
    else {
      current_img++;
    }
    $('#popup_img').attr('src', gallery[current_img]);
  }
  else {
    if (current_img == 0) {
    current_img = gallery.length-1;
    }
    else {
      current_img--;
    }
    $('#popup_img').attr('src', gallery[current_img]);
  }
  touchstartX = 0;
  touchendX = 0;
})
*/