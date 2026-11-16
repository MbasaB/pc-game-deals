// Part A: small functions for working with the game list.

function isOnSale(game) {
  return game.salePrice < game.normalPrice;
}

function getOnSaleGames(list) {
  return list.filter(isOnSale);
}

function getDiscountPercentage(game) {
  if (game.normalPrice <= 0) return 0;

  const difference = game.normalPrice - game.salePrice;
  return Math.round((difference / game.normalPrice) * 100);
}

function getCheapestGame(list) {
  if (list.length === 0) return null;

  return list.reduce((cheapest, game) => {
    return game.salePrice < cheapest.salePrice ? game : cheapest;
  });
}

function searchGames(list, searchText) {
  const search = searchText.trim().toLowerCase();
  return list.filter(game => game.title.toLowerCase().includes(search));
}
