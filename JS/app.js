// Function to fetch all pets
async function fetchAllPets() {
    const apiUrl = 'https://openapi.programming-hero.com/api/peddy/pets';

    try {
        const response = await fetch(apiUrl);
        // Check if the response is ok
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.pets; // Assuming pets is the key where pet data is stored
    } catch (error) {
        console.error('Error fetching pets:', error);
        // Handle errors (e.g., show an error message)
    }
}
