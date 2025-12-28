document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("grid");

  const score = document.getElementById("score");
  const level = document.getElementById("level");
  const enemies = document.getElementById("enemies");

  const width = 10;
  const tileSize = 48;

  const squares = [];
  let level = 1;
  let score = 0;
  let playerPosition = 40;
  let enemies = [];
  let playerDirection = "right";
  let gameRunning = true;

  // y,w,x,z = corner walls | a,b = side walls | c,d = top/bottom walls
  // ) = lanterns | ( = fire pots | % = left door | ^ = top door | $ = stairs
  // + = slicer enemy | } = skeletor enemy | (space) = empty walkable area

  const maps = [
    //level 1 layout
    [
      "ycc)cc^ccw",
      "a        b",
      "a        b",
      "a      + b",
      "a     (  b",
      "%        b",
      "a     (  b",
      "a  +     b",
      "xdd)dd)ddz",
    ][
      //level 2 layout
      ("yccccccccw",
      "a        b",
      "(        b",
      "a        b",
      "a        b",
      "a     $  b",
      "(   }    b",
      "a        b",
      "xddddddddz")
    ],
  ];

  function createBoard() {
    currentMap = maps[0];

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < width; j++) {
        const square = document.createElement("div");
        square.setAttribute("id", String(i * width + j));
        grid.appendChild(square);
      }
    }
  }
  createBoard();
});
