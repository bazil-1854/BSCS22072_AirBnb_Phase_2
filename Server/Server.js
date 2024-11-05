const express = require('express'); 
const app = express();
const cors = require('cors');
const PORT = 3001;
 
app.use(cors());
app.use(express.json());

const listingsData = require('./listingData');  

// Data 
app.get('/api/listings', (req, res) => {
    res.json(listingsData);
});


app.listen(PORT, () => {
    console.log(`Server is on http://localhost:${PORT}`);
});