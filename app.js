document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("grid");

    const scoreDisplay = document.getElementById("score");
    const levelDisplay = document.getElementById("level");
    const enemiesDisplay = document.getElementById("enemies");

    const width = 10;
    const tileSize = 48;

    const squares = []
    let score = 0
    let level = 0
    let playerPosition = 40
    let enemies = []
    let playerDirection = 'right'
    let gameRunning = true

    // y,w,x,z = corner walls | a,b = side walls | c,d = top/bottom walls
    // ) = lanterns | ( = fire pots | % = left door | ^ = top door | $ = stairs
    // + = slicer enemy | } = skeletor enemy | (space) = empty walkable area

    const maps = [
        // level 1 layout
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
        ],
        // level 2 layout
        [
            "yccccccccw",
            "a        b",
            "(        b",
            "a        b",
            "a        b",
            "a     $  b",
            "(   }    b",
            "a        b",
            "xddddddddz"
        ],
    ];

    function createBoard() {

        const currentMap = maps[level]
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 10; j++) {
                const square = document.createElement('div')
                square.setAttribute('id', i * width + j)
                const char = currentMap[i][j]
                addMapElement(square, char, j, i)
                grid.appendChild(square)
                squares.push(square);
            }
        }
    }
    createBoard();

    function addMapElement(square, char, x, y) {
        switch (char) {
            case "a":
                square.classList.add("left-wall");
                break;
            case "b":
                square.classList.add("right-wall");
                break;
            case "c":
                square.classList.add("top-wall");
                break;
            case "d":
                square.classList.add("bottom-wall");
                break;
            case "x":
                square.classList.add("bottom-left-wall");
                break;
            case "y":
                square.classList.add("top-left-wall");
                break;
            case "w":
                square.classList.add("top-right-wall");
                break;
            case "z":
                square.classList.add("bottom-right-wall");
                break;
            case "%":
                square.classList.add("left-door");
                break;
            case "^":
                square.classList.add("top-door");
                break;
            case "$":
                square.classList.add("stairs");
                break;
            case ")":
                square.classList.add("lantern");
                break;
            case "(":
                square.classList.add("fire-pot");
                break;
            case "*":
                //create slicer enemy
                break;
            case "}":
                //create skeletor enemy
                break;
            case " ":
                //empty walkable area
                break;
        }

    }
});
