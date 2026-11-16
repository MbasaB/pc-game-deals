# PC Game Deals

A simple website that shows PC game prices and highlights deals. Built with HTML, CSS and JavaScript.

## Features

- Displays eight games with their prices and stores.
- Shows an **ON SALE** label when the current price is lower than the normal price.
- Calculates the discount percentage for games on sale.
- Lets you search game titles without worrying about capital letters.
- Includes a checkbox to show only discounted games.
- Shows how many games match the filters and the cheapest game in the results.
- Adjusts the card layout for smaller screens.

## Running the project

1. Download the repository as a ZIP or clone it.
2. Open `index.html` in a browser.

That's it. No installation or extra packages are needed.

## Project files

| File | Purpose |
| --- | --- |
| `index.html` | Structure of the webpage |
| `style.css` | Layout and styling |
| `games.js` | Game data used by the website |
| `logic.js` | Functions for filtering, searching and calculating deals |
| `script.js` | Displays the cards and handles the search and checkbox |

## How the logic works

The functions in `logic.js` handle the main calculations:

- `getOnSaleGames()` filters games whose sale price is lower than their normal price.
- `getDiscountPercentage()` works out the percentage saved and rounds it to a whole number.
- `getCheapestGame()` finds the game with the lowest current price.
- `searchGames()` looks for a title match, ignoring letter case.

The webpage uses these functions to update the results when the search text or checkbox changes.

## Example checks

Open the browser console while viewing `index.html` and try:

```javascript
getOnSaleGames(games).length             // 6
getDiscountPercentage(games[0])          // 50
getCheapestGame(games).title             // "Portal 2"
searchGames(games, "hollow")[0].title    // "Hollow Knight"
```

## Notes

- Prices are shown in rand, using the values provided in the assessment.
- A game is on sale only if its sale price is **less than** its normal price.
- The cheapest game is based on the price currently displayed, not the original price.
- The website uses a fixed list of games. It does not fetch live prices from an API.
