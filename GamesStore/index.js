const express = require('express');

const app = express();

app.get('/HomePage', (req, res)=>{
    console.log('Loja de Jogos');
    res.send('EM DESENVOLVIMENTO🧙');

})

app.get('/Loja', (req, res)=>{

    console.log('Loja de Jogos');
    res.send('EM DESENVOLVIMENTO✔️');


})

app.listen(3000, ()=>{
    console.log('SERVIDOR RODANDO EM: http://localhost:3000');
});

// ⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⡀⠠⠤⠀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⣀⢤⡒⠉⠁⠀⠒⢂⡀⠀⠀⠀⠈⠉⣒⠤⣀⠀⠀⠀⠀
// ⠀⠀⣠⠾⠅⠈⠀⠙⠀⠀⠀⠈⠀⠀⢀⣀⣓⡀⠉⠀⠬⠕⢄⠀⠀
// ⠀⣰⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡤⠶⢦⡀⠑⠀⠀⠀⠀⠈⢧⠀
// ⠀⡇⠀⠀⠀⠀⠀⢤⣀⣀⣀⣀⡀⢀⣀⣀⠙⠀⠀⠀⠀⠀⠀⢸⡄
// ⠀⢹⡀⠀⠀⠀⠀⡜⠁⠀⠀⠙⡴⠁⠀⠀⠱⡄⠀⠀⠀⠀⠀⣸⠀
// ⠀⠀⠱⢄⡀⠀⢰⣁⣒⣒⣂⣰⣃⣀⣒⣒⣂⢣⠀⠀⠀⢀⡴⠁⠀
// ⠀⠀⠀⠀⠙⠲⢼⡀⠀⠙⠀⢠⡇⠀⠛⠀⠀⣌⣀⡤⠖⠉⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⢸⡗⢄⣀⡠⠊⠈⢦⣀⣀⠔⡏⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠈⡇⠀⢰⠁⠀⠀⠀⢣⠀⠀⣷⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⣠⠔⠊⠉⠁⡏⠀⠀⠀⠀⠘⡆⠤⠿⣄⣀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⣧⠸⠒⣚⡩⡇⠀⠀⠀⠀⠀⣏⣙⠒⢴⠈⡇⠀⠀⠀⠀
// ⠀⠀⠀⠀⠈⠋⠉⠀⠀⢳⡀⠀⠀⠀⣸⠁⠈⠉⠓⠚⠁⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠓⠛⠛