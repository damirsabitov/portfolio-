document.querySelectorAll('.portfolio__link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor click behavior
        const modal = document.getElementById('imageModal');
        const modalImage = document.getElementById('modalImage');
        modal.style.display = "block"; // Show the modal
        modalImage.src = this.href; // Set the modal image source
    });
});

document.getElementById('closeModal').addEventListener('click', function() {
    const modal = document.getElementById('imageModal');
    modal.style.display = "none"; // Hide the modal
});

// Close the modal when clicking anywhere outside the image
window.addEventListener('click', function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target === modal) {
        modal.style.display = "none"; // Hide the modal
    }
});