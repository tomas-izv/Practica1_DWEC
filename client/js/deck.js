import { suits, values, valueOrder } from './constants.js'; 

// Function to create the card elements
export function createCardElement(value, suit) {
    const card = document.createElement('div');
    card.className = 'card';
    card.draggable = true;
    card.textContent = `${value} ${suit}`;
    card.dataset.value = value;
    card.dataset.suit = suit;
    return card;
}

// Function to generate a complete deck and add it to the deck div container
export function generateDeck(deckElement) {
    console.log('Generating deck...');
    suits.forEach(suit => {
        values.forEach(value => {
            const card = createCardElement(value, suit);
            deckElement.appendChild(card);
        });
    });
}

// Function to sort cards in a container (deck or suit section)
export function sortCards(container) {
    const cards = Array.from(container.querySelectorAll('.card'));
    cards.sort((a, b) => {
        if (a.dataset.suit === b.dataset.suit) {
            return valueOrder[a.dataset.value] - valueOrder[b.dataset.value];
        }
        return suits.indexOf(a.dataset.suit) - suits.indexOf(b.dataset.suit);
    });
    cards.forEach(card => container.appendChild(card));
}