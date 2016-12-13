// comment   :::::::   tsc [file-app].ts         -->  "tsc" (typescript) - create JS

/*
*   tsc -w  [file-app].ts  --> "-w"  Run the compiler in watch mode
*
*  doc (parameters):  https://www.typescriptlang.org/docs/handbook/functions.html#optional-and-default-parameters
*/

let holaMundo: string = "hello Mundo !!..."


//    template
var content = document.getElementById( 'content' );
var template= { 
        id: 156,
        name: "skyrider",
        completed: true
}
let backticks: string = `template ${template.id}`; /* generar (``): alt Gr + key */

// method (parametros)
function method( parameter1:string, parameter2){  }
method("Texto simple in string", 10);

content.innerHTML = `
<div id='${template.id}'>
    <i class=" ${ template.completed ? " ": "hidden" } "></i>
    <span> ${template.name} </span>
</div>
`;

