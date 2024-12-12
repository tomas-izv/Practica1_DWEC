import { generateDeck } from "./deck.js";
import { enableDragAndDrop } from './dragDrop.js';

// Initialize the deck and append it to the DOM
const deckElement = document.getElementById('deck');
generateDeck(deckElement);

// Enable drag-and-drop functionality
enableDragAndDrop(deckElement);


// const Cliente = {
//     send: ()=>{
//         fetch('http://localhost:3000/api/items', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//               name: 'Nuevo Ítem'
//             })
//           })
//             .then(response => {
//               if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//               }
//               return response.json();
//             })
//             .then(data => {
//               console.log('Ítem creado:', data);
//             })
//             .catch(error => {
//               console.error('Error al crear el ítem:', error);
//             });
          
//     }
// }

// Cliente.send();