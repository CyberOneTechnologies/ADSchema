function groupToFolder(input) {
    // Remove 'CO_' or 'OP_' prefix from group names
    if (input.startsWith('CO_')) {
        input = input.replace('CO_', '');
    } else if (input.startsWith('OP_')) {
        input = input.replace('OP_', '');
    }

    // Replace underscores with slashes
    input = input.replace(/_/g, '/');

    // Display the result in output div
    let outputDiv = document.getElementById('output');
    outputDiv.innerText = input;

    // Log the result for debugging
    console.log(input);
}

// Expose the function to other scripts
export { groupToFolder };
