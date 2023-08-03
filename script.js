'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const openFolderButtons = document.querySelectorAll('.open-btn');

    if (!openFolderButtons) return;

    const toggleFolder = (button) => {
        button.closest('.file-three__item').classList.toggle('file-three__item_open');
    };

    openFolderButtons.forEach((button) =>
        button.addEventListener('click', () => {
            toggleFolder(button);
        })
    );
});
