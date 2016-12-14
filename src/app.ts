/*
* Variable Declarations
*/

// " var "  declarations  (is scoped to the nearest function block )
var diez = 10; 
var sumas = 12 + diez;
var string = "var [name] = value";
var ten = a();
function a(){
    return diez;
}

    //  var-scoping or function-scoping (especificando-)
    
    function f(value: boolean){
        if(value){
            sumas = 15;
        }
        return sumas;
    }
    // f(true) --> 15  (return)
    // f(false) --> undefined (return)

    // Variable capturing quirks
    for( var i=0; i<diez; i++ ){
        setTimeout( function(){ console.log(i); }, 100*i );
    }
    // 10
    // 10
    // 10
    // 10
    // 10
    // 10
    // 10
    // 10
    // 10
    // 10




// " let " declarations (  is scoped to the nearest enclosing block (both are global if outside any block), which can be smaller than a function block. )
//let var1 [= valor1] [, var2 [= valor2]] [, ..., varN [= valorN]];

let hello = "Hello! ";
let numero: number = 10; // Function declarations
let texto: string = "Text"; // Function declarations


    //Block-scoping
    function f(value: boolean){
        
        if(value){
            let valor = 10+ diez; // `valor` block-scoped to `if` block!
            console.log(valor); // 20 (result)    
        }
        
        console.log(valor); // ReferenceError: `valor` is undefined
    }
    
    // Re-declarations and Shadowing
    let valor2 = 20;
    let valor2 = 30; // ERROR: can't re-declare 'x' in the same scope
    
    let valor3 = 40;
    var valor3 = 40; // ERROR: can't have both declarations of 'x'

    function other(condicion, x){
        
        if(condicion){
            let x = 20;
            return x;
        }
        return x;
    }
    // other(false, 10);   --> 10
    // other(true, 10);   --> 20

    //Block-scoped variable capturing
    function f(){
        let environment;
        
        if(true){
            let texto = "captured";
            environment = function(){
                return texto;
            }
        }
        
        return environment;
    }
    



// " const " declarations (constant cannot change through re-assignment, and it can't be redeclared. )
// const name1 = value1 [, name2 = value2 [, ... [, nameN = valueN]]];

const key = 'FZRD124 ';

    const person = {
        name: 'SkyRider',
        year: 24
    }

//    person.name = Fred Pizarro
    // If you do need to freeze everything, we have something called Object.freeze. It’s actually not part of ES6
    const ahda = Object.freeze(person);
