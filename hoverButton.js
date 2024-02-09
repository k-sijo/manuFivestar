// Function to show the apply form when the button is clicked
document.getElementById('applyButton').addEventListener('click', function() {
    document.getElementById('applyForm').classList.remove('hidden');
});

// Function to hide the apply form when the form is submitted
document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('applyForm').classList.add('hidden');
    
    // You can add code here to send the form data to your server using AJAX.
    // In the server-side script, you can handle the email sending and file upload.
    // Example using fetch to send data to a server (you need to replace 'server_url' with your server URL):
    
    /*
    const formData = new FormData(this);
    
    fetch('server_url', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Handle the response from the server
    })
    .catch(error => {
        console.error('Error:', error);
    });
    */
});




