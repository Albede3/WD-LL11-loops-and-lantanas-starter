// Initial rendering logic – to be refactored during the lab
function addStations(stations) {
  stations.slice().reverse()
    .map(addStationElement); // Call addStationElement for each station
}

// 🧪 TEAM FEATURES

// 💌 Wishlist Renderer
function renderWishlist() {
  const wishlistSection = document.getElementById("wishlist");
  // Example wishlist array (replace or update as needed)
  const wishlist = [
    "Butterfly Garden",
    "Shaded Picnic Area",
    "Dog Park"
  ];
  // Clear previous items and add heading
  wishlistSection.innerHTML = "<h2>Wishlist Items</h2>";
  // Create a list element
  const ul = document.createElement("ul");
  wishlist.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
  wishlistSection.appendChild(ul);
}

// ❌ Search Feedback
function searchStations(query) {
  const results = stations.filter(station =>
    station.name.toLowerCase().includes(query.toLowerCase())
  );

  const stationList = document.getElementById("station-list"); // Assuming this is where stations are rendered
  stationList.innerHTML = ""; // Clear current display

  if (results.length === 0) {
    stationList.innerHTML = `<p>No stations found for "<strong>${query}</strong>".</p>`;
  } else {
    addStations(results);
  }
}

// 🌟 Random Featured Station
function pickFeaturedStation() {
  // TODO: Use Math.random to select and display a station
}

// 🏙️ Group by City
function groupStationsByCity() {
  // TODO: Loop through stations and group under each city
  const cityGroups = {};

  stations.forEach(station => {
    const city = station.location; // assuming 'location' is the city name
    if (!cityGroups[city]) {
      cityGroups[city] = [];
    }
    cityGroups[city].push(station);
  });
  
  const groupedSection = document.getElementById("grouped-stations");
  groupedSection.innerHTML = "<h2>Stations Grouped by City</h2>";
}

// 🔄 Filter Toggle
function toggleFilteredStations() {
  // TODO: Add toggle logic to filter stations dynamically
}

// Load stations on page start
addStations(stations);
renderWishlist(); 
