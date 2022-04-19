const fs = require('fs')
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Give someting for .cmd?', input => {
    console.log(`Your input: ${input}`);
    readline.close();
    fs.writeFile('YOUR ABSOLUTE PATH', input, err => {
        if (err) {
            console.error(err)
            return
        }
    })
});


