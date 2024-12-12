const API_BASE_URL = 'http://localhost:3000'; // Replace with your backend's URL

export async function fetchCardState() {
    try {
        const response = await fetch(`${API_BASE_URL}/getCardState`);
        if (response.ok) {
            return await response.json();
        }
        console.error('Failed to fetch card state:', response.status);
        return {};
    } catch (error) {
        console.error('Error fetching card state:', error);
        return {};
    }
}

export async function saveCardState(state) {
    try {
        const response = await fetch(`${API_BASE_URL}/saveCardState`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(state),
        });
        if (!response.ok) {
            console.error('Failed to save card state:', response.status);
        }
    } catch (error) {
        console.error('Error saving card state:', error);
    }
}
