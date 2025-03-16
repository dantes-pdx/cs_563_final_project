// Event listeners for buttons
document
  .getElementById("past_work")
  .addEventListener("click", displayJumbotron);
document.getElementById("current_work").addEventListener("click", displayCards);
document.getElementById("fun").addEventListener("click", displayLazyThumbnails);

// Function to display Jumbotron
function displayJumbotron() {
  document.getElementById("results").innerHTML = `
        <div class="jumbotron p-4 rounded">
            <h2 class="display-6 fw-bold">Work Experience</h2>
            
            <hr>

            <h4 class="fw-bold">Software Developer / Business Analyst</h4>
            <p class="text-muted">March 2022 - September 2023</p>
            <p>
                Developed, configured, tested, and deployed automation solutions. Acted as a bridge between technical teams and business partners 
                to facilitate communication and collaboration. Debugged errors and worked with developers to resolve missing or corrupted data. 
                Gained expertise in banking principles and best practices. Verified the accuracy and completeness of ledgers, spreadsheets, and solutions. 
                Standardized methods and processes to support automation initiatives. Planned and facilitated the integration of transactional systems 
                to enhance throughput. Worked within consent order teams to identify anomalies and setbacks. Developed new productivity solutions using 
                licensed software, including Python, Anaconda, and Macros.
            </p>

            <hr>

            <h4 class="fw-bold">Associate System Engineer</h4>
            <p class="text-muted">January 2021 - March 2022</p>
            <p>
                Administered Unix/Linux servers and provided enterprise middleware support using IBM technologies such as MQ Explorer and IBM Toolkit. 
                Developed and maintained shell scripts to manage and patch application tools. Created and submitted changes for review in accordance 
                with Standard Operating Procedures. Troubleshot connectivity issues between upstream and downstream systems using administrative scripts, 
                log files, and Splunk queries. Monitored national applications and systems to prevent outages. Participated in design and review meetings 
                to troubleshoot and upgrade infrastructure. Documented Standard Operating Procedures and configurations to ensure consistency and standardization.
            </p>

            <hr>

            <h4 class="fw-bold">Software Developer</h4>
            <p class="text-muted">August 2019 - January 2021</p>
            <p>
                Worked as a Python developer in Databricks, AWS, and Apache Spark environments. Performed ETL processes on data warehouses using PySpark, 
                Databricks, MySQL, and AWS. Collaborated with client technical architects to manage, troubleshoot, deploy, upgrade, and build new infrastructure. 
                Conducted research and developed scripts for Proof of Concept projects aimed at improving performance. Continuously updated technical skills 
                to implement practical and efficient solutions.
            </p>

            <hr>

            <h4 class="fw-bold">Software Engineer I</h4>
            <p class="text-muted">December 2018 - July 2019</p>
            <p>
                Specialized in back-end Python scripting and networking. Developed proficiency in Python 3 for improved fluency and code readability. 
                Gained an understanding of networking concepts, including TCP/IP and hardware fundamentals. Processed files using Python 3 context managers 
                to enhance efficiency and automation.
            </p>
        </div>
    `;
}

// Function to display Bootstrap Cards with Hover Effect
function displayCards() {
  const data = [
    {
      src: "images/thumb1.jpg",
      title: "Internet, Web, & Cloud Systems",
      description: "Description of project 1",
    },
    {
      src: "images/thumb2.jpg",
      title: "Intro to Web Development",
      description: "Description of project 2",
    },
    {
      src: "images/thumb3.jpg",
      title: "Virtual Reality",
      description: "Description of project 3",
    },
  ];

  document.getElementById("results").innerHTML = `
        <div class="row">
            ${data
              .map(
                (item) => `
                <div class="col-md-4">
                    <div class="card">
                        <img src="${item.src}" class="card-img-top" alt="${item.title}">
                        <div class="card-body">
                            <h5 class="card-title">${item.title}</h5>
                            <p class="card-text">${item.description}</p>
                            
                        </div>
                    </div>
                </div>
            `
              )
              .join("")}
        </div>
    `;
}

// Function to display Lazy Loading Thumbnails
function displayLazyThumbnails() {
  const thumbnails = [
    "images/thumb1.jpg",
    "images/thumb2.jpg",
    "images/thumb3.jpg",
    "images/thumb4.jpg",
    "images/thumb5.jpg",
    "images/thumb6.jpg",
    "images/thumb7.jpg",
    "images/thumb8.jpg",
  ];

  document.getElementById("results").innerHTML = `
        <div class="row">
            ${thumbnails
              .map(
                (src) => `
                <div class="col-md-3">
                    <img data-src="${src}" class="lazy img-fluid" width="150" height="100" alt="Thumbnail">
                </div>
            `
              )
              .join("")}
        </div>
    `;

  // Lazy loading functionality
  document.querySelectorAll(".lazy").forEach((img) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          img.src = img.dataset.src;
          img.classList.add("loaded");
          observer.unobserve(img);
        }
      });
    });
    observer.observe(img);
  });
}
