AOS.init({
	duration: 800,
	easing: 'ease',
	once: true,
	offset: 120
});

jQuery(function($) {
   
   'use strict';
   loader();
   languageSelector();
   siteMenuClone();
   mobileToggleClick();
   onePageNavigation();
   siteIstotope();
   portfolioItemClick();
   owlCarouselPlugin();
   floatingLabel();
   scrollWindow();
   counter();
   jarallaxPlugin();
   contactForm();
   stickyFillPlugin();
   animateReveal();

});

var siteIstotope = function() {
   var $container = $('#posts').isotope({
   itemSelector : '.item',
   isFitWidth: true
 });

 $(window).resize(function(){
   $container.isotope({
	 columnWidth: '.col-sm-3'
   });
 });
 
 $container.isotope({ filter: '*' });

 $('#filters').on( 'click', 'a', function(e) {
	 e.preventDefault();
   var filterValue = $(this).attr('data-filter');
   $container.isotope({ filter: filterValue });
   $('#filters a').removeClass('active');
   $(this).addClass('active');
 });

 $container.imagesLoaded()
 .progress( function() {
   $container.isotope('layout');
 })
 .done(function() {
	 $('.gsap-reveal-img').each(function() {
		   var html = $(this).html();
		   $(this).html('<div class="reveal-wrap"><span class="cover"></span><div class="reveal-content">'+html+'</div></div>');
	   });

	 var controller = new ScrollMagic.Controller();

	 var revealImg = $('.gsap-reveal-img');

	 if ( revealImg.length ) {
		 var i = 0;
		   revealImg.each(function() {

			   var cover = $(this).find('.cover'),
				   revealContent = $(this).find('.reveal-content'),
				   img = $(this).find('.reveal-content img');


			   var tl2 = new TimelineMax();


			   setTimeout(function() {

				   tl2
					   tl2.set(img, {  scale: '2.0', autoAlpha: 1, })
					   .to(cover, 1, { marginLeft: '0', ease:Expo.easeInOut, onComplete() {
						   tl2.set(revealContent, { autoAlpha: 1 });
						   tl2.to(cover, 1, { marginLeft: '102%', ease:Expo.easeInOut });
						   tl2.to(img, 2, { scale: '1.0', ease:Expo.easeOut }, '-=1.5');
					   } } )

			   }, i * 700);

			   

			   var scene = new ScrollMagic.Scene({
				   triggerElement: this,
				   duration: "0%",
				   reverse: false,
				   offset: "-300%",
			   })
			   .setTween(tl2)
			   .addTo(controller);

			   i++;

		   });
	   }
 })

 $('.js-filter').on('click', function(e) {
	 e.preventDefault();
	 $('#filters').toggleClass('active');
 });

}

var loader = function() {
   // Use only TweenMax for smooth animation
   setTimeout(function() {
       TweenMax.to('.loader-wrap', 1, { 
           autoAlpha: 0, 
           ease: Power4.easeInOut,
           onComplete: function() {
			   // Hide the element completely after animation
			   // $('.loader-wrap').css('display', 'none');
           }
       });
   }, 1000);
   
   // Remove the conflicting jQuery fadeOut
   // $(".loader-wrap").delay(400).fadeOut("slow");
}

