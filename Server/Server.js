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

//Data of a file
app.get('/api/listings/:id', (req, res) => {
    const listing = listingsData.find(listing => listing.id === parseInt(req.params.id));
    if (listing) {
        res.json(listing);
    } else {
        res.status(404).json({ error: 'Listing not found' });
    }
});


app.listen(PORT, () => {
    console.log(`Server is on http://localhost:${PORT}`);
});