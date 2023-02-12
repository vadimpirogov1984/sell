//Бургер-меню
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.header__list-link');

burger.addEventListener('click', 
function() {
    burger.classList.toggle('burger--active');
    menu.classList.toggle('header__nav--active');
    document.body.classList.toggle('stop-scroll');
});

menuLinks.forEach(function(el) {
    el.addEventListener('click', function() {
        burger.classList.remove('burger--active');
        menu.classList.remove('header__nav--active');
        document.body.classList.remove('stop=scroll');
    });
});

//Перброска части кода в другое место кода================
let move_array=[];
if($('*[data-move]')){
	$.each($('*[data-move]'), function(index, val) {
		if($(this).data('move')!='' && $(this).data('move')!=null){
			$(this).attr('data-move-index',index);
			move_array[index]={
				'parent':$(this).parent(),
				"index":$(this).index()
			};
		}
	});
}
function dynamic_adaptive(){
		let w=$(window).outerWidth();
	$.each($('*[data-move]'), function(index, val) {
		if($(this).data('move')!='' && $(this).data('move')!=null){
				let dat_array=$(this).data('move').split(',');
				let dat_parent=$('.'+dat_array[0]);
				let dat_index=dat_array[1];
				let dat_bp=dat_array[2];
			if(w<dat_bp){
				if(!$(this).hasClass('js-move_done_'+dat_bp)){
					if(dat_index>0){
						$(this).insertAfter(dat_parent.find('*').eq(dat_index-1));
					}else{
						$(this).prependTo(dat_parent);
					}
					$(this).addClass('js-move_done_'+dat_bp);
				}
			}else{
				if($(this).hasClass('js-move_done_'+dat_bp)){
					dynamic_adaptive_back($(this));
					$(this).removeClass('js-move_done_'+dat_bp);
				}
			}
		}
	});
}
function dynamic_adaptive_back(el){
		let index_original=el.data('move-index');
		let move_place=move_array[index_original];
		let parent_place=move_place['parent'];
		let index_place=move_place['index'];
	if(index_place>0){
		el.insertAfter(parent_place.find('*').eq(index_place-1));
	}else{
		el.prependTo(parent_place);
	}
}
$(window).resize(function(event) {
	dynamic_adaptive();
});
	dynamic_adaptive();

//Slider===============================
const swiper = new Swiper('.swiper', {
    slidePerView: 1,
    loop: true,
	autoplay: {
		delay: 3000,
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

});

//Hero-menu==========================================

let block = document.querySelector('.menu-hero');
window.onscroll = function() {
	var scrolled = window.pageYOffset || document.documentElement.scrollTop;
	if(scrolled > 4200) {
		block.classList.add('hide');
	} else {
		block.classList.remove('hide');

	}
}

//Раскрытие карточек=======================
const cards = document.querySelectorAll('.card-questions__item');

cards.forEach((card) => {
    if(card) {
      card.addEventListener('click', () => {
        card.classList.toggle('flipped');
      });
  };
});

//Accordion=================================
const itemsAc = document.querySelectorAll('.card-questions__item');
const itemHeader = document.querySelectorAll('.card-questions__item-before');
const itemPanel = document.querySelectorAll('.card-questions__item-after');
const itemBtn = document.querySelectorAll('.accordion__btn');


function addClass(items, newClass) {
	cl = newClass;

	items.forEach((item) => {
		item.classList.toggle(cl);
	}); 
}

function accordionInit() {
	if (document.body.clientWidth <= 768) {	
		addClass(itemsAc, 'ac');
		addClass(itemHeader, 'ac-header');
		addClass(itemPanel, 'ac-panel');
		addClass(itemBtn, 'ac-trigger');

		new Accordion('.accordion');
	} 
}

accordionInit();