// Language translations
const translations = {
  ro: {
	"menu": "Meniu",
	"nav.top": "Introducere",
	"nav.about": "Despre Mureș Carmeet",
	"nav.carmeets": "Car meet-uri",
	"nav.events": "Evenimente auto selecte",
	"nav.social": "Social media",
	"nav.contact": "Contact",
	"nav.menu-close": "Închide",
	"cover.header": "Meet-uri și evenimente auto private<br>în Târgu Mureș",
	"swipe-up": "Glisați în sus",
	"intro.header": "Introducere",
	"about.header": "Despre <span style=\"font-family: 'FerroRosso';\">Mureș Carmeet</span>",
	"about.info1": "Comunitatea <span style=\"font-family: 'FerroRosso';\">Mureș Carmeet</span> a luat naștere în 2023 la inițiativa formării unei comunități auto selecte în Târgu Mureș.",
	"about.info2": "Din 2023 până în prezent meet-urile sunt organizate periodic la un interval de 2 - 3 săptămâni în timpul sezonului cald, iar o dată pe lună în timpul sezonului rece, în diferite locații din oraș.",
	"meets.header": "Despre meet-uri",
	"meets.info": "Meet-urile organizate în comunitatea Mureș Carmeet sunt întâlniri auto private organizate în diferite locații din Târgu Mureș. Acestea sunt ocazii excelente pentru pasionații auto de a se întâlni, a cunoaște oameni noi, a socializa și a împărtăși pasiunea pentru automobile.",
	"events.header": "Evenimente auto selecte",
	"collab.header": "Colaboratori evenimente auto selecte",
	"events.info": "Evenimentele selecte sunt organizate doar în timpul sezonului cald primăvară-toamnă, la una din locațiile colaboratorilor noștri.",
	"event.royal": "Eveniment Royal Car Wash",
	"socials.header": "Metode oficiale de contact",
	"socials.info": "Pentru a afla detaliile meet-urilor, precum locația, data și ora meet-ului, există 2 metode:",
	"socials.info1": "1. Urmărirea paginii oficiale <span style=\"font-family:'FerroRosso';\">Mureș Carmeet</span> de pe platforma preferată de socializare din cele de mai jos (este necesară trimiterea unui mesaj privat cu modelul mașinii pentru a fi adăugat în lista de Close Friends).",
	"socials.info2": "2. Pentru cei care nu folosesc social media, prin completarea formularului din secțiunea de <a href='#contact-section' class=\"smoothscroll\" style=\"font-family:'SerpentineSansICG-BoldOblique';\">Contact</a>, pentru a primii detaliile fiecărui meet printr-un mesaj pe WhatsApp, Facebook Messenger sau SMS.",
	"social.bio1": "Meet-uri și evenimente auto locale private,",
	"social.bio2": "organizate în Târgu Mureș, România📍",
	"social.bio3": "începând din 2023",
	"social.insta-info": "Pe <span class=\"bold\"><span class=\"wrap-icon icon-instagram\"></span>&emsp14;Instagram</span>, meet-urile sunt anunțate la <span class=\"bold\">Private Story</span> pentru cei care urmăresc pagina <span style=\"font-family:'FerroRosso';\">Mureș Carmeet</span> și sunt incluși în lista de <span class=\"bold\">Close Friends/Prieteni apropiați</span>.",
	"social.fb-info": "Pe <span class=\"bold\"><span class=\"wrap-icon icon-facebook-square\"></span>&emsp14;Facebook</span>, meet-urile sunt anunțate pe <span class=\"bold\">Story Privat</span> pentru cei adăugați în lista de <span class=\"bold\">Prieteni apropiați.</span>",
	"wapp.info": "În cazul în care nu folosiți aplicațiile <span class=\"bold\"><span class=\"wrap-icon icon-instagram\"></span>&emsp14;Instagram</span> sau <span class=\"bold\"> <span class=\"wrap-icon icon-facebook-square\"></span>&emsp14;Facebook</span>, ne puteți contacta pe <span class=\"bold\"><span class=\"wrap-icon icon-whatsapp\"></span>&emsp14;WhatsApp</span> pe butonul de mai sus cu un mesaj care să conțină modelul mașinii sau la completarea formularului de contact de mai jos, veți primi pe <span class=\"bold\">WhatsApp, Facebook Messenger sau prin SMS</span> detaliile despre fiecare meet precum  locația, data și ora.",
	"contact.header": "Contact",
	"contact.info": "Pentru a primii detaliile fiecărui meet sau eveniment, precum locația, data și ora, este necesar să completați fie prenumele sau porecla, modelul mașinii și metoda de contact preferată din cele de mai jos:",
	"form.name": "Prenume <span style=\"text-transform:lowercase;\">sau</span> Poreclă*",
	"form.car-model": "Modelul Mașinii<span class='bold'>*</span>",
	"form.whatsapp": "WhatsApp &nbsp;|&nbsp; Telefon",
	"form.message": "Mesaj... <span style='text-transform:capitalize;'>(Opțional)</span>",
	"form.important": "Important: Este necesar să completați toate câmpurile marcate cu asterisc <span class='bold'>*</span>.",
	"form.info": "Datele completate în formularul de mai sus sunt confidențiale și nu vor fi redistribuite, vândute sau postate în altă parte.",
	"send.button": "Trimite &nbsp;<span class=\"icon-send2\"></span>",
	// ...add all other keys for RO
  },
  en: {
	"menu": "Menu",
	"nav.top": "Introduction",
	"nav.about": "About Mures Carmeet",
	"nav.carmeets": "Car meets",
	"nav.events": "Select Car events",
	"nav.social": "Social media",
	"nav.contact": "Contact",
	"nav.menu-close": "Close",
	"cover.header": "Private local car meets and events<br>in Targu Mures",
	"swipe-up": "Swipe up",
	"intro.header": "Introduction",
	"about.header": "About <span style=\"font-family: 'FerroRosso';\">Mures Carmeet</span>",
	"about.info1": "The <span style=\"font-family: 'FerroRosso';\">Mures Carmeet</span> community was born in 2023 with the aim of creating a select car community in Targu Mures.",
	"about.info2": "Since 2023, the meets are organized periodically every 2 - 3 weeks during the warm season, and once a month during the cold season, in different locations around the city.",
	"meets.header": "About meets",
	"meets.info": "The meets organized by the Mures Carmeet community are private car meets organized in different locations in Targu Mureș. They are great opportunities for car enthusiasts to meet new people, socialize, and share their passion for cars.",
	"events.header": "Select car events",
	"collab.header": "Private car events collaborators",
	"events.info": "The select car events are organized only during the warm season spring-autumn, at one of our collaborators' locations.",
	"event.royal": "Royal Car Wash event",
	"socials.header": "Official contact methods",
	"socials.info": "To find out the details of the meets, such as the location, date and time of the meet, there are 2 methods:",
	"socials.info1": "1. Following the official <span style=\"font-family:'FerroRosso';\">Mures Carmeet</span> page on your preferred social media platform from the ones below (it's required to send us a private message with your car model to be added to the Close Friends list)",
	"socials.info2": "2. For those who do not use social media, by filling out the form in the <a href='#contact-section' class=\"smoothscroll\" style=\"font-family:'SerpentineSansICG-BoldOblique';\">Contact</a> section, you will receive the details of each meet via a message on WhatsApp, Facebook Messenger or SMS.",
	"social.bio1": "Private local car meets and events,",
	"social.bio2": "based in Targu Mures, Romania📍",
	"social.bio3": "since 2023",
	"social.insta-info": "On <span class=\"bold\"><span class=\"wrap-icon icon-instagram\"></span>&emsp14;Instagram</span>, the meets are announced in the <span class=\"bold\">Private Story</span> for those who follow the <span style=\"font-family:'FerroRosso';\">Mures Carmeet</span> page and are included in the <span class=\"bold\">Close Friends</span> list.",
	"social.fb-info": "On <span class=\"bold\"><span class=\"wrap-icon icon-facebook-square\"></span>&emsp14;Facebook</span>, the meets are announced on <span class=\"bold\">Private Story</span> for those who are included in the <span class=\"bold\">Close Friends list.</span>",
	"wapp.info": "In case you do not use the <span class=\"bold\"><span class=\"wrap-icon icon-instagram\"></span> Instagram</span> or <span class=\"bold\"> <span class=\"wrap-icon icon-facebook-square\"></span> Facebook</span> apps, you can contact us on <span class=\"bold\"><span class=\"wrap-icon icon-whatsapp\"></span>&emsp14;WhatsApp</span> by pressing the button above with a message containing your car model or by filling out the contact form below, you will receive the details about each meet such as location, date and timeon <span class=\"bold\">WhatsApp, Facebook Messenger or via SMS.</span>",
	"contact.header": "Contact",
	"contact.info": "To receive the details of each meet or event like the location, date and time, please provide your first name or alias, car model and preferred contact method from the ones listed below:",
	"form.name": "First Name <span style=\"text-transform:lowercase;\">or</span> Alias*",
	"form.car-model": "Car Model*",
	"form.whatsapp": "WhatsApp &nbsp;|&nbsp; Phone",
	"form.message": "Message... <span style='text-transform:capitalize;'>(Optional)</span>",
	"form.important": "Important: It is required to fill in all fields marked with asterisk <span class='bold'>*</span>.",
	"form.info": "All data completed in the form above is confidential and wont be redistributed, sold or posted anywhere else.",
	"send.button": "Send &nbsp;<span class=\"icon-send2\"></span>",
	// ...add all other keys for EN
  },
  hu: {
	"menu": "Menü",
	"nav.top": "Bevezetés",
	"nav.about": "Rólunk Mureș Carmeet",
	"nav.carmeets": "Autós találkozók",
	"nav.events": "Autós események",
	"nav.social": "Közösségi média",
	"nav.contact": "Kapcsolat",
	"nav.menu-close": "Bezárás",
	"cover.header": "Privát autós találkozók és események<br>Marosvásárhely-ben",
	"swipe-up": "Görgesd felfelé",
	"intro.header": "Bevezetés",
	"about.header": "Rólunk <span style=\"font-family: 'FerroRosso';\">Mureș Carmeet</span>",
	"about.info1": "A <span style=\"font-family: 'FerroRosso';\">Mureș Carmeet</span> közösség 2023-ban alakult azzal a céllal, hogy egy kiválasztott autós közösséget hozzon létre Marosvásárhely-ben.",
	"about.info2": "2023 óta a találkozókat időszakosan, 2-3 hetente szervezik a meleg évszakban, és havonta egyszer a hideg évszakban, a város különböző helyszínein.",
	"meets.header": "Autós találkozók",
	"meets.info": "A Mureș Carmeet közösség által szervezett találkozók privát autós találkozók, amelyeket Marosvásárhely különböző helyszínein szerveznek. Kiváló lehetőséget kínálnak az autórajongók számára, hogy új emberekkel találkozzanak, szocializálódjanak és megosszák szenvedélyüket az autók iránt.",
	"events.header": "Kiválasztott autós események",
	"collab.header": "Privát autós események együttműködők",
	"events.info": "A kiválasztott autós eseményeket csak a meleg évszakban szervezik tavasz-ősz, az együttműködőink egyik helyszínén.",
	"event.royal": "Royal Car Wash esemény",
	"socials.header": "Hivatalos kapcsolattartási módok",
	"socials.info": "A találkozók részleteinek, például a helyszín, dátum és idő megismeréséhez két módszer létezik:",
	"socials.info1": "1. Kövesd a hivatalos <span style=\"font-family:'FerroRosso';\">Mureș Carmeet</span> oldalt a kedvenc közösségi média platformodon az alábbiak közül (szükséges, hogy küldj nekünk egy privát üzenetet az autód modelljével, hogy felvegyünk a Close Friends listára)",
	"socials.info2": "2. Azok számára, akik nem használják a közösségi médiát, a <a href='#contact-section' class=\"smoothscroll\" style=\"font-family:'SerpentineSansICG-BoldOblique';\">Kapcsolat</a> szakaszban található űrlap kitöltésével megkapod a találkozók részleteit egy üzenetben a WhatsApp, Facebook Messenger vagy SMS.",
	"social.bio1": "Privát helyi autós találkozók és események,",
	"social.bio2": "Marosvásárhely-ben, Romániában📍",
	"social.bio3": "2023 óta",
	"social.insta-info": "Az <span class=\"bold\"><span class=\"wrap-icon icon-instagram\"></span>&emsp14;Instagram</span> platformon a találkozókat a <span class=\"bold\">Privát Story-ban</span> jelentik be azok számára, akik követik a <span style=\"font-family:'FerroRosso';\">Mureș Carmeet</span> oldalt és szerepelnek a <span class=\"bold\">Közeli barátok listán.</span>",
	"social.fb-info": "A <span class=\"bold\"><span class=\"wrap-icon icon-facebook-square\"></span>&emsp14;Facebook</span> platformon a találkozókat a <span class=\"bold\">Privát Story-ban</span> jelentik be azok számára, akik szerepelnek a <span class=\"bold\">Közeli barátok listán.</span>",
	"wapp.info": "Abban az esetben, ha nem használod az <span class=\"bold\"><span class=\"wrap-icon icon-instagram\"></span> Instagram</span> vagy a <span class=\"bold\"> <span class=\"wrap-icon icon-facebook-square\"></span> Facebook</span> alkalmazásokat, kapcsolatba léphetsz velünk a <span class=\"bold\"><span class=\"wrap-icon icon-whatsapp\"></span>&emsp14;WhatsApp</span> alkalmazáson keresztül a fenti gombra kattintva egy üzenettel, amely tartalmazza az autód modelljét, vagy kitöltheted az alábbi kapcsolatfelvételi űrlapot, és megkapod a találkozók részleteit, például a helyszínt, dátumot és időt a <span class=\"bold\">WhatsApp-on, Facebook Messenger-en vagy SMS-ben.</span>",
	"contact.header": "Kapcsolat",
	"contact.info": "A találkozók vagy események részleteinek, például a helyszín, dátum és idő megismeréséhez kérjük, add meg keresztneved vagy álneved, autód modelljét és a preferált kapcsolattartási módot az alábbiak közül:",
	"form.name": "Keresztnév <span style=\"text-transform:lowercase;\">vagy</span> Álnév*",
	"form.car-model": "Autó Típusa*",
	"form.whatsapp": "WhatsApp &nbsp;|&nbsp; Telefon",
	"form.message": "Üzenet... <span style='text-transform:capitalize;'>(Opcionális)</span>",
	"form.important": "Fontos: Kérjük, töltsd ki az összes csillag <span class='bold'>*</span>-gal jelölt mezőt.",
	"form.info": "A fenti űrlapban megadott adatok bizalmasak, és nem kerülnek újra terjesztésre, eladásra vagy máshol közzétételre.",
	"send.button": "Küldés &nbsp;<span class=\"icon-send2\"></span>",
	// ...add all other keys for HU
  }
};

