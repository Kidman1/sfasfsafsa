document.addEventListener('DOMContentLoaded', () => {
    const player = document.getElementById('player');

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            movePlayer(10);
        } else if (event.key === 'ArrowLeft') {
            movePlayer(-10);
        }
    });

    function movePlayer(offset) {
        const playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue('left'));
        const newLeft = playerLeft + offset;
        if (newLeft >= 0 && newLeft <= 750) { // Adjust 750 to fit your game area width
            player.style.left = newLeft + 'px';
        }
    }
});
