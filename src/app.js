// comment   :::::::   tsc [file-app].ts         -->  "tsc" (typescript) - create JS
/*
*   tsc -w  [file-app].ts  --> "-w"  Run the compiler in watch mode
*
*  doc (parameters):  https://www.typescriptlang.org/docs/handbook/functions.html#optional-and-default-parameters
*/
var holaMundo = "hello Mundo !!...";
//    template
var content = document.getElementById('content');
var template = {
    id: 156,
    name: "skyrider",
    completed: true
};
var backticks = "template " + template.id; /* generar (``): alt Gr + key */
// method (parametros)
function method(parameter1, parameter2) { }
method("Texto simple in string", 10);
content.innerHTML = "\n<div id='" + template.id + "'>\n    <i class=\" " + (template.completed ? " " : "hidden") + " \"></i>\n    <span> " + template.name + " </span>\n</div>\n";
