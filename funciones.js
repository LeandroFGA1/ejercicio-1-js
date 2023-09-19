///1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar. hola
function esParOImpar (num){
    if (num % 2 ===0){
        console.log("es par");
    }else{
        console.log("no es un numero");
    }
}
///2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.
function mayorMenorIgual(num1,num2){
    if (num1 > num2){
        console.log(num1 + " es mayor que "+num2);
    }else{
        if (num1 < num2){
            console.log(num2 + " es mayor que "+num1);
        }else{
            console.log(num1+" es igual en ambos parametros");
        }

    }

}
///3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.
function multiploDeCinco(num){
    if (num % 5 ===0){
        console.log(num+" es multiplo de 5");
    }else{
        console.log(num +" no es multiplo de 5");
    }
}
///4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
function desdeCero(num){
    if (num >= 0){
        for (let contador = 0; contador <=num; contador++){
            console.log(contador);
        }
    }else{
        for (let contador =0; contador >=num;contador--){
            console.log(contador);
        }
    }
    
}
///5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.
function imprimirPalabra(palabra,num){
    if (( typeof palabra ==="string") && (typeof num ==="number")){
        if (num > 0){
            for (let contador = 1; contador <= num;contador++){
                console.log(palabra);
            }
        }else{
            console.log("el numero debe ser 1 o mayor");
        }
    }else{
        console.log("el primer parametro debe ser un string y el segundo un numero");
    }
}
///6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
function imprimirArray(array){
    if (Array.isArray(array)){
        for(let contador = 0;contador <= array.length-1;contador++){
            console.log(array[contador]);
        }
    }else{
        console.log("no es un array");
    }
}
///7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".
function imprimerArrayMenosElQuinto(array){
    if (Array.isArray(array)){
        if( array.length === 10){
            for (let contador =0;contador < array.length; contador++){
                if (typeof array[contador] ==="number"){
                    if (contador ===4){
                    }else{
                        console.log(array[contador]);
                    }
                    
                }else{
                    console.log("el tipo de dato no es un numero, no se seguira imprimiendo el array");
                    break;
                }
            }
        }else{
            console.log("no cumple el tamaño de 10 elementos numericos")
        }
    }
}
///8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.
function arrayPorNumero (array,num){
    if(Array.isArray(array) && (typeof num ==="number")){
        for (let contador = 0; contador <= array.length-1;contador++){
            if( typeof array[contador] ==="number"){
                console.log(array[contador]*num);
            }else{
                console.log("el tipo de dato no es un numero, se finalizara la impresion");
                break;
            }
        }
    }else{
        console.log("la primera variable debe ser un array y la segunda un numero");
    }
}


esParOImpar(11);
mayorMenorIgual(10,11);
multiploDeCinco(200);
desdeCero(-3);
imprimirPalabra("hola",3);
imprimirArray(["adios",2,true,19,13]);
imprimerArrayMenosElQuinto([20,30,10,40,60,50,90,70,80,100]);
arrayPorNumero([1,2,3,4],10);
