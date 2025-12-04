let cataasjson = "https://cataas.com/cat?json=true";

async function loadCatImage(elementId) {
    try {
        const response = await fetch(cataasjson);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const imageUrl = `${data.url}`;
        document.getElementById(elementId).style.backgroundImage = `url(${imageUrl})`;
        console.log('Cat image loaded:', imageUrl);
    }
    catch (error) {
        console.error('Error fetching cat image:', error);
        document.getElementById(elementId).alt = "Failed to load cat image";
    }
}