document.addEventListener("DOMContentLoaded", () => {
  // Helper to update content
  const setContent = (html) =>
    (document.getElementById("results").innerHTML = html);

  // Map button IDs to their corresponding functions
  const views = {
    past_work: displayJumbotron,
    current_work: displayCards,
    fun: displayLazyThumbnails,
  };
  Object.keys(views).forEach((id) =>
    document.getElementById(id).addEventListener("click", views[id])
  );

  // Event delegation for modal zoom
  document.getElementById("results").addEventListener("click", (e) => {
    if (e.target?.classList.contains("zoomable")) {
      const modalImage = document.getElementById("modalImage");
      if (modalImage) {
        modalImage.src = e.target.src;
        new bootstrap.Modal(document.getElementById("photoModal")).show();
      } else {
        console.error("Modal image element not found.");
      }
    }
  });

  function displayJumbotron() {
    setContent(`
      <div class="jumbotron p-4 rounded">
        <h2 class="display-6 fw-bold">Work Experience</h2>
        <hr>
        <h4 class="fw-bold">Software Developer / Business Analyst</h4>
        <p class="text-muted">March 2022 - September 2023</p>
        <p>
          Developed, configured, tested, and deployed automation solutions. Acted as a bridge between technical teams and business partners to facilitate collaboration. Debugged errors, resolved data issues, and standardized processes for automation initiatives.
        </p>
        <hr>
        <h4 class="fw-bold">Associate System Engineer</h4>
        <p class="text-muted">January 2021 - March 2022</p>
        <p>
          Administered Unix/Linux servers, provided middleware support using IBM tools, maintained shell scripts, and troubleshot connectivity issues while documenting standard procedures.
        </p>
        <hr>
        <h4 class="fw-bold">Software Developer</h4>
        <p class="text-muted">August 2019 - January 2021</p>
        <p>
          Developed Python solutions in Databricks, AWS, and Apache Spark; managed ETL processes and collaborated on infrastructure projects to boost performance.
        </p>
        <hr>
        <h4 class="fw-bold">Software Engineer I</h4>
        <p class="text-muted">December 2018 - July 2019</p>
        <p>
          Focused on back-end Python scripting and networking, developing efficiency through context managers and a deeper understanding of TCP/IP fundamentals.
        </p>
      </div>
    `);
  }

  function displayCards() {
    const data = [
      {
        src: "images/internet-web-&cloud-systems-course.png",
        title: "Internet, Web, & Cloud Systems",
        description:
          "Course Description: \
        Covers modern networked computing systems \
        and the abstractions they provide. Specifically, \
        students will learn about and apply their \
        knowledge of topics such as Internet protocols, \
        virtual machines and containers, web servers and frameworks, \
        and databases as well as their deployment in modern \
        cloud environments. Also offered for graduate-level credit \
        as CS 430P and may be taken only once for credit. \
        Prerequisite: Graduate-standing and admission into CS program.",
      },
      {
        src: "images/web-dev-course.jpeg",
        title: "Intro to Web Development",
        description:
          "Course Description: \
        Students will learn the \
        fundamentals of web development, the structure and \
        functionality of the web, and how to create responsive \
        and accessible web applications using HTML, CSS, and JavaScript. \
        Also offered for undergraduate-level credit as CS 463 and \
        may be taken only once for credit.",
      },
      {
        src: "images/virtual-reality-course.jpg",
        title: "Virtual Reality",
        description:
          "Course Description: \
        Provides a broad introduction to various techniques that are \
        used in virtual reality (VR) systems ranging from hardware \
        and software requirements for VR to tracking, three-dimensional \
        interaction, applications, and neuroscience and human brain \
        perception as they relate to VR. Students engage in discussion \
        about the potential future developments and challenges in the VR \
        landscape and gain practical experience in implementing and evaluating \
        VR systems. Also offered for undergraduate-level credit as \
        CS 448 and may be taken only once for credit.",
      },
    ];
    setContent(`
      <div class="row">
        ${data
          .map(
            (item) => `
          <div class="col-md-4">
            <div class="card">
              <img src="${item.src}" class="card-img-top zoomable" alt="${item.title}" style="cursor:pointer;">
              <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">${item.description}</p>
              </div>
            </div>
          </div>`
          )
          .join("")}
      </div>
    `);
  }

  function displayLazyThumbnails() {
    const thumbnails = [
      "images/black_bear.jpg",
      "images/deer.jpg",
      "images/elk_statue.jpg",
      "images/local_waterfall.jpg",
      "images/rattle_snake.jpg",
      "images/rhino.jpg",
      "images/tigers.PNG",
      "images/turkeys.jpg",
    ];
    setContent(`
      <div class="row gy-4">
        ${thumbnails
          .map(
            (src) => `
          <div class="col-md-3">
            <img data-src="${src}" class="lazy img-fluid zoomable" width="150" height="100" alt="Thumbnail" style="cursor:pointer;">
          </div>`
          )
          .join("")}
      </div>
    `);
    // Lazy load images
    document.querySelectorAll(".lazy").forEach((img) => {
      const observer = new IntersectionObserver((entries, obs) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src;
            entry.target.classList.add("loaded");
            obs.unobserve(entry.target);
          }
        })
      );
      observer.observe(img);
    });
  }
});
