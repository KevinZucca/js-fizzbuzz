
/* -Definire gli elementi dal DOM. Servirà un contenitore principale 
   -Creare un ciclo che generi un numero a partire da 1 fino a 100
   -All'interno del ciclo creare un nuovo elemento che sarà legato al padre contenitore
   -Dare un contenuto al nuovo elemento 
   
   ?SE l'elemento ha un valore multiplo di 3 conterrà la scritta "Fizz"
   ?SE ALTRIMENTI l'elemento ha un valore multiplo di 5 conterrà la scritta "Buzz"
   ?SE ALTRIMENTI l'elemento ha un valore multiplo sia di 3 che di 5 conterrà la scritta "FizzBuzz"
   :ALTRIMENTI non succede nulla e l'elemento contiene il suo numero
*/

let containerEl = document.getElementById('container');

for (let i = 1; i <= 100; i++) {
    let newEl = document.createElement('div');
    newEl.innerHTML = i;
    containerEl.appendChild(newEl);
    console.log(newEl.innerHTML);
}