/**
 * Sets the website language and updates all elements with translations.
 * @param {string} lang - The language code to set (e.g., 'ro', 'en', 'hu').
 * Side effects: Updates localStorage, changes document lang attribute, and modifies DOM elements with [data-i18n].
 */
function setLanguage(lang) {
    if (!translations[lang]) {
        console.warn(`Language '${lang}' not supported`);
        return;
    }
    localStorage.setItem('selectedLang', lang);
    document.documentElement.setAttribute('lang', lang);
    
    // Remove existing GSAP covers before updating content
    $('.gsap-reveal .cover').remove();
    
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
        } else {
            console.warn(`Missing translation for key: '${key}' in language: '${lang}'`);
            el.innerHTML = `Translation missing: ${key}`;
        }
    });
    
    // Re-initialize GSAP animations after content update
    setTimeout(function() {
        animateReveal();
        // Refresh AOS as well in case some elements need it
        AOS.refresh();
    }, 100);
}

// On page load, check if language is already selected
window.addEventListener('DOMContentLoaded', function() {
	let lang = localStorage.getItem('selectedLang');
	if (lang && translations[lang]) {
		// Language already selected, apply it and fade out overlay
		setLanguageAndUpdateNav(lang);
		$("#preloader-overlay").fadeOut(1000);
	} else {
		// First time visit, fade in language selection overlay
		$("#preloader-overlay").fadeIn(500);
	}
});

