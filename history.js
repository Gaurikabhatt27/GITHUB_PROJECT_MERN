let history = JSON.parse(localStorage.getItem("searchHistory")) || []
let container = document.getElementById("historyList")
if(container){
history.sort((a,b) => b.time - a.time);

history.forEach(item => {
    let div = document.createElement("div");
    div.className = "history-item";

    let dateObj = new Date(item.time);

    let formattedDate = dateObj.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });

    let formattedTime = dateObj.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });

    div.innerHTML = `
    <strong>${item.query}</strong>
    <div class="date">${formattedDate}</div>
    <span class="time">${formattedTime}</span>
    `;
    

    div.addEventListener("click", () => {
        window.location.href = `search.html?q=${encodeURIComponent(item.query)}`
    });

    container.appendChild(div)
});}

// Clear Search History
function clearHistory(){
    localStorage.removeItem('searchHistory');
    container.innerHTML = "";
}

const viewedProducts = JSON.parse(localStorage.getItem("viewHistory")) || [];
const viewedContainer = document.getElementById("ViewHistoryList");
if(viewedContainer){
if (viewedProducts.length === 0) {
  viewedContainer.innerHTML = "<p>No products viewed yet</p>";
} else {
  viewedProducts.forEach(item => {
    const card = document.createElement("div");
    card.className = "viewed-card";
    let dateObj = new Date(item.time);
    

    let formattedDate = dateObj.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });

    let formattedTime = dateObj.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });

    card.innerHTML = `
      <img src="${item.thumbnail}" alt="${item.title}">
      <h4>${item.title}</h4>
      <div class="date">View Date: ${formattedDate}</div>
      <span class="time"> View Time: ${formattedTime}</span>
    `;
    // console.log("Item id: ", card.innerText);
    

    card.addEventListener("click", () => {
        
      window.location.href = `product.html?id=${item.id}`;
    });

    viewedContainer.appendChild(card);
    
  });
}}

function clearViewHistory() {
    localStorage.removeItem("viewHistory");
    const viewedContainer = document.getElementById("ViewHistoryList");
    viewedContainer.innerHTML = "<p>No products viewed yet</p>";
}
