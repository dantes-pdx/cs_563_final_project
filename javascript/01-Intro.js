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

  // Create section
  const section = document.createElement("section");
  section.classList.add("text-center");

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
  part of my first term I'm taking a Web Development course to brush up on 
  web development and learn new material. My general interests
  are varied to include Computer Science topics, engaging visual graphics, 
  outdoor activities, video games any lively banter.`;
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
