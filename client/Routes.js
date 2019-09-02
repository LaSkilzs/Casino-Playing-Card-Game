import Game from "./game/Game";
import Board from "./game/Board";
import Deck from "./game/Deck";
import Players from "./game/Players";
import Home from "./js/Home";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/game",
    exact: true,
    component: Game
  },
  {
    path: "/board",
    exact: true,
    component: Board
  },
  {
    path: "/deck",
    exact: true,
    component: Deck
  },
  {
    path: "/players",
    exact: true,
    component: Players
  }
];

export default routes;