// Update the languageSelector function
function languageSelector() {
    document.querySelectorAll('.lang-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            const lang = btn.dataset.lang;
            if (lang && translations[lang]) {
                setLanguageAndUpdateNav(lang);
                // Fade out the overlay smoothly
                $("#preloader-overlay").fadeOut(500);
            }
        });
    });
}

// Update the nav language button click handler
document.addEventListener("DOMContentLoaded", function() {
    updateNavLangSelector();
    const overlay = document.getElementById("preloader-overlay");
    const langBtns = overlay.querySelectorAll('.lang-btn');
    
    document.getElementById("current-lang-btn").addEventListener("click", function(e) {
        e.preventDefault();
        
        // Show overlay with fade
        $(overlay).fadeIn(500);
        
        // Reset button positions and animate them in
        TweenMax.set(langBtns, { z: 50, opacity: 0 });
        
        // Animate buttons in with stagger
        TweenMax.staggerTo(langBtns, 0.8, {
            y: 0,
            opacity: 1,
            ease: Power3.easeOut,
            delay: 0.3
        }, 0.2);
    });
});

// Update the nav language button click handler
document.addEventListener("DOMContentLoaded", function() {
    updateNavLangSelector();
    const overlay = document.getElementById("preloader-overlay");
    document.getElementById("current-lang-btn").addEventListener("click", function(e) {
        e.preventDefault();
        // Fade in the overlay smoothly
        $(overlay).fadeIn(500);
    });
});

