///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

///////////////////////////////////////////////////////////
// Mobile navigation

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Animation on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.meal, .testimonial, .feature, .step-text-box, .step-img-box');
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('animate');
    }
  });
};

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
  .meal, .testimonial, .feature, .step-text-box, .step-img-box {
    opacity: 0;
    transform: translateY(2rem);
    transition: all 0.6s ease-out;
  }
  
  .meal.animate, .testimonial.animate, .feature.animate, 
  .step-text-box.animate, .step-img-box.animate {
    opacity: 1;
    transform: translateY(0);
  }
  
  .meal:hover {
    transform: translateY(-1.2rem) scale(1.02);
  }
  
  .btn {
    transition: all 0.3s ease;
  }
  
  .btn:hover {
    transform: translateY(-0.3rem);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
  }
  
  .btn:active {
    transform: translateY(-0.1rem);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }
  
  .main-nav-link {
    position: relative;
    overflow: hidden;
  }
  
  .main-nav-link::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #e67e22;
    transition: width 0.3s ease;
  }
  
  .main-nav-link:hover::before {
    width: 100%;
  }
  
  .gallery-item {
    position: relative;
    overflow: hidden;
    border-radius: 11px;
  }
  
  .gallery-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(230, 125, 34, 0.8), rgba(207, 113, 31, 0.8));
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }
  
  .gallery-item:hover::before {
    opacity: 1;
  }
  
  .pricing-plan {
    transition: all 0.3s ease;
  }
  
  .pricing-plan:hover {
    transform: translateY(-1rem);
    box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.1);
  }
`;
document.head.appendChild(style);

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

///////////////////////////////////////////////////////////
// Form handling
const form = document.querySelector('.cta-form');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simple form validation
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const selectWhere = document.getElementById('select-where').value;
    
    if (!fullName || !email || !selectWhere) {
      alert('Please fill in all fields');
      return;
    }
    
    // Simulate form submission
    alert('Thank you for signing up! We will contact you soon.');
    form.reset();
  });
}
