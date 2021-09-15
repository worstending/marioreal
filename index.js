window.addEventListener("load", (event) => {
    const ruffle = window.RufflePlayer.newest();
    const player = ruffle.createPlayer();
    document.body.append(player);
    player.load("mario-lost-in-space.swf");
});