function updateNavLangSelector() {
	const lang = localStorage.getItem('selectedLang');
	if (!lang) return; // Don't update if no language selected yet
	
	const flagMap = {
		ro: "images/Romanian.png",
		en: "images/English.png",
		hu: "images/Magyar.png"
	};
	const flag = flagMap[lang];
	if (flag) {
		document.getElementById("current-lang-flag").src = flag;
	}
}

// Show overlay when nav language button is pressed
document.addEventListener("DOMContentLoaded", function() {
	updateNavLangSelector();
	document.getElementById("current-lang-btn").addEventListener("click", function(e) {
		e.preventDefault();
		document.getElementById("preloader-overlay").style.display = "flex";
	});
});

// Wrapper function to extend setLanguage behavior
function setLanguageAndUpdateNav(lang) {
	setLanguage(lang);
	updateNavLangSelector();
}

// Move the following block into siteMenuClone function for proper initialization
var siteMenuClone = function() {
  $('.js-clone-nav').each(function() {
	var $this = $(this);
	$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-inner');
  });

//   var counter = 0;
//   $('.site-mobile-menu .has-children').each(function(){
// 	var $this = $(this);

// 	$this.prepend('<span class="arrow-collapse collapsed">');

// 	$this.find('.arrow-collapse').attr({
// 	  'data-toggle' : 'collapse',
// 	  'data-target' : '#collapseItem' + counter,
// 	});

// 	$this.find('> ul').attr({
// 	  'class' : 'collapse',
// 	  'id' : 'collapseItem' + counter,
// 	});

// 	counter++;
//   });

  $('body').on('click', '.arrow-collapse', function(e) {
	var $this = $(this);
	if ( $this.closest('li').find('.collapse').hasClass('show') ) {
	  $this.removeClass('active');
	} else {
	  $this.addClass('active');
	}
	e.preventDefault();  
  });

  $(window).resize(function() {
	var $this = $(this),
		w = $this.width();

	if ( w > 768 ) {
	  if ( $('body').hasClass('offcanvas') ) {
		$('body').removeClass('offcanvas');
	  }
	}
  });

  $('.js-burger-toggle-menu').click(function(e){
	e.preventDefault();
	if ( $('body').hasClass('offcanvas') ) {
	  $('body').removeClass('offcanvas');
	  $('.js-burger-toggle-menu').removeClass('open');
	} else {
	  $('body').addClass('offcanvas');	
	  $('.js-burger-toggle-menu').addClass('open');
	}
  });
};




