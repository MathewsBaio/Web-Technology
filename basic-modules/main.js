import { create, createReportList } from './modules/canvas.js';
import { name, draw, reportArea, reportPerimeter, randomSquare } from './modules/square.js';
import Square from './modules/square.js';
import CanvasSquare from './modules/canvas.js'

let myCanvas = create('myCanvas', document.body, 480, 320);
let reportList = createReportList(myCanvas.id);

let square1 = draw(myCanvas.ctx, 50, 50, 100, 'blue');
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);

// Use the default
let square2 = randomSquare(myCanvas.ctx);


let square3 = new Square();
let square4 = new CanvasSquare();


