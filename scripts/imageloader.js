let cataasjson = "https://cataas.com/cat?json=true"




async function loadCatImage() {
    try {
        const response = await fetch(cataasjson);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        const imageUrl = `${data.url}`;
        console.log(imageUrl);
        document.getElementById("catImage").src = imageUrl;
    }
    catch (error) {
        console.error('Error fetching cat image:', error);
        document.getElementById("catImage").alt = "Failed to load cat image";
    }
}

loadCatImage();