// var siteIstotope = function() {


	 
   
// }

var owlCarouselPlugin = function() {

   $('.testimonial-slider').owlCarousel({
   center: false,
   items: 1,
   loop: true,
   stagePadding: 20,
	 margin: 10,
   smartSpeed: 2000,
   autoplay: true,
   autoplayHoverPause: true,
   dots: true,
   nav: true,
   navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">'],

   responsive:{
	   400:{
		 stagePadding: 20,
				 margin: 10,
	   },
	   600:{
		 stagePadding: 100,
				 margin: 50,
	   }
   }
   });
   owlSingleSlider();

   if ( $('.logo-slider').length ) {

	   $('.logo-slider').owlCarousel({
		   center: false,
	   loop: true,
	   stagePadding: 0,
	   margin: 0,
	   smartSpeed: 1000,
	   autoplay: true,
	   autoplayHoverPause: true,
	   dots: false,
	   nav: false,
	   responsive:{
		   400:{
			 items: 2
		   },
		   768:{
			   items: 3
		   },
		   1000:{
			   items: 5
		   }
	   }
	  });
   }

};

var owlSingleSlider = function () {
   if ( $( '.single-slider' ).length ) {
	   $('.single-slider').owlCarousel({
	   center: false,
	   items: 1,
	   loop: true,
	   stagePadding: 0,
	   margin: 0,
	   smartSpeed: 1500,
	   autoplay: true,
	   autoplayHoverPause: true,
	   dots: true,
	   nav: true,
	   navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">'],

	   responsive:{
		 400:{
		   stagePadding: 0,
				   margin: 0,
		 },
		 600:{
		   stagePadding: 0,
				   margin: 0,
		 }
	   }
	   });
   }
}

var floatingLabel = function () {
   $('.form-control').on('input', function() {
	 var $field = $(this).closest('.form-group');
	 if (this.value) {
	   $field.addClass('field--not-empty');
	 } else {
	   $field.removeClass('field--not-empty');
	 }
   });
};



// scroll
var scrollWindow = function() {
   var lastScrollTop = 0;
   $(window).scroll(function(event){
	   var $w = $(this),
			   st = $w.scrollTop(),
			   navbar = $('.site-nav');
			   // sd = $('.js-scroll-wrap');

	   if (st > 150) {
		   if ( !navbar.hasClass('scrolled') ) {
			   navbar.addClass('scrolled');	
		   }
	   } 
	   if (st < 150) {
		   if ( navbar.hasClass('scrolled') ) {
			   navbar.removeClass('scrolled sleep');
		   }
	   } 
	   if ( st > 350 ) {
		   if ( !navbar.hasClass('awake') ) {
			   navbar.addClass('awake');	
		   } 

		   // hide / show on scroll
		   if (st > lastScrollTop){
		 // downscroll code
		 navbar.removeClass('awake');	
		 navbar.addClass('sleep');	
		  } else {
		 // upscroll code
		 navbar.addClass('awake');	
		  }
		  lastScrollTop = st;
		   

	   }
	   if ( st < 350 ) {
		   if ( navbar.hasClass('awake') ) {
			   navbar.removeClass('awake');
			   navbar.addClass('sleep');
		   }
	   }

  

   });

};


var counter = function() {
   
   $('.section-counter').waypoint( function( direction ) {

	   if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

		   var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
		   $(this.element).find('.number-counter').each(function(){
			   var $this = $(this),
				   num = $this.data('number');
			   $this.animateNumber(
				 {
				   number: num,
				   numberStep: comma_separator_number_step
				 }, 
				 {
					 easing: 'swing',
				   duration: 3000
				 }
			   );
		   });
		   
	   }

   } , { offset: '95%' } );

};


