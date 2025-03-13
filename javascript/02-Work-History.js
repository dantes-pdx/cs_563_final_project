let starships = [];

// Fetch starship data from SWAPI
const fetchData = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      starships = data.results;
    })
    .catch((err) => console.error("Error:", err));

// Create a spaceship component using a <section> element (do not modify the container creation)
const createSpaceshipComponent = (ship) => {
  const container = document.createElement("section"); // do not modify this line
  container.style =
    "border:1px solid #ccc; border-radius:10px; margin:10px; padding:10px; width:200px; background:#f9f9f9; text-align:center;";
  container.innerHTML = `<h3>${ship.name}</h3>
          <p>Cost: ${ship.cost_in_credits} credits</p>
          <p>Manufacturer: ${ship.manufacturer}</p>
          <p>Crew: ${ship.crew}</p>
          <p>Passengers: ${ship.passengers}</p>`;
  return container; // do not modify this line
};

// Filter starships to those with fewer than 10 passengers and more than 1 crew member
const filterStarships = (ships) =>
  ships.filter(
    (ship) =>
      (parseInt(ship.passengers) || 0) < 10 && (parseInt(ship.crew) || 0) > 1
  );

// Calculate the total cost of all starships in the array
const reduceStarships = (ships) => {
  const totalCost = ships.reduce(
    (acc, ship) => acc + (parseInt(ship.cost_in_credits) || 0),
    0
  );
  return `The cost of all starships is ${totalCost.toLocaleString()} credits`;
};

// Instead of removing the results container, just clear its contents
const clearAndReset = () => {
  const app = document.getElementById("results");
  app.innerHTML = "";
  app.style.cssText = "display:flex; flex-wrap:wrap; justify-content:center;";
};

// Display an array of starship components inside the results container
const displayShipComponents = (ships) => {
  clearAndReset();
  const app = document.getElementById("results");
  ships.forEach((ship) => app.appendChild(createSpaceshipComponent(ship)));
};

// Display a text message (e.g., total cost) in the results container
const displayText = (text) => {
  clearAndReset();
  const app = document.getElementById("results");
  const p = document.createElement("p");
  p.textContent = text;
  p.style.cssText =
    "background:white; border-radius:10px; padding:30px; margin:10px;";
  app.appendChild(p);
};

// Add event listeners to the buttons
document
  .getElementById("all")
  .addEventListener("click", () => displayShipComponents(starships));
document
  .getElementById("filter")
  .addEventListener("click", () =>
    displayShipComponents(filterStarships(starships))
  );
document
  .getElementById("reduce")
  .addEventListener("click", () => displayText(reduceStarships(starships)));

// Fetch starship data when the page loads
fetchData("https://swapi.dev/api/starships/");
