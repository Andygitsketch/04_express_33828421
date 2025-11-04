// Create a new router
const express = require("express");
const router = express.Router();

// Handle the main routes

router.get("/", (req, res) => res.send("Hello World!")); 

//...etc, add your other routes here
router.get("/about", (req, res) => res.send ("<h1>This is the about page</h1>"));
router.get('/contact', (req, res) => res.send ('<h1>This is the contact page</h1>'));
router.get('/date', (req, res) => res.send ('<h1>This is the dates page</h1>'));
router.get('/welcome', (req, res) => res.send ('<h1>Welcome Andy</h1>'));
router.get('/file', (req, res) => res.send ('routes\a.html'));

// Define the /chain route with two chained handlers
router.get('/chain', firstHandler, secondHandler);
const firstHandler = (req, res,next) => {
  console.log('First handler executed');
  req.message = 'Hello from the first handler!';
  next(); // Pass control to the next handler
};

// Second handler (final response)
const secondHandler = (req, res,next ) => {
  console.log('Second handler executed');
  res.send({
    message: req.message,
    extra: 'This is from the second handler!'
  });
};





// Export the router object so index.js can access it
module.exports = router;
