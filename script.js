const shortBtn = document.getElementById('short-btn');
const reloadBtn = document.getElementById('reload-btn');

shortBtn.addEventListener('click', () => {
    const longUrl = document.getElementById('longUrl').value; // Ensure this element exists
    const apiUrl = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl)}`;
    const shortUrlTextarea = document.getElementById("shortUrl"); // Ensure this element exists

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => shortUrlTextarea.value = data)
        .catch(error => {
            console.error('Fetch error:', error);
            shortUrlTextarea.value = "Error: Unable to shorten URL";
        });
});

reloadBtn.addEventListener('click', () => location.reload());