var mobileToggleClick = function() {
   $('.js-menu-toggle').click(function(e) {

	   e.preventDefault();

	 if ( $('body').hasClass('offcanvas') ) {
		 $('body').removeClass('offcanvas');
		 $('.js-menu-toggle').removeClass('active');
		 if ( $('.js-burger-toggle-menu').length ) {
			 $('.js-burger-toggle-menu').removeClass('open');
		 }
	 } else {
		 $('body').addClass('offcanvas');	
		 $('.js-menu-toggle').addClass('active');
		 if ( $('.js-burger-toggle-menu').length ) {
			 $('.js-burger-toggle-menu').addClass('open');
		 }
	 }


 });

 // click outisde offcanvas
   $(document).mouseup(function(e) {
   var container = $(".site-mobile-menu");
   if (!container.is(e.target) && container.has(e.target).length === 0) {
	 if ( $('body').hasClass('offcanvas') ) {
			   $('body').removeClass('offcanvas');
			   $('body').find('.js-menu-toggle').removeClass('active');

			   $('body').find('.js-burger-toggle-menu').removeClass('open');
		   }
   }
   }); 
};



// navigation
var onePageNavigation = function() {
 var navToggler = $('.site-menu-toggle');
	$("body").on("click", ".site-nav .site-nav-ul li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a[href^='#']", function(e) {
   
   e.preventDefault();

   var $body = $('body');
   if ( $body.hasClass('offcanvas')  ) {
	   $body.removeClass('offcanvas');
	   $('body').find('.js-burger-toggle-menu').removeClass('open');
   }

   var hash = this.hash;
   
	 $('html, body').animate({
	   scrollTop: $(hash).offset().top
	 }, 1000, 'easeInOutExpo');

 });

};


// load ajax page
var portfolioItemClick = function() {
   $('.ajax-load-page').on('click', function(e) {
	   
	   var id = $(this).data('id'),
		   href = $(this).attr('href');

	   if ( $('#portfolio-single-holder > div').length ) {
		   $('#portfolio-single-holder > div').remove();
	   } 

	   TweenMax.to('.loader-portfolio-wrap', 1, { top: '-50px', autoAlpha: 1, display: 'block', ease: Power4.easeOut });

	   $('html, body').animate({
	   scrollTop: $('#portfolio-section').offset().top - 50
	   }, 700, 'easeInOutExpo', function() {
	   });
	   
	   setTimeout(function(){
		   loadPortfolioSinglePage(id, href);
	   }, 100);

	   e.preventDefault();

   });

   // Close
   $('body').on('click', '.js-close-portfolio', function() {

	   setTimeout(function(){
		   $('html, body').animate({
		   scrollTop: $('#portfolio-section').offset().top - 50
		   }, 700, 'easeInOutExpo');
	   }, 200);

	   TweenMax.set('.portfolio-wrapper', { visibility: 'visible', height: 'auto' });
	   TweenMax.to('.portfolio-single-inner', 1, { marginTop: '50px', opacity: 0,  display: 'none', onComplete() {
		   TweenMax.to('.portfolio-wrapper', 1, { marginTop: '0px', autoAlpha: 1, position: 'relative' });

	   } });
	   
   });
};

$(document).ajaxStop(function(){
   setTimeout(function(){
	   TweenMax.to('.loader-portfolio-wrap', 1, { top: '0px', autoAlpha: 0, ease: Power4.easeOut });	
   }, 400);
});

var loadPortfolioSinglePage = function(id, href) {
   $.ajax({
	   url: href,
	   type: 'GET',
	   success: function(html) {

		   TweenMax.to('.portfolio-wrapper', 1, { marginTop: '50px', autoAlpha: 0, visibility: 'hidden', onComplete() {
			   TweenMax.set('.portfolio-wrapper', { height: 0 });
		   } })

		   var pSingleHolder = $('#portfolio-single-holder');
		   
		   var getHTMLContent = $(html).find('.portfolio-single-wrap').html();

		   pSingleHolder.append(
			   '<div id="portfolio-single-'+id+
			   '" class="portfolio-single-inner"><span class="close-portfolio js-close-portfolio d-flex align-items-center"><span class="close-portfolio-label">Back to Portfolio</span><span class="icon-close2 wrap-icon-close"></span></span>' + getHTMLContent + '</div>'
		   );

		   setTimeout(function() {
			   owlSingleSlider();
		   }, 10);

		   setTimeout(function() {
			   TweenMax.set('.portfolio-single-inner', { marginTop: '100px', autoAlpha: 0, display: 'none' });
			   TweenMax.to('.portfolio-single-inner', .5, { marginTop: '0px', autoAlpha: 1, display: 'block', onComplete() {

				   TweenMax.to('.loader-portfolio-wrap', 1, { top: '0px', autoAlpha: 0, ease: Power4.easeOut });	
			   } });
		   }, 700 );
	   }
   });

   return false;

};

