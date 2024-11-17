const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');

// Import models (ensure paths are correct)
const Domain = require('../server/models/domain');  // Import the Domain model
const Result = require('../server/models/results');
const Event = require("./models/Event");  // Import the Result model (ensure it's defined correctly)

const app = express();
const port = 5001;

// MongoDB connection string (update with your MongoDB URI)
mongoose.connect('mongodb://localhost:27017/club', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log('MongoDB connection error:', err));

// Middleware to parse JSON
app.use(express.json());

// CORS middleware
app.use(cors());

// Route to get domain by ID
app.get('/result/:clubName', async (req, res) => {
    try {
        // const objectId = new ObjectId(req.params.clubName); // Convert string to ObjectId
        const objectId = req.params.clubName;

        // Fetch the result based on the objectId
        const result = await Result.findOne({ clubName: objectId});
        // const result = await Result.findAll();

        if (result) {
            res.json(result);  // Return the result if found
        } else {
            res.status(404).send('Result not found');  // Return 404 if no result is found
        }
    } catch (err) {
        console.error('Error fetching result:', err);  // Log the error in detail
        res.status(500).send(err.message);  // Return a 500 error if something goes wrong
    }
});


// Route to get results by clubName
app.get('/results/:clubName', async (req, res) => {
    try {
        const { clubName } = req.params;
        console.log('Received clubName:', clubName);  // Log the clubName for debugging

        // Fetch the result for the clubName (domain field matches clubName in your model)
        const result = await Result.findOne({ domain: clubName });

        if (result) {
            res.json(result); // Return the result if found
        } else {
            res.status(404).send(`No results found for club: ${clubName}`); // Return 404 if not found
        }
    } catch (err) {
        console.error('Error fetching result:', err);  // Log the error in detail
        res.status(500).send(err.message); // Return a 500 error if something goes wrong
    }
});

// Route to add new result
app.post('/result/:clubName', async (req, res) => {
    try {
        const newResult = new Result(req.body);  // Create a new result with the incoming data

        // Save the new result to the database
        const savedResult = await newResult.save();

        if (savedResult) {
            res.json(savedResult);  // Return the saved result if successful
        } else {
            res.status(404).send('Failed to save result');  // Return 404 if saving fails
        }
    } catch (err) {
        console.error('Error saving result:', err);  // Log the error
        res.status(500).send(err.message);  // Return a 500 error if there's an issue
    }
});

// Add an event with category and reminder
app.post("/calendar/events", async (req, res) => {
    const { title, date, description, category, reminder } = req.body;
  
    try {
      const newEvent = new Event({ title, date, description, category, reminder });
      await newEvent.save();
      console.log("Event saved to MongoDB:", newEvent);
      res.status(201).json(newEvent);
    } catch (err) {
      console.error("Error saving event:", err.message);
      res.status(500).send("Server Error: " + err.message);
    }
  });
  
  // Get all events
  app.get("/calendar/events", async (req, res) => {
    try {
      const events = await Event.find();
      res.json(events);
    } catch (err) {
      res.status(500).send(err.message);
    }
  });
  
  // Catch all other routes
  app.all("*", (req, res) => {
    res.status(404).send("Route not found");
  });
  
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});