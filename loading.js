const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs'); // Set EJS as the view engine

app.get('/', (req, res) => {
    const data = {
        loadingText: 'Please wait here'
    };
    res.render('loading', data); // Render the 'loading.ejs' template with data
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
