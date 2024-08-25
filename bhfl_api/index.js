const express = require('express');
const cors = require('cors');
const app = express();


app.use(express.json());


var corsOptions = {
    origin: "http://localhost:3000"

};
app.use(cors(corsOptions));

const port = process.env.PORT || 4000;

// POST endpoint
app.post('/bfhl', cors(corsOptions) ,(req, res) => {
    const { data } = req.body;

    if (!Array.isArray(data)) {
        return res.status(400).json({ is_success: false, message: 'Invalid input' });
    }

    const user_id = "Hariprasad_11032002";
    const numbers = data
        .filter(item => !isNaN(item))
        .map(item => Number(item));
    
    const alphabets = data.filter(item => typeof item === 'string' && /^[a-zA-Z]+$/.test(item));
    
    const lowercaseAlphabets = alphabets.filter(item => /^[a-z]+$/.test(item));
    const highestLowercase = lowercaseAlphabets.length > 0 ? 
                             lowercaseAlphabets.sort()[lowercaseAlphabets.length - 1] : null;

    res.json({
        is_success: true,
        user_id,
        email_id: "hariprasad.2021@vitstudent.ac.in",
        roll_number: "21BCE6175",
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercase
    });
});

// GET endpoint
app.get('/bfhl', (req, res) => {
    res.json({
        operation_code: 1
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
