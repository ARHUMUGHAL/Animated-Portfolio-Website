(function () {
  const locomotiveScroll = new LocomotiveScroll();
})();


var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});

function navLinksAnimation() {
  var navLinks = document.querySelectorAll("nav ul li");

  navLinks.forEach((e) => {
    e.addEventListener("mouseenter", function () {
      gsap.to(e, {
        y: -8,
        duration: 0.5,
      });
    });
    e.addEventListener("mouseleave", function () {
      gsap.to(e, {
        y: 0,
        duration: 0.5,
      });
    });
  });
}
navLinksAnimation();

function sectionOneAnimation() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".card-container",
      start: "top 70%",
      end: "bottom 30%",
      scrub: 0.2,
    },
  });

  tl.to(
    ".card-1",
    {
      y: "15%",
      duration: 0.5,
    },
    "a"
  );

  tl.to(
    ".card-2",
    {
      y: "7%",
      duration: 0.5,
    },
    "a"
  );
  tl.to(
    ".card-3",
    {
      y: "-5%",
      duration: 0.5,
    },
    "a"
  );
  tl.to(
    ".card-4",
    {
      y: "-12%",
      duration: 0.5,
    },
    "a"
  );
  tl.to(
    ".card-5",
    {
      y: "0%",
      duration: 0.5,
    },
    "a"
  );
  tl.to(
    ".card-6",
    {
      y: "10%",
      duration: 0.5,
    },
    "a"
  );
  tl.to(
    ".card-7",
    {
      y: "16%",
      duration: 0.5,
    },
    "a"
  );

  gsap.to(".section-1 .line", {
    scale: 1,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".section-1 h2",
      scrub: 0.3,
      start: "top 70%",
      end: "bottom 45%",
    },
  });

  gsap.to(".section-1 h1", {
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: ".section-1 h1",
      scrub: 0.3,
      start: "top 70%",
      end: "bottom 45%",
    },
  });
}

sectionOneAnimation();

function slider() {
  var lftbtn = document.querySelector(".left-button");
  var rgtbtn = document.querySelector(".right-button");
  var slides = document.querySelector(".slides-holder");

  var countbtn = 0;
  rgtbtn.addEventListener("click", function () {
    if (countbtn == 0) {
      gsap.to(slides, {
        x: "-14.5%",
      });
      countbtn = 1;
    } else if (countbtn == 1) {
      gsap.to(slides, {
        x: "-29%",
      });
      countbtn = 2;
    } else if (countbtn == 2) {
      gsap.to(slides, {
        x: "-43%",
      });
      countbtn = 3;
    } else if (countbtn == 3) {
      gsap.to(slides, {
        x: "-58%",
      });
      countbtn = 4;
    } else {
      countbtn = 0;
    }
  });

  lftbtn.addEventListener("click", function () {
    gsap.to(slides, {
      x: "0%",
      duration: 0.5,
    });
  });
}

slider();

function toolkit() {
  var github = document.querySelectorAll(".overlay i.fa-github");
  var toolGithub = document.querySelectorAll(".tool-github");
  var liveDemo = document.querySelectorAll(".overlay i.fa-solid");
  var toolLiveDemo = document.querySelectorAll(".tool-livedemo");

  github.forEach((git) =>
    git.addEventListener("mouseenter", function () {
      toolGithub.forEach((toolgit) => (toolgit.style.opacity = "100%"));
    })
  );

  github.forEach((git) =>
    git.addEventListener("mouseleave", function () {
      toolGithub.forEach((toolgit) => (toolgit.style.opacity = "0%"));
    })
  );

  liveDemo.forEach((liveIcon) =>
    liveIcon.addEventListener("mouseenter", function () {
      toolLiveDemo.forEach((toolDemo) => (toolDemo.style.opacity = "100%"));
    })
  );

  liveDemo.forEach((liveIcon) =>
    liveIcon.addEventListener("mouseleave", function () {
      toolLiveDemo.forEach((toolDemo) => (toolDemo.style.opacity = "0%"));
    })
  );
}

toolkit()


function section3(){

  gsap.to(".show-me",{
    x : "5%",
    scrollTrigger : {
      trigger : ".show-me",
      scrub : .5
    }
  })

  gsap.to(".passions",{
    x : "-5%",
    scrollTrigger : {
      trigger : ".passions",
      scrub : .5
    }
  })

}
section3()


function section4(){
  gsap.to(".top-logo1",{
    x : "50%",
    scrollTrigger : {
      trigger : ".top-logo1",
      scrub : .5
    }
  })
  gsap.to(".top-logo2",{
    x : "-80%",
    scrollTrigger : {
      trigger : ".top-logo2",
      scrub : .5
    }
  })
  gsap.to(".bottom-logo1",{
    x : "30%",
    scrollTrigger : {
      trigger : ".bottom-logo1",
      scrub : .5
    }
  })
  gsap.to(".bottom-logo2",{
    x : "-40%",
    scrollTrigger : {
      trigger : ".bottom-logo2",
      scrub : .5
    }
  })
}
section4()

function section6(){
  gsap.to(".col-1-section-6",{
    y : "-66.5%",
    scrollTrigger : {
      trigger : ".col-1-section-6",
      scrub : .2
    }
  })
}
section6()


function section7(){
gsap.to(".col-section-7",{
  y : "-30%",
  stagger : .1,
  duration : .5,
  scrollTrigger : {
    trigger : ".col-section-7",
    scrub : .2
  }

})
}
section7()


function loader(){
  gsap.to(".loader",{
    y : "-100%",
    duration : 1
  })
}
loader()


function ButtonClickAnimation(){

var logo = document.querySelector(".nav_logo")
var buttonLoader = document.querySelector(".button-loader")

logo.addEventListener("click",function(){

  buttonLoader.style.display = "flex"

  gsap.to(".lft-slide",{
    x : "200%",
    duration : 1
  })
  gsap.to(".rgt-slide",{
    x : "-200%",
    duration : 1
  })

  setTimeout(()=>{
    window.location.href = '../index.html'
  }, 3000)

})
}

ButtonClickAnimation()







