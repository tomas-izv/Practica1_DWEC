// Function to arrange cards in columns within a section
export function arrangeInColumns(section, cards) {
    const columns = [[], [], []]; // For 2 columns of 5 and 1 column of 3
    cards.forEach((card, index) => {
        if (index < 5) columns[0].push(card); // First column
        else if (index < 10) columns[1].push(card); // Second column
        else columns[2].push(card); // Third column
    });

    // Clear the section and arrange columns
    const columnWrapper = document.createElement('div');
    columnWrapper.classList.add('columns');
    section.appendChild(columnWrapper);

    columns.forEach(col => {
        const columnDiv = document.createElement('div');
        columnDiv.classList.add('column');
        col.forEach(card => columnDiv.appendChild(card));
        columnWrapper.appendChild(columnDiv);
    });
}