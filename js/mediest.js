(function ($) {
  "use strict";


  // Sllider
  function thmSwiperInit() {
    // swiper slider
    if ($(".thm-swiper__slider").length) {
      $(".thm-swiper__slider").each(function () {
        let elm = $(this);
        let options = elm.data('swiper-options');
        let thmSwiperSlider = new Swiper(elm, options);
      });
    }

  }

  function thmOwlInit() {
    // Initialize Owl Carousel sliders
    if ($(".thm-owl__carousel").length) {
        $(".thm-owl__carousel").each(function () {
            let elm = $(this);
            let options = elm.data('owl-options');

            // Force the "dots" option to false regardless of the provided data
            options = { ...options, dots: false };

            let thmOwlCarousel = elm.owlCarousel(options);
        });
    }

    // Custom Navigation for Owl Carousel sliders
   
}

if ($(".video-popup").length) {
  $(".video-popup").magnificPopup({
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: true,

    fixedContentPos: false
  });
}


  // Price Filter

  if ($(".tabs-box").length) {
    $(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
      e.preventDefault();
      var target = $($(this).attr("data-tab"));

      if ($(target).is(":visible")) {
        return false;
      } else {
        target
          .parents(".tabs-box")
          .find(".tab-buttons")
          .find(".tab-btn")
          .removeClass("active-btn");
        $(this).addClass("active-btn");
        target
          .parents(".tabs-box")
          .find(".tabs-content")
          .find(".tab")
          .fadeOut(0);
        target
          .parents(".tabs-box")
          .find(".tabs-content")
          .find(".tab")
          .removeClass("active-tab");
        $(target).fadeIn(300);
        $(target).addClass("active-tab");
      }
    });
  }


  //===Language switcher===
  function languageSwitcher() {

    if ($("#polyglot-language-options").length) {
      $('#polyglotLanguageSwitcher').polyglotLanguageSwitcher({
        effect: 'slide',
        animSpeed: 500,
        testMode: true,
        onChange: function (evt) {
          alert("The selected language is: " + evt.selectedItem);
        }

      });
    };
  }


  //Counter
  if ($(".count-box").length) {
    $(".count-box").appear(
      function () {
        var $t = $(this),
          n = $t.find(".count-text").attr("data-stop"),
          r = parseInt($t.find(".count-text").attr("data-speed"), 10);

        if (!$t.hasClass("counted")) {
          $t.addClass("counted");
          $({
            countNum: $t.find(".count-text").text()
          }).animate({
            countNum: n
          }, {
            duration: r,
            easing: "linear",
            step: function () {
              $t.find(".count-text").text(Math.floor(this.countNum));
            },
            complete: function () {
              $t.find(".count-text").text(this.countNum);
            }
          });
        }
      }, {
        accY: 0
      }
    );
  }

  // Accrodion start FAQ
  $(document).ready(function() {
    if ($(".accrodion-grp").length) {
      var accordionGrp = $(".accrodion-grp"); // Select all accordion groups
  
      accordionGrp.each(function() {
        var self = $(this); // Reference to the current accordion group
        var accordion = self.find(".accrodion"); // Find all accordion items in this group
  
        // Initially hide all accordion contents
        self.find(".accrodion .accrodion-content").hide();
  
        // Add single click handler to toggle the accordion
        accordion.each(function() {
          var accordionItem = $(this); // Cache the current accordion item
          var accordionTitle = accordionItem.find(".accrodion-title");
  
          // On single-click, toggle the content visibility
          accordionTitle.on("click", function() {
            // If the clicked item is already active, close it
            if (accordionItem.hasClass("active")) {
              accordionItem.removeClass("active").find(".accrodion-content").slideUp();
            } else {
              // Otherwise, open the clicked item and close others
              accordionItem.addClass("active").find(".accrodion-content").slideDown();
              // Close other accordion items
              self.find(".accrodion").not(accordionItem).removeClass("active").find(".accrodion-content").slideUp();
            }
          });
        });
      });
    }
  });
  if ($(".accrodion-grp-question").length) {
    var accrodionGrp = $(".accrodion-grp-question");
    accrodionGrp.each(function () {
      var accrodionName = $(this).data("grp-name");
      var Self = $(this);
      var accordion = Self.find(".accrodion-question");
      Self.addClass(accrodionName);
      Self.find(".accrodion-question .accrodion-content-question").hide();
      Self.find(".accrodion-question.active").find(".accrodion-content-question").show();
      accordion.each(function () {
        $(this)
          .find(".accrodion-title-question")
          .on("click", function () {
            if ($(this).parent().hasClass("active") === false) {
              $(".accrodion-grp-question." + accrodionName)
                .find(".accrodion-question")
                .removeClass("active");
              $(".accrodion-grp-question." + accrodionName)
                .find(".accrodion-question")
                .find(".accrodion-content-question")
                .slideUp();
              $(this).parent().addClass("active");
              $(this).parent().find(".accrodion-content-question").slideDown();
            }
          });
      });
    });
  }
 // Accrodion end

  // Features
  $('.features_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,  // Enable the dots
    arrows: false,

    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});


