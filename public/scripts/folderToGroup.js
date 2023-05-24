function folderToGroup(input) {
    // Assume all Corporate folders start with 'C' and all Operations folders start with 'O'
    // This can be adjusted as per your requirements
    if (input.startsWith('C')) {
        input = 'CO_' + input;
    } else if (input.startsWith('O')) {
        input = 'OP_' + input;
    }

    // Replace folder structure symbols with underscores
    input = input.replace(/\//g, '_').replace(/\\/g, '_');

    // Display the result in output div
    let outputDiv = document.getElementById('output');
    outputDiv.innerText = input;

    // Log the result for debugging
    console.log(input);
}

// Expose the function to other scripts
export { folderToGroup };