var jarallaxPlugin = function() {
   $('.jarallax').jarallax({
   speed: 0.2,
   type: 'scroll-opacity'
   });
   jarallax(document.querySelectorAll('.jarallax-video'), {
   speed: 0.2,
   videoSrc: 'mp4:images/vid1.mp4',
   videoStartTime: 0,
   videoEndTime: 70,
   });
};

var contactForm = function() {
   if ($('#contactForm').length > 0 ) {
	   $( "#contactForm" ).validate( {
		   rules: {
			   name: "required",
			   email: {
			   	email: true
			   }
		   },
		   messages: {
			   name: "Vă rugăm introduceți un nume. <br> Please enter a name.",
			   email: "Please enter a valid email address"
		   },
		   errorElement: 'span',
		   errorLabelContainer: '.form-error',
		   /* submit via ajax */
		   submitHandler: function(form) {		
			   var $submit = $('.submitting'),
				   waitText = 'Submitting...';

			   $.ajax({   	
				 type: "POST",
				 url: "php/send-email.php",
				 data: $(form).serialize(),

				 beforeSend: function() { 
					 $submit.css('display', 'block').text(waitText);
				 },
				 success: function(msg) {
				  if (msg == 'OK') {
					  $('#form-message-warning').hide();
					   setTimeout(function(){
						  $('#contactForm').fadeOut();
					  }, 1000);
					   setTimeout(function(){
						  $('#form-message-success').fadeIn();   
					  }, 1400);
					  
				   } else {
					  $('#form-message-warning').html(msg);
					   $('#form-message-warning').fadeIn();
					   $submit.css('display', 'none');
				   }
				 },
				 error: function() {
					 $('#form-message-warning').html("Something went wrong. Please try again.");
					$('#form-message-warning').fadeIn();
					$submit.css('display', 'none');
				 }
			 });    		
			 }
		   
	   } );
   }
};

var stickyFillPlugin = function() {
   var elements = document.querySelectorAll('.sticky');
   Stickyfill.add(elements);
};

var animateReveal = function() {


   var controller = new ScrollMagic.Controller();
   
   var greveal = $('.gsap-reveal');

   // gsap reveal
   $('.gsap-reveal').each(function() {
	   $(this).append('<span class="cover"></span>');
   });
   if ( greveal.length ) {
	   var revealNum = 0;
	   greveal.each(function() {
		   var cover = $(this).find('.cover');

		   var tl = new TimelineMax();

		   setTimeout(function() {
			   tl
				   .fromTo(cover, 2, { skewX: 0 }, { xPercent: 101, transformOrigin: "0% 100%", ease:Expo.easeInOut })
		   }, revealNum * 0);
		   
		   var scene = new ScrollMagic.Scene({
			   triggerElement: this,
			   duration: "0%",
			   reverse: false,
			   offset: "-300%",
		   })
		   .setTween(tl)
		   .addTo(controller);

		   revealNum++;

	   });
   }

   // gsap reveal hero
   $('.gsap-reveal-hero').each(function() {
	   var html = $(this).html();
	   $(this).html('<span class="reveal-wrap"><span class="cover"></span><span class="reveal-content">'+html+'</span></span>');
   });
   var grevealhero = $('.gsap-reveal-hero');

   if ( grevealhero.length ) {
	   var heroNum = 0;
	   grevealhero.each(function() {

		   var cover = $(this).find('.cover'),
			   revealContent = $(this).find('.reveal-content');

		   var tl2 = new TimelineMax();

		   setTimeout(function() {

			   tl2
				   .to(cover, 1, { marginLeft: '0', ease:Expo.easeInOut, onComplete() {
					   tl2.set(revealContent, { x: 0 });
					   tl2.to(cover, 1, { marginLeft: '102%', ease:Expo.easeInOut });
				   } } )
		   }, heroNum * 0 );

		   var scene = new ScrollMagic.Scene({
			   triggerElement: this,
			   duration: "0%",
			   reverse: false,
			   offset: "-300%",
		   })
		   .setTween(tl2)
		   .addTo(controller);

		   heroNum++;
	   });
   }

}

