//if Statements
/*
         if(boolean_expression) {  
           // statement(s) will execute (if the boolean expression is true)
        } else if(boolean_expression2) {  
           // statement(s) will execute (if the boolean expression2 is true)
        } else {
           // statement(s) will execute (if the boolean expression is false )
        }
*/
var satement = function (numero = 10){
    
    if(numero == 10){
        return "el número es igual a 10";
    }else if(numero > 10){
        return "el número es mayor a 10";
    }else{
        return ""+numero;
    }
    
};