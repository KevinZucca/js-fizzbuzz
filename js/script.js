
/* -Definire gli elementi dal DOM. Servirà un contenitore principale 
   -Creare un ciclo che generi un numero a partire da 1 fino a 100
   -All'interno del ciclo creare un nuovo elemento che sarà legato al padre contenitore
   -Dare un contenuto al nuovo elemento 
   -Stilizzare il contenuto del nuovo elemento

   
   ?SE l'elemento ha un valore multiplo di 3 conterrà la scritta "Fizz"
   ?SE ALTRIMENTI l'elemento ha un valore multiplo di 5 conterrà la scritta "Buzz"
   ?SE ALTRIMENTI l'elemento ha un valore multiplo sia di 3 che di 5 conterrà la scritta "FizzBuzz"
   :ALTRIMENTI non succede nulla e l'elemento contiene il suo numero
*/

let containerEl = document.getElementById('fizz_container');

for (let i = 1; i <= 100; i++) {
    let newEl = document.createElement('col');
    containerEl.appendChild(newEl);
    newEl.innerHTML = i;


    newEl.style.display = 'flex';
    newEl.style.justifyContent = 'center';
    newEl.style.padding = '20px';
    newEl.style.margin = '10px';
    newEl.style.border = '2px solid black';
    newEl.style.borderRadius = '15%';
    newEl.style.color = 'white';
    newEl.style.maxWidth = '100px';
    newEl.style.fontWeight = 'bold';


    


    if (i % 3 == 0 && i % 5 == 0 ) {
        newEl.innerHTML = 'Fizzbuzz';
        newEl.style.backgroundColor = '#ffd166';
    } else if (i % 3 == 0) {
        newEl.innerHTML = 'Fizz';
        newEl.style.backgroundColor = '#0cd6a1';
    } else if (i % 5 == 0 ) {
        newEl.innerHTML = "Buzz";
        newEl.style.backgroundColor = '#f0466f';
    }

    console.log(newEl.innerText);

}
