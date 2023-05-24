const fs = require('fs');
const csv = require('csv-parser');

const loadCSV = (filepath) => {
    return new Promise((resolve, reject) => {
        const data = [];

        fs.createReadStream(filepath)
            .pipe(csv())
            .on('data', (row) => {
                data.push(row);
            })
            .on('end', () => {
                resolve(data);
            })
            .on('error', reject);
    });
};

module.exports = loadCSV;
