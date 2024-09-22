/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

   $(document).ready(function(){
    // Sticky footer
    var bumpIt = function() {
        $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
      },
      didResize = false;

    bumpIt();

    $(window).resize(function() {
      didResize = true;
    });
    setInterval(function() {
      if (didResize) {
        didResize = false;
        bumpIt();
      }
    }, 250);

    // FitVids init
    $("#main").fitVids();

    // init sticky sidebar
    $(".sticky").Stickyfill();

    var stickySideBar = function(){
      const MINIMUM_WIDTH = 1024;

      // Adjust if the follow button is shown based upon screen size
      var width = $(window).width();
      var show = $(".author__urls-wrapper button").length === 0 ? width > MINIMUM_WIDTH : !$(".author__urls-wrapper button").is(":visible");

      // Don't show the follow button if there is no content for it
      var count = $('.author__urls.social-icons li').length - $('li[class="author__desktop"]').length;
      if (width <= MINIMUM_WIDTH && count === 0) {
        $(".author__urls-wrapper button").hide();
        show = false;
      }

      if (show) {
        Stickyfill.rebuild();
        Stickyfill.init();
        $(".author__urls").show();
      } else {
        Stickyfill.stop();
        $(".author__urls").hide();
      }
    };

    stickySideBar();

    $(window).resize(function(){
      stickySideBar();
    });

    // Follow menu drop down
    $(".author__urls-wrapper button").on("click", function() {
      $(".author__urls").fadeToggle("fast", function() {});
      $(".author__urls-wrapper button").toggleClass("open");
    });

    // init smooth scroll, this needs to be slightly more than then fixed masthead height
    $("a").smoothScroll({offset: -65});

    // add lightbox class to all image links
    $("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

    // Magnific-Popup options
    $(".image-popup").magnificPopup({
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
      },
      removalDelay: 500, // Delay in milliseconds before popup is removed
      mainClass: 'mfp-zoom-in',
      callbacks: {
        beforeOpen: function() {
          this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
        }
      },
      closeOnContentClick: true,
      midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });

    // Carousel for project images
    const imagesContainer = document.querySelector('.project-images');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const indicators = document.querySelectorAll('.scroll-indicators .indicator');

    if(imagesContainer) {
      imagesContainer.addEventListener('wheel', (e) => {
        e.preventDefault();
        imagesContainer.scrollLeft += e.deltaY;
        updateIndicators();
      });

      if (prevButton && nextButton) {
        prevButton.addEventListener('click', () => {
          imagesContainer.scrollLeft -= imagesContainer.clientWidth; // Scroll by the full container width
          updateIndicators();
        });

        nextButton.addEventListener('click', () => {
          imagesContainer.scrollLeft += imagesContainer.clientWidth; // Scroll by the full container width
          updateIndicators();
        });
      }

      indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
          imagesContainer.scrollLeft = (index * imagesContainer.clientWidth);
          updateIndicators();
        });
      });

      function updateIndicators() {
        const totalWidth = imagesContainer.scrollWidth - imagesContainer.clientWidth;
        const scrollLeft = imagesContainer.scrollLeft;

        indicators.forEach((indicator, index) => {
          const indicatorPos = (index / (indicators.length - 1)) * totalWidth;
          indicator.classList.toggle('active', scrollLeft >= indicatorPos && scrollLeft < indicatorPos + (totalWidth / indicators.length));
        });
      }

      updateIndicators();
    }

    // Add logic for poster visualizations (optional)
    // If you want to include PDFs, use PDF.js or iframe visualization methods as previously suggested
    $(".pdf-embed").each(function () {
      const url = $(this).data('pdf-url');
      const iframe = `<iframe src="${url}" type="application/pdf" width="100%" height="600px"></iframe>`;
      $(this).html(iframe);
    });

  });
