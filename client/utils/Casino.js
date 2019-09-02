import card from "../js/CardDeck";

export const createGame = (start = false, type = 4) => {
  game = {
    start: start,
    type: type,
    board: createBoard()
  };
  return game;
};
export const createPlayer = name => {
  let player = {
    name: name,
    hand: [],
    gamedeck: [],
    display: [],
    score: 0
  };
  return player;
};
export const createBoard = players => {
  board = {
    deck: createDeck(),
    players: players,
    turn: "",
    tableCards: [],
    score: {}
  };
  return board;
};
export const createDeck = () => {
  cards = {
    deck: card(),
    hands: []
  };
  return cards;
};
export const createHand = (deck, name, num) => {
  let hand = [];
  for (let i = 0; i < num; i++) {
    hand.push(deck.unshift(i));
  }
  deck.hands.push({ player: name, hand: hand });
  return deck;
};
export const start = players => {
  let num = 6;
  let board = board(players);
  board.players.length <= 1 ? board.players.push(players("CPU")) : null;

  board.players = players;
  board.players.map(player => deal(num, board, player));
  board.players.push(players);
};
export const deal = board => {
  board.players.forEach(
    player => (board.deck = createHand(board.deck, player.name))
  );
  return board;
};

export const playCard = (player, card) => {
  let card = player.hand.filter(card => card === card.image);
  player.hand.display = card.pop;
  return player.hand.display;
};