$('.features-team_slider').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 4000,
  dots: true,
  arrows: false,
  rows: 2, // ২ লাইন তৈরি করবে (৩টি উপরে, ৩টি নিচে)
  responsive: [
      {
          breakpoint: 1200,
          settings: {
              slidesToShow: 2,
          }
      },
      {
          breakpoint: 768,
          settings: {
              slidesToShow: 1,
          }
      }
  ]
});




  // custom coursor mouse
  if ($(".custom-cursor").length) {

    var cursor = document.querySelector('.custom-cursor__cursor');
    var cursorinner = document.querySelector('.custom-cursor__cursor-two');
    var a = document.querySelectorAll('a');

    document.addEventListener('mousemove', function (e) {
      var x = e.clientX;
      var y = e.clientY;
      cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
    });

    document.addEventListener('mousemove', function (e) {
      var x = e.clientX;
      var y = e.clientY;
      cursorinner.style.left = x + 'px';
      cursorinner.style.top = y + 'px';
    });

    document.addEventListener('mousedown', function () {
      cursor.classList.add('click');
      cursorinner.classList.add('custom-cursor__innerhover')
    });

    document.addEventListener('mouseup', function () {
      cursor.classList.remove('click')
      cursorinner.classList.remove('custom-cursor__innerhover')
    });

    a.forEach(item => {
      item.addEventListener('mouseover', () => {
        cursor.classList.add('custom-cursor__hover');
      });
      item.addEventListener('mouseleave', () => {
        cursor.classList.remove('custom-cursor__hover');
      });
    })
  }




  function dynamicCurrentMenuClass(selector) {
    let FileName = window.location.href.split("/").reverse()[0];

    selector.find("li").each(function () {
      let anchor = $(this).find("a");
      if ($(anchor).attr("href") == FileName) {
        $(this).addClass("current");
      }
    });
    // if any li has .current elmnt add class
    selector.children("li").each(function () {
      if ($(this).find(".current").length) {
        $(this).addClass("current");
      }
    });
    // if no file name return
    if ("" == FileName) {
      selector.find("li").eq(0).addClass("current");
    }
  }

  if ($(".main-menu__list").length) {
    // dynamic current class
    let mainNavUL = $(".main-menu__list");
    dynamicCurrentMenuClass(mainNavUL);
  }
  if ($(".service-details__sidebar-service-list").length) {
    // dynamic current class
    let mainNavUL = $(".service-details__sidebar-service-list");
    dynamicCurrentMenuClass(mainNavUL);
  }

  if ($(".main-menu__list").length && $(".mobile-nav__container").length) {
    let navContent = document.querySelector(".main-menu__list").outerHTML;
    let mobileNavContainer = document.querySelector(".mobile-nav__container");
    mobileNavContainer.innerHTML = navContent;
  }
  if ($(".sticky-header__content").length) {
    let navContent = document.querySelector(".main-menu").innerHTML;
    let mobileNavContainer = document.querySelector(".sticky-header__content");
    mobileNavContainer.innerHTML = navContent;
  }

  if ($(".mobile-nav__container .main-menu__list").length) {
    let dropdownAnchor = $(
      ".mobile-nav__container .main-menu__list .dropdown > a"
    );
    dropdownAnchor.each(function () {
      let self = $(this);
      let toggleBtn = document.createElement("BUTTON");
      toggleBtn.setAttribute("aria-label", "dropdown toggler");
      toggleBtn.innerHTML = "<i class='fa fa-angle-down'></i>";
      self.append(function () {
        return toggleBtn;
      });
      self.find("button").on("click", function (e) {
        e.preventDefault();
        let self = $(this);
        self.toggleClass("expanded");
        self.parent().toggleClass("expanded");
        self.parent().parent().children("ul").slideToggle();
      });
    });
  }

  if ($(".mobile-nav__toggler").length) {
    $(".mobile-nav__toggler").on("click", function (e) {
      e.preventDefault();
      $(".mobile-nav__wrapper").toggleClass("expanded");
      $("body").toggleClass("locked");
    });
  }

  if ($(".search-toggler").length) {
    $(".search-toggler").on("click", function (e) {
      e.preventDefault();
      $(".search-popup").toggleClass("active");
      $(".mobile-nav__wrapper").removeClass("expanded");
      $("body").toggleClass("locked");
    });
  }
  if ($(".wow").length) {
    var wow = new WOW({
      boxClass: "wow", // animated element css class (default is wow)
      animateClass: "animated", // animation css class (default is animated)
      mobile: true, // trigger animations on mobile devices (default is true)
      live: true // act on asynchronously loaded content (default is true)
    });
    wow.init();
  }


  // ===Portfolio===
  function projectMasonaryLayout() {
    if ($(".masonary-layout").length) {
      $(".masonary-layout").isotope({
        layoutMode: "masonry"
      });
    }
    if ($(".post-filter").length) {
      $(".post-filter li")
        .children(".filter-text")
        .on("click", function () {
          var Self = $(this);
          var selector = Self.parent().attr("data-filter");
          $(".post-filter li").removeClass("active");
          Self.parent().addClass("active");
          $(".filter-layout").isotope({
            filter: selector,
            animationOptions: {
              duration: 500,
              easing: "linear",
              queue: false
            }
          });
          return false;
        });
    }

    if ($(".post-filter.has-dynamic-filters-counter").length) {
      // var allItem = $('.single-filter-item').length;
      var activeFilterItem = $(".post-filter.has-dynamic-filters-counter").find(
        "li"
      );
      activeFilterItem.each(function () {
        var filterElement = $(this).data("filter");
        var count = $(".filter-layout").find(filterElement).length;
        $(this)
          .children(".filter-text")
          .append('<span class="count">(' + count + ")</span>");
      });
    }
  }




  //Single Vertical Carousel
  if ($('.single-vertical-carousel').length) {
    $('.single-vertical-carousel').slick({
      dots: true,
      autoplay: false,
      loop: true,
      autoplaySpeed: 5000,
      infinite: true,
      responsive: true,
      slidesToShow: 2,
      vertical: true,
      slidesToScroll: 1,
      prevArrow: "<div class='prev-btn'><span class='fa fa-angle-up'></span></div>",
      nextArrow: "<div class='next-btn'><span class='fa fa-angle-down'></span></div>"
    });
  }




  if ($(".circle-progress").length) {
    $(".circle-progress").appear(function () {
      let circleProgress = $(".circle-progress");
      circleProgress.each(function () {
        let progress = $(this);
        let progressOptions = progress.data("options");
        progress.circleProgress(progressOptions);
      });
    });
  }

  function SmoothMenuScroll() {
    var anchor = $(".scrollToLink");
    if (anchor.length) {
      anchor.children("a").bind("click", function (event) {
        if ($(window).scrollTop() > 10) {
          var headerH = "90";
        } else {
          var headerH = "90";
        }
        var target = $(this);
        $("html, body")
          .stop()
          .animate({
              scrollTop: $(target.attr("href")).offset().top - headerH + "px"
            },
            1200,
            "easeInOutExpo"
          );
        anchor.removeClass("current");
        anchor.removeClass("current-menu-ancestor");
        anchor.removeClass("current_page_item");
        anchor.removeClass("current-menu-parent");
        target.parent().addClass("current");
        event.preventDefault();
      });
    }
  }
  SmoothMenuScroll();

  function OnePageMenuScroll() {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 117) {
      var menuAnchor = $(".one-page-scroll-menu .scrollToLink").children("a");
      menuAnchor.each(function () {
        var sections = $(this).attr("href");
        $(sections).each(function () {
          if ($(this).offset().top <= windscroll + 100) {
            var Sectionid = $(sections).attr("id");
            $(".one-page-scroll-menu").find("li").removeClass("current");
            $(".one-page-scroll-menu").find("li").removeClass("current-menu-ancestor");
            $(".one-page-scroll-menu").find("li").removeClass("current_page_item");
            $(".one-page-scroll-menu").find("li").removeClass("current-menu-parent");
            $(".one-page-scroll-menu")
              .find("a[href*=\\#" + Sectionid + "]")
              .parent()
              .addClass("current");
          }
        });
      });
    } else {
      $(".one-page-scroll-menu li.current").removeClass("current");
      $(".one-page-scroll-menu li:first").addClass("current");
    }
  }


  // window load event

  $(window).on("load", function () {
    if ($(".preloader").length) {
      $(".preloader").fadeOut();
    }
    thmSwiperInit();
    thmOwlInit();
    projectMasonaryLayout();
    priceFilter();
    languageSwitcher()


    if ($('.curved-circle').length) {
      $('.curved-circle').circleType({
        position: 'absolute',
        dir: 1,
        radius: 105,
        forceHeight: true,
        forceWidth: true
      });
    }

    if ($('.curved-circle-2').length) {
      $('.curved-circle-2').circleType({
        position: 'absolute',
        dir: 1,
        radius: 105,
        forceHeight: true,
        forceWidth: true
      });
    }

    if ($('.curved-circle-3').length) {
      $('.curved-circle-3').circleType({
        position: 'absolute',
        dir: 1,
        radius: 85,
        forceHeight: true,
        forceWidth: true
      });
    }


    //Jquery Spinner / Quantity Spinner
    if ($('.quantity-spinner').length) {
      $("input.quantity-spinner").TouchSpin({
        verticalbuttons: true
      });
    }



    if ($(".post-filter").length) {
      var postFilterList = $(".post-filter li");
      // for first init
      $(".filter-layout").isotope({
        filter: ".filter-item",
        animationOptions: {
          duration: 500,
          easing: "linear",
          queue: false
        }
      });
      // on click filter links
      postFilterList.on("click", function () {
        var Self = $(this);
        var selector = Self.attr("data-filter");
        postFilterList.removeClass("active");
        Self.addClass("active");

        $(".filter-layout").isotope({
          filter: selector,
          animationOptions: {
            duration: 500,
            easing: "linear",
            queue: false
          }
        });
        return false;
      });
    }

    if ($(".post-filter.has-dynamic-filter-counter").length) {
      // var allItem = $('.single-filter-item').length;

      var activeFilterItem = $(".post-filter.has-dynamic-filter-counter").find(
        "li"
      );

      activeFilterItem.each(function () {
        var filterElement = $(this).data("filter");
        var count = $(".filter-layout").find(filterElement).length;
        $(this).append("<sup>[" + count + "]</sup>");
      });
    }



  });

  $(document).ready(function() {
    const carousel = $(".testimonial-carousel");

    carousel.owlCarousel({
        loop: true,               // Infinite loop of testimonials
        margin: 20,               // Space between items
        dots: true,               // Enable dots for navigation
        autoplay: true,           // Autoplay the slider
        autoplayTimeout: 5000,    // 5 seconds for each testimonial
        smartSpeed: 1000,         // Transition speed for each slide
        items: 1                  // Show 1 testimonial at a time
    });

    // Move dots into the testimonial-three-left container
    const dotsContainer = $(".owl-dots");
    dotsContainer.appendTo(".testimonial-three-left");
});

  // window scroll event

  $(window).on("scroll", function () {
    if ($(".stricked-menu").length) {
      var headerScrollPos = 130;
      var stricky = $(".stricked-menu");
      if ($(window).scrollTop() > headerScrollPos) {
        stricky.addClass("stricky-fixed");
      } else if ($(this).scrollTop() <= headerScrollPos) {
        stricky.removeClass("stricky-fixed");
      }
    }
    if ($(".scroll-to-top").length) {
      var strickyScrollPos = 100;
      if ($(window).scrollTop() > strickyScrollPos) {
        $(".scroll-to-top").fadeIn(500);
      } else if ($(this).scrollTop() <= strickyScrollPos) {
        $(".scroll-to-top").fadeOut(500);
      }
    }

    OnePageMenuScroll();

  });

  

  if ($(".before-after-twentytwenty").length) {
    $(".before-after-twentytwenty").each(function () {
      var Self = $(this);
      var objName = Self.attr("id");
      $("#" + objName).twentytwenty();

      // hack for bs tab
      $(document).on("shown.bs.tab", 'a[data-toggle="tab"]', function (e) {
        var paneTarget = $(e.target).attr("data-target");
        var $thePane = $(".tab-pane" + paneTarget);
        var twentyTwentyContainer = "#" + objName;
        var twentyTwentyHeight = $thePane.find(twentyTwentyContainer).height();
        if (0 === twentyTwentyHeight) {
          $thePane.find(twentyTwentyContainer).trigger("resize");
        }
      });
    });
  }



// Portfolio Two 
jQuery(document).ready(function($) {
  $('.pq-bg-primary .owl-carousel').each(function () {
      var app_slider = $(this);

      app_slider.owlCarousel({
          items: 4,
          loop: true,
          margin: 30,
          nav: true,  // Enable navigation arrows
          dots: false,  // Hide navigation dots
          autoplay: true,
          autoplayTimeout: 5000,
          navText: [
                  "<div class='custom-nav-button left'><i class='fa-solid fa-arrow-left'></i></div>", 
                  "<div class='custom-nav-button right'><i class='fa-solid fa-arrow-right'></i></div>"
          ],  
          responsiveClass: true,
          responsive: {
              0: { items: 1, nav: true },
              480: { items: 1, nav: true },
              768: { items: 2 },
              1024: { items: 3 },
              1199: { items: 3.48}
          }
      });
  });
});








 
    // TESTIMONIAL SLIDER
    $('.slider-for').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      dots: true,
      asNavFor: '.slider-nav'
  });

  $('.slider-nav').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      autoplay: false,
      autoplaySpeed: 3000,
      dots: false,
      arrows: false,
      centerMode: true,
      centerPadding: '0px',
      focusOnSelect: true,
  });
    // ABOUT US TESTIMONIAL SLIDER
    $('.about__us-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      dots: true,
      asNavFor: '.about-us-slider-nav'
  });

  $('.about-us-slider-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.about__us-slider',
    autoplay: false,
    autoplaySpeed: 3000,
    dots: false,
    arrows: false,
    centerMode: true,
    centerPadding: '0px',
    focusOnSelect: true,
});

  // Price Filter
  $(document).ready(function () {
    // Click event for tab buttons
    $(".tab-btn").click(function () {
      // Remove 'active-btn' class from all tabs
      $(".tab-btn").removeClass("active-btn");
  
      // Add 'active-btn' class to the clicked tab
      $(this).addClass("active-btn");
  
      // Remove 'active-tab' class from all tab contents
      $(".tab").removeClass("active-tab");
  
      // Add 'active-tab' class to the clicked tab's content
      var tabId = $(this).data("tab");
      $(tabId).addClass("active-tab");
    });
  
    // Optionally, activate the initial tab's content on page load
    $(".tab-btn.active-btn").each(function () {
      var tabId = $(this).data("tab");
      $(tabId).addClass("active-tab");
    });
  });
    // Price Filter
    function priceFilter() {
      if ($(".price-ranger").length) {
        $(".price-ranger #slider-range").slider({
          range: true,
          min: 50,
          max: 500,
          values: [11, 300],
          slide: function (event, ui) {
            $(".price-ranger .ranger-min-max-block .min").val(
              "$" + ui.values[0]
            );
            $(".price-ranger .ranger-min-max-block .max").val(
              "$" + ui.values[1]
            );
          },
        });
        $(".price-ranger .ranger-min-max-block .min").val(
          "$" + $(".price-ranger #slider-range").slider("values", 0)
        );
        $(".price-ranger .ranger-min-max-block .max").val(
          "$" + $(".price-ranger #slider-range").slider("values", 1)
        );
      }
    }

// # Select
$(document).ready(function(){
  $('.selectpicker').selectpicker();
});



// Popular Causes Progress Bar
document.addEventListener("DOMContentLoaded", function () {
    function animateProgressBars() {
        document.querySelectorAll(".count-bar").forEach((bar) => {
            // Get the data-percent value
            let percent = bar.getAttribute("data-percent");
            // Apply the width dynamically
            bar.style.width = percent;
            // Add the counted class to trigger the animation for text
            bar.classList.add("counted");
        });
    }

    function handleScroll() {
        let progressBars = document.querySelectorAll(".team-details__progress-list");
        if (!progressBars.length) return;

        progressBars.forEach((progressSection) => {
            let sectionPosition = progressSection.getBoundingClientRect().top;
            let screenHeight = window.innerHeight;

            if (sectionPosition < screenHeight - 100) {
                animateProgressBars();
                window.removeEventListener("scroll", handleScroll); // Runs only once for better performance
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on page load in case the section is already visible
});

// Blog Pagination
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".page-link");
  const urlParams = new URLSearchParams(window.location.search);
  let currentPage = urlParams.get("page") || "1"; // Default to page 1 if no page parameter

  // Ensure currentPage is always a string for comparison
  currentPage = currentPage.toString();

  // Active Page Highlight
  links.forEach(link => {
    if (link.dataset.page === currentPage) {
      link.classList.add("active"); // Add active class to the correct page link
    } else {
      link.classList.remove("active"); // Remove active class from other pages
    }
  });

  // Next Button Functionality
  const nextButton = document.querySelector(".next-page");
  if (nextButton) {
    nextButton.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent Default Anchor Behavior

      // Cycle through pages: after page 3, go back to page 1
      let nextPage = parseInt(currentPage) + 1;
      if (nextPage > 3) {
        nextPage = 1; // If currentPage is 3, loop back to page 1
      }

      window.location.href = `blog.html?page=${nextPage}`; // Redirect to next page
    });
  }
});


// const nextButton = document.querySelector(".next-page");
// if (nextButton) {
//   nextButton.addEventListener("click", function (event) {
//     event.preventDefault(); // Prevent Default Anchor Behavior

//     // Cycle through pages: after page 3, go back to page 1
//     let nextPage = parseInt(currentPage) + 1;
//     if (nextPage > 3) {
//       nextPage = 1; // If currentPage is 3, loop back to page 1
//     }

//     window.location.href = `blog.html?page=${nextPage}`; // Redirect to next page
//   });
// }
// });


})(jQuery);










