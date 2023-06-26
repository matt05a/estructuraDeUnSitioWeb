const express = require('express');
const path = require('path');
const app = express ();
const PORT = 3000;

app.use(express.static('public'));

app.get('/',(erq, res) => 
 res.sendFile(path.join(__dirname,'views','home.html')))

app.listen(PORT, () => console.log(`server running in http://localhost:${PORT}`))