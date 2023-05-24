document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('input-form');
    const outputDiv = document.getElementById('output');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const input = document.getElementById('input').value;

        // Check if input starts with 'CO' or 'OP' (adjust this according to your exact requirements)
        if (input.startsWith('CO') || input.startsWith('OP')) {
            // Call function from groupToFolder.js to handle input
            // groupToFolder(input);
        } else {
            // Call function from folderToGroup.js to handle input
            // folderToGroup(input);
        }

        // Clear the input field
        document.getElementById('input').value = '';
    });
});
