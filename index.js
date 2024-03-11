// Import required modules
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Define middleware for JSON parsing
app.use(express.json());

// Define routes
// GET /api/employees - returns array of employees
app.get('/api/employees', (req, res) => {
    // Implement logic to retrieve array of employees from the database
    res.json({ message: 'GET /api/employees route reached' });
});

// GET /api/departments - returns an array of departments
app.get('/api/departments', (req, res) => {
    // Implement logic to retrieve array of departments from the database
    res.json({ message: 'GET /api/departments route reached' });
});

// POST /api/employees - payload: the employee to create, returns the created employee
app.post('/api/employees', (req, res) => {
    // Implement logic to create a new employee based on request payload
    res.json({ message: 'POST /api/employees route reached' });
});

// DELETE /api/employees/:id - the id of the employee to delete is passed in the URL, returns nothing
app.delete('/api/employees/:id', (req, res) => {
    const employeeId = req.params.id;
    // Implement logic to delete the employee with the specified ID
    res.json({ message: `DELETE /api/employees/${employeeId} route reached` });
});

// PUT /api/employees/:id - payload: the updated employee returns the updated employee
app.put('/api/employees/:id', (req, res) => {
    const employeeId = req.params.id;
    // Implement logic to update the employee with the specified ID based on request payload
    res.json({ message: `PUT /api/employees/${employeeId} route reached` });
});

// Error handling route
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});