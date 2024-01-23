document.getElementById('generate').addEventListener('click', generateName);

async function generateName() {
    showLoader(); // Show loader when button is clicked

    try {
        const response = await fetch('/api/generateName'); // Make the request to your Node.js backend
        const data = await response.json();
        document.getElementById('nameDisplay').value = data.name; // Update the display with the name
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('nameDisplay').value = 'Error generating name.';
    } finally {
        hideLoader(); // Hide the loader after the response is received or an error occurs
    }
}

function showLoader() {
    document.getElementById('loader').style.display = 'block';
}

function hideLoader() {
    document.getElementById('loader').style.display = 'none';
}

document.getElementById('copyButton').addEventListener('click', function() {
    const name = document.getElementById('nameDisplay').value;
    navigator.clipboard.writeText(name).then(() => {
        // Optional: Display a message or change the button text briefly
        this.textContent = 'Copied!';
        setTimeout(() => this.textContent = 'Copy', 1000); // Change back after 1 second
    }).catch(err => {
        console.error('Error in copying text: ', err);
    });
});
