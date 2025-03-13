// Function to create and display content
const createContent = () => {
  // Select the correct container
  const introContainer = document.getElementById("intro");
  if (!introContainer) {
    console.error("Error: #intro container not found!");
    return; // Stop execution if #intro doesn't exist
  }

  // Create main container
  const container = document.createElement("div");
  container.classList.add("intro-container", "mt-5");

  // Create h1
  const heading1 = document.createElement("h1");
  // heading1.textContent = "Hello";
  heading1.classList.add("text-center", "mb-4");

  // Create section
  const section = document.createElement("section");
  section.classList.add("text-center");

  // Create h2
  const heading2 = document.createElement("h2");
  heading2.textContent = "About Me";
  heading2.classList.add("mb-3");

  // Create image
  const image = document.createElement("img");
  image.src = "./images/dante.jpg";
  image.width = 200;
  image.height = 200;
  image.alt = "Photo of Dante";
  image.classList.add("rounded-circle");

  // Create paragraph
  const paragraph = document.createElement("p");
  paragraph.textContent = `My name is Dante Sanchez and I'm a new graduate 
  student at Portland State University majoring in Computer Science. As
  part of my firt term I'm taking a Web Development course to brush up on 
  web development and learn new material. My general interests
  include learning new skills that are engaging and fun. Computer
  Science topics, outdoor activities, video games, and viewing headline
  news stories are among my favorite activities.`;
  paragraph.classList.add("bio", "lead", "px-3");

  // Append elements to section
  section.appendChild(heading2);
  section.appendChild(image);
  section.appendChild(paragraph);

  // Append everything to container
  container.appendChild(heading1);
  container.appendChild(section);

  // Append container to #intro instead of document.body
  introContainer.appendChild(container);
};

// Ensure script runs after DOM is fully loaded
document.addEventListener("DOMContentLoaded", createContent);
