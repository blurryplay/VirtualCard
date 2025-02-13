document.addEventListener('DOMContentLoaded', function () {
    // Wait for 5 seconds before hiding the loader and showing the main content
    setTimeout(function () {
        const loadingPage = document.getElementById('loading');
        const mainContent = document.getElementById('main-content');

        // Hide the loading screen
        loadingPage.style.display = 'none';

        // Show the main content
        mainContent.style.display = 'block';

    }, 5000);  // 5000 milliseconds = 5 seconds
});
