const loadCSV = require('./csvLoader');

loadCSV('./path/to/your/file.csv')
    .then(data => {
        console.log(data); // logs the parsed CSV data
    })
    .catch(err => {
        console.error(err); // logs any error that occurred while reading or parsing the file
    });
