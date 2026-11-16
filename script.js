// Parts B and C: display the games and update them when filters change.

const searchInput = document.getElementById("search");
const saleCheckbox = document.getElementById("sale-only");
const gamesContainer = document.getElementById("games");
const resultCount = document.getElementById("result-count");
const cheapestText = document.getElementById("cheapest-game");

function priceInRand(amount) {
  return "R" + amount.toFixed(2);
}

function makeGameCard(game) {
  const card = document.createElement("article");
  card.className = "game-card";

  const topRow = document.createElement("div");
  topRow.className = "card-top";

  const store = document.createElement("span");
  store.className = "store";
  store.textContent = game.store;
  topRow.appendChild(store);

  if (isOnSale(game)) {
    const saleTag = document.createElement("span");
    saleTag.className = "sale-tag";
    saleTag.textContent = "ON SALE";
    topRow.appendChild(saleTag);
  }

  const title = document.createElement("h2");
  title.textContent = game.title;

  const prices = document.createElement("div");
  prices.className = "prices";

  const currentPrice = document.createElement("strong");
  currentPrice.textContent = priceInRand(game.salePrice);
  prices.appendChild(currentPrice);

  if (isOnSale(game)) {
    const oldPrice = document.createElement("del");
    oldPrice.textContent = priceInRand(game.normalPrice);
    prices.appendChild(oldPrice);

    const discount = document.createElement("span");
    discount.className = "discount";
    discount.textContent = getDiscountPercentage(game) + "% off";
    prices.appendChild(discount);
  }

  card.append(topRow, title, prices);
  return card;
}

function showGames() {
  let results = searchGames(games, searchInput.value);

  if (saleCheckbox.checked) {
    results = getOnSaleGames(results);
  }

  gamesContainer.replaceChildren();
  resultCount.textContent = results.length + (results.length === 1 ? " game found" : " games found");

  if (results.length === 0) {
    const message = document.createElement("p");
    message.className = "empty-message";
    message.textContent = "No games found. Try a different search.";
    gamesContainer.appendChild(message);
    cheapestText.textContent = "";
    return;
  }

  results.forEach(game => gamesContainer.appendChild(makeGameCard(game)));

  const cheapest = getCheapestGame(results);
  cheapestText.textContent = "Cheapest shown: " + cheapest.title + " (" + priceInRand(cheapest.salePrice) + ")";
}

searchInput.addEventListener("input", showGames);
saleCheckbox.addEventListener("change", showGames);
showGames();
