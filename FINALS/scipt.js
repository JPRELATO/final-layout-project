document.addEventListener('DOMContentLoaded', function () {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');
    const closeBtn = document.querySelector('.close');

    // Toggle sidebar visibility
    sidebarToggle.addEventListener('click', function () {
        sidebar.classList.toggle('hidden');
    });

    // Smooth scroll
    document.querySelectorAll('a[href^="#
