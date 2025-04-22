const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 21110;

app.use(bodyParser.json());

// Dummy data
let employees = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

// Dummy password storage (not for production use)
let userPassword = {
    username: 'admin',
    password: 'admin123'
};

// GET /v1/get-employee
app.get('/v1/get-employee', (req, res) => {
    res.json({
        success: true,
        data: employees
    });
});

// POST /v1/change-password
app.post('/v1/change-password', (req, res) => {
    const { username, oldPassword, newPassword } = req.body;

    if (
        username === userPassword.username &&
        oldPassword === userPassword.password
    ) {
        userPassword.password = newPassword;
        res.json({ success: true, message: 'Password changed successfully.' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials.' });
    }
});

app.listen(port, () => {
    console.log(`API running on http://localhost:${port}`);
});
