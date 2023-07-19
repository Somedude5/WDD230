window.addEventListener('load', function () {
  const container = document.querySelector('.order-container');
  const cardContainer = document.querySelector('.fruit-class');
  const paperbackground = document.querySelector('.social-media-container');
  const paperbackground2 = document.querySelector('.card');
  const background1 = document.querySelector('.thankyou-main');


  if (cardContainer) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          cardContainer.style.backgroundImage = "url('images/fruity-backdrop.png')";
          cardContainer.classList.toggle('loaded');
          observer.disconnect();
        }
      });
    });

    observer.observe(cardContainer);
  }

  if (paperbackground) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          paperbackground.style.backgroundImage = "url('images/paper-texture.webp')";
          paperbackground.classList.toggle('loaded');
          observer.disconnect();
        }
      });
    });

    observer.observe(paperbackground);
  }

  if (paperbackground2) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          paperbackground2.style.backgroundImage = "url('images/paper-texture.webp')";
          paperbackground2.classList.toggle('loaded');
          observer.disconnect();
        }
      });
    });

    observer.observe(paperbackground2);
  }

  if (container) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          container.style.backgroundImage = "url('images/smoothies/smoothies_800x800.jpg')";
          container.classList.toggle('loaded');
          observer.disconnect();
        }
      });
    });

    observer.observe(container);
  }

  if (background1) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          background1.style.backgroundImage = "url('images/paper-texture.webp')";
          background1.classList.toggle('loaded');
          observer.disconnect();
        }
      });
    });

    observer.observe(background1);
  }
});
