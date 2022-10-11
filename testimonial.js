const next = document.getElementById("next");
const previous = document.getElementById("previous");
let audio = document.getElementById("audio");
let index = 0;

let url = "https://testimonialapi.toolcarton.com/api";
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((testimonials) => {
    console.log(testimonials);
    const renderTestimonial = function () {
      let result = `
  <div class="item testionial">
      <div class="heading">
        <div class="profile">
          <img
            src="${testimonials[index].avatar}"
            alt="display-pics"
            class="display-pics"
          />
          <div class="name">
            <span class="bold name">${testimonials[index].name}</span> <br>
            <span class="opacity50 designation">${testimonials[index].designation}</span>
            <p class="rating">Rating: ${testimonials[index].rating} </p>
          </div>
        </div>
        <br />
      </div>
      <div class="statement">
        <h4 class="message d-flex">
          ${testimonials[index].message}
        </h4>
        <br />
        <p class="opacity lorem">
          “ ${testimonials[index].lorem} ”
        </p>
      </div>
      <p><i class="fa-solid fa-location-dot location"></i> ${testimonials[index].location}</p> 
      </div>
    `;
      return result;
    };

    let display = renderTestimonial();

    document.querySelector(".testimonial").innerHTML = display;

    next.addEventListener("click", (e) => {
      e.preventDefault();
      next.disabled = false;
      if (index >= 0 && testimonials[index].id <= testimonials.length - 1) {
        index++;
        renderTestimonial();
        let display = renderTestimonial();
        document.querySelector(".testimonial").innerHTML = display;
        console.log(testimonials[index].id);
      }
    });

    previous.addEventListener("click", (e) => {
      e.preventDefault();
      previous.disabled = false;
      if (index > 0 && testimonials[index].id <= testimonials.length - 1) {
        index--;
        renderTestimonial();
        let display = renderTestimonial();
        document.querySelector(".testimonial").innerHTML = display;
        console.log(testimonials[index].id);
      }
    });
    audio.addEventListener("click", (e) => {
      e.preventDefault();
      audio = new Audio(`${testimonials[index].audio}`)
      audio.play();
      console.log(`${testimonials[index].id} gh`);
    });
  });