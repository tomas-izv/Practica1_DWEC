import { sortCards } from './deck.js';
import { arrangeInColumns } from './layout.js';
import { saveCardState } from './state.js';

export function enableDragAndDrop(deckElement) {
    const suitSections = document.querySelectorAll('.suit-section');

    document.addEventListener('dragstart', event => {
        if (event.target.classList.contains('card')) {
            event.dataTransfer.setData('value', event.target.dataset.value);
            event.dataTransfer.setData('suit', event.target.dataset.suit);
            event.target.classList.add('dragging');
        }
    });

    document.addEventListener('dragend', event => {
        if (event.target.classList.contains('card')) {
            event.target.classList.remove('dragging');
        }
    });

    // Make suit sections drop targets
    suitSections.forEach(section => {
        section.addEventListener('dragover', event => {
            event.preventDefault();
            section.classList.add('over');
        });

        section.addEventListener('dragleave', () => {
            section.classList.remove('over');
        });

        section.addEventListener('drop', event => {
            event.preventDefault();
            const draggedCardSuit = event.dataTransfer.getData('suit');
            const sectionSuit = section.id;

            if (draggedCardSuit === sectionSuit) {
                const card = document.querySelector('.card.dragging');
                section.appendChild(card);
                sortCards(section);
                arrangeInColumns(section, Array.from(section.querySelectorAll('.card')));
            }
            section.classList.remove('over');
        });
    });

    // Make deck a drop target
    deckElement.addEventListener('dragover', event => {
        event.preventDefault();
        deckElement.classList.add('over');
    });

    deckElement.addEventListener('dragleave', () => {
        deckElement.classList.remove('over');
    });

    deckElement.addEventListener('drop', async (event) => {
        event.preventDefault();
        const card = document.querySelector('.card.dragging');
        // if (card) {
        //     deckElement.appendChild(card);

        //     // Save the current state of cards after a drop
        //     const state = {};
        //     suits.forEach(suit => {
        //         const suitId = suit.id;
        //         [...suit.children].forEach(card => {
        //             state[card.id] = suitId;
        //         });
        //     });
        //     await saveCardState(state);
        // }
        deckElement.appendChild(card);
        const state = {};
        sortCards(deckElement);
        deckElement.classList.remove('over');
        await saveCardState(state);
    });
}