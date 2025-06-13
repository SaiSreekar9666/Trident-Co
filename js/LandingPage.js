// Your testimonials data (JSON)
const testimonials = [
  {
    name: "John Doe",
    photo: "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg",
    quote: "The team at ServiceCo was amazing. They helped us grow our business with a sleek new website and an effective SEO strategy!"
  },
  {
    name: "Jane Smith",
    photo: "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg",
    quote: "ServiceCo's marketing strategies transformed our brand's online presence. We saw a significant boost in sales!"
  },
  {
    name: "Mike Johnson",
    photo: "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg",
    quote: "Excellent team, wonderful results!"
  },
  {
    name: "Alex Williams",
    photo: "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg",
    quote: "Fantastic service — we’re growing faster than we thought!"
  }
];

// Generate cards dynamically
const cardsContainer = document.querySelector('.testimonial-cards');
const dotsContainer = document.querySelector('.slider-dots');

let index = 0;

function showSlide(id) {
  cardsContainer.style.transform = `translateX(-${id * 100}%)`;
  dotsContainer.querySelectorAll('span').forEach((dot, i) => {
    dot.classList.toggle('active', i == id);
  });
  index = id;
}

function nextSlide(){
  index = (index + 1) % testimonials.length;
  showSlide(index);
}

function createTestimonials(){
  testimonials.forEach((item, i) => {
    // Card
    cardsContainer.innerHTML += `
      <div class="testimonial-card">
        <img src="${item.photo}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>"${item.quote}"</p>
      </div>`;
    // Dot
    dotsContainer.innerHTML += `<span data-index="${i}">•</span>`;
  });

  // Attach event to dots
  dotsContainer.querySelectorAll('span').forEach((dot) => {
    dot.addEventListener('click',(e)=>{
      showSlide(e.target.dataset.index);
    });
  });

  showSlide(0);
}

document.addEventListener("DOMContentLoaded", () => {
  createTestimonials();
  setInterval(nextSlide, 4000);
});
