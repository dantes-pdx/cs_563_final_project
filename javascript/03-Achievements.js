document.addEventListener("DOMContentLoaded", () => {
  const achievements = [
    {
      href: "https://www.hackerrank.com/profile/sanchez545",
      imgSrc: "./images/hackerrank_profile.jpg",
      altText: "Hackerrank Profile",
    },
    {
      href: "https://www.hackerrank.com/certificates/75b8f62b32fa",
      imgSrc: "./images/software_engineer_cert.jpg",
      altText: "Software Engineer Certificate",
    },
    {
      href: "https://www.hackerrank.com/certificates/61302de2b55d",
      imgSrc: "./images/problem_solving_intermediate_cert.jpg",
      altText: "Problem Solving Intermediate Certificate",
    },
  ];

  // Create the inner carousel container.
  const carouselInner = document.createElement("div");
  carouselInner.className = "carousel-inner";

  // Generate carousel items.
  achievements.forEach((achievement, index) => {
    const item = document.createElement("div");
    item.className = `carousel-item${index === 0 ? " active" : ""}`;

    const link = document.createElement("a");
    link.href = achievement.href;
    link.target = "_blank";
    link.className = "d-block w-100";

    const img = document.createElement("img");
    img.src = achievement.imgSrc;
    img.className = "d-block w-100";
    img.alt = achievement.altText;

    link.appendChild(img);
    item.appendChild(link);
    carouselInner.appendChild(item);
  });

  // Create main carousel container with fade effect.
  const carousel = document.createElement("div");
  carousel.id = "carouselExampleFade";
  carousel.className = "carousel slide carousel-fade";
  carousel.appendChild(carouselInner);

  // Create previous control button.
  const prevButton = document.createElement("button");
  prevButton.className = "carousel-control-prev";
  prevButton.type = "button";
  // Data attributes are kept for semantics, though we'll attach listeners explicitly.
  prevButton.setAttribute("data-bs-target", "#carouselExampleFade");
  prevButton.setAttribute("data-bs-slide", "prev");
  prevButton.innerHTML = `
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  `;

  // Create next control button.
  const nextButton = document.createElement("button");
  nextButton.className = "carousel-control-next";
  nextButton.type = "button";
  nextButton.setAttribute("data-bs-target", "#carouselExampleFade");
  nextButton.setAttribute("data-bs-slide", "next");
  nextButton.innerHTML = `
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  `;

  carousel.appendChild(prevButton);
  carousel.appendChild(nextButton);

  // Append the carousel to the container with id "achievements".
  document.getElementById("achievements").appendChild(carousel);

  // Initialize the Bootstrap carousel.
  const bsCarousel = new bootstrap.Carousel(carousel, {
    interval: false,
  });

  // Attach explicit click event listeners for controls.
  prevButton.addEventListener("click", () => {
    bsCarousel.prev();
  });
  nextButton.addEventListener("click", () => {
    bsCarousel.next();
  });
});
