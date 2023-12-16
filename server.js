const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB (replace 'your_database_url' with your MongoDB connection string)
mongoose.connect('mongodb://localhost:27017/your_database_name', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a MongoDB schema and model
const dataSchema = new mongoose.Schema({
  // Define your data structure here
  itemName: String,
  description: String,
  quantity: Number,
  squareFeet: Number,
  rate: Number,
  total: Number
  // Add more fields as needed
});

const DataModel = mongoose.model('Data', dataSchema);

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Serve static files (your HTML file)
app.use(express.static(path.join(__dirname)));

// Endpoint to store data in MongoDB
app.post('/store-data', async (req, res) => {
  try {
    const newData = new DataModel(req.body);
    await newData.save();
    res.status(200).json({ message: 'Data stored successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
