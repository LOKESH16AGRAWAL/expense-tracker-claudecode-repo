// main.js — students will add JavaScript here as features are built

// Video Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('videoModal');
    const openBtn = document.getElementById('openModal');
    const closeBtn = document.getElementById('modalClose');
    const videoFrame = document.getElementById('videoFrame');
    const videoUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ'; // Placeholder YouTube URL

    // Open modal
    if (openBtn) {
        openBtn.addEventListener('click', function(e) {
            e.preventDefault();
            modal.classList.add('active');
            videoFrame.src = videoUrl + '?autoplay=1';
            document.body.style.overflow = 'hidden';
        });
    }

    // Close modal function
    function closeModal() {
        modal.classList.remove('active');
        videoFrame.src = '';
        document.body.style.overflow = '';
    }

    // Close on close button click
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Close on overlay click (outside modal)
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});
