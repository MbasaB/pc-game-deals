# PC Game Deals

A small website for the PC Game Deals entry assessment. It uses plain HTML, CSS and JavaScript, so it doesn't need any extra packages or framework.

## How to run it

1. Download or clone the project.
2. Open `index.html` in a web browser.
3. Search for a title or tick "Show on-sale games only" to filter the cards.

No installation or API key is needed.

## What's included

- **Part A (`logic.js`)**: `getOnSaleGames`, `getDiscountPercentage`, `getCheapestGame`, and `searchGames`.
- **Part B (`index.html`, `script.js`, `style.css`)**: lists the game deals, their sale prices, and an ON SALE badge only when a game has a discount.
- **Part C**: live search as you type, a filter for on-sale games, a result count, and basic responsive styling. The data is local; CheapShark API integration was not attempted.
- **Part D**: enter a personal write-up in the application form about your process, choices, obstacles, resources, time spent and assumptions.

## Assumptions

- A game is on sale only when `salePrice < normalPrice`.
- The cheapest game is determined by the price you would pay now (`salePrice`).
- Discounts are rounded to the nearest whole percent.
- Prices are treated as rand because that is what the brief specifies.
- Searches are case-insensitive and match part of a title.

## Files

- `games.js` — the supplied game data.
- `logic.js` — functions for working with the data (Part A).
- `script.js` — creates the game cards and handles the filters.
- `style.css` — page styling.
- `index.html` — the web page.

## Example checks

Open the browser developer console after opening `index.html`:

```javascript
getOnSaleGames(games).length              // 6
getDiscountPercentage(games[0])           // 50
getCheapestGame(games).title               // "Portal 2"
searchGames(games, "HOLLOW")[0].title     // "Hollow Knight"
```
