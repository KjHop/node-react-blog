const express = require('express');
const fs = require('fs');

module.exports = app =>{
    app.get('/postNumber', (request, response)=>{
        let postNumber;
        fs.readFile("./config/postNumber.txt", 'utf8', (err, content)=>{
            if (err) throw err;
            console.log(content);
            postNumber = content;
            fs.writeFile("./config/postNumber.txt", parseInt(postNumber+1), (err)=>{
                if (err) throw err;
                console.log('Zaktualizowano numer postu')
            })
        });
    });
}