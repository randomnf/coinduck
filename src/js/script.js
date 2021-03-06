/*hamburger menu*/

var subscribeInput = document.getElementById("subscribe-email"),
	menuBtn = document.getElementById("toggle-menu-btn"),
	closeMenuBtn = document.getElementById("close-menu-btn"),
	menuWrap = document.querySelector(".menu-wrap"),
	socialBlock = document.getElementById("social-links"),
	linkWithSubMenu = document.querySelector(".main-menu-link:not(:last-child)"),
	subMenu = document.querySelector(".main-sub-menu"),
	container = document.querySelector(".navigation-container > .content-wrap"),
	containerWidth = getContainerWidth(container);

menuBtn.addEventListener("click",function(){
	menuWrap.classList.add("menu-mobile-opened");
	socialBlock.classList.add("menu-mobile-opened");
});

closeMenuBtn.addEventListener("click",function(){
	menuWrap.classList.remove("menu-mobile-opened");
	socialBlock.classList.remove("menu-mobile-opened");
});

$(document).mouseup(function(e){
	var menu = $(".menu-inner");
	if(!menu.is(e.target) && menu.has(e.target).length === 0)
		closeMenuBtn.click();
});

linkWithSubMenu.addEventListener("click",function(e){
	if(containerWidth<=767){
		e.preventDefault();
		subMenu.classList.toggle("sub-menu-opened");
		this.classList.toggle("sub-menu-opened");
	}
});

$(window).bind('scroll', function () {
	if (($(window).scrollTop() > 120) && (containerWidth>767)) {
		$('.navigation-container').addClass('fixed-menu');
		document.querySelector(".page-header + .content-wrap").style.marginTop=document.querySelector(".navigation-container").scrollHeight+"px";
	} else {
		$('.navigation-container').removeClass('fixed-menu');
		document.querySelector(".page-header + .content-wrap").style.marginTop=0+"px";
	}
});

/*site search*/

﻿var searchButton = document.querySelector(".site-search-btn"),
	btnWrap = document.querySelector(".search-btn-wrap"),
	inputIsOpened = 0,
	input = document.getElementById("site-search"),
	inputWrap = document.querySelector(".search-input-wrap"),
	searchForm = document.querySelector(".site-search-form"),
	header = document.querySelector(".page-header"),
	width = getSSInputWidth(input,container),
	mobileWidth = getMobileWidth(input,container);

searchButton.addEventListener("click",function(evt){
	evt.preventDefault();

	if(inputIsOpened){
		if(input.value)
			searchForm.submit();
		else{
			if(containerWidth<=767){
				header.classList.remove("mobile-search");
				searchForm.classList.remove("mobile-search");
				input.classList.remove("mobile-search");
				inputWrap.classList.remove("mobile-search");
				inputWrap.style.left = 0;
			}
			else{
				inputWrap.style.width = 0;
				btnWrap.classList.remove("search-opened");
				btnWrap.style.left = 0;
			}
			inputIsOpened = 0;
			input.setAttribute("tabindex","-1");
			input.classList.add("site-input-hidden");
			input.style.width = 0;
			inputWrap.classList.add("site-input-hidden");
			inputWrap.style.width = 0;
			searchButton.focus();
		}
	}
	else{
		if(containerWidth<=767){
			header.classList.add("mobile-search");
			searchForm.classList.add("mobile-search");
			input.classList.add("mobile-search");
			input.style.width = (mobileWidth-10)+"px";
			inputWrap.classList.add("mobile-search");
			inputWrap.style.width = (mobileWidth)+"px";
			inputWrap.style.left = (-mobileWidth)+"px";
		}
		else{

			input.style.width = (width-10)+"px";
			inputWrap.style.width = width+"px";
			btnWrap.classList.add("search-opened");
			btnWrap.style.left = width+"px";
		}
		input.classList.remove("site-input-hidden");
		input.setAttribute("tabindex","0");
		input.focus();
		inputWrap.classList.remove("site-input-hidden");
		inputIsOpened = 1;
	}
});


$(document).mouseup(function (e){
	var searchFormQ = $(".site-search-form");
	if (!searchFormQ.is(e.target) && searchFormQ.has(e.target).length === 0){
		if(containerWidth<=767){
			header.classList.remove("mobile-search");
			searchForm.classList.remove("mobile-search");
			input.classList.remove("mobile-search");
			inputWrap.classList.remove("mobile-search");
			inputWrap.style.left = 0;
		}
		else{
			inputWrap.style.width = 0;
			btnWrap.classList.remove("search-opened");
			btnWrap.style.left = 0;
		}
		inputIsOpened = 0;
		input.setAttribute("tabindex","-1");
		input.classList.add("site-input-hidden");
		input.style.width = 0;
		inputWrap.classList.add("site-input-hidden");
		inputWrap.style.width = 0;
		if(document.activeElement == input)
			input.blur();
	}
});

$(window).resize(function(){
	width = getSSInputWidth(input,container);
	containerWidth = getContainerWidth(container);
	mobileWidth = getMobileWidth(input,container);
	if(containerWidth<=767)
		subscribeInput.setAttribute("placeholder","ваш e-mail");
	else
		subscribeInput.setAttribute("placeholder","введите ваш e-mail");
});

function getCoord(elem){
	var box = elem.getBoundingClientRect();

	return{
		top: box.top + pageYOffset,
		left: box.left + pageXOffset,
		bottom: box.bottom + pageYOffset,
		right: box.right + pageXOffset
	};
};

function getSSInputWidth(input,container){
	var inputX = getCoord(input).left;
	var containerRX = getCoord(container).right;

	return (containerRX-inputX-searchButton.width-6); //6 - .content-wrap padding-right
}

function getMobileWidth(input,container){
	var inputX = getCoord(input).left;
	var containerCoords = getCoord(container);

	return (inputX-containerCoords.left-6); //6 - .content-wrap padding-right
}

function getContainerWidth(container){
	var coords = getCoord(container);

	return (coords.right - coords.left);
}

/*add event form*/

/* var eventForm = document.querySelector(".add-event-popup"),
	closeForm = document.querySelector(".close-popup-form");

document.querySelector(".add-event-link").addEventListener("click",(function(e){
	e.preventDefault();
	eventForm.classList.add("opened");
}));

closeForm.addEventListener("click",(function(e){
	e.preventDefault();
	eventForm.classList.remove("opened");
}));

$(document).mouseup(function(e){
	var popupSection = $(".add-event-form-popup");
	if(!popupSection.is(e.target) && popupSection.has(e.target).length === 0)
		closeForm.click();
}); */