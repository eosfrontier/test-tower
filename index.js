const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(5050, () => {
    console.log(' _');
    console.log(' H');
    console.log(' H    - FakeTower');
    console.log('[H]');
    console.log("Server running on port 5050");
});

app.get("/api", (req, res) => {
    res.json({ "message": "Welcome to the Test/FakeTower API" });
});

app.get("*", (req, res) => {
    res.json({ "message": "fallback!" });
});

/**
 * Requires the user to send a character ID with the value: 451
 */
app.post("/api/char", (req, res) => {
    console.log('*1 - post received to /api/char');
    if (req.body.characterId) {
        console.log(`*2 - "characterId: ${res.body.characterId} received.`);

        if (req.body.characterId === '451' || req.body.characterId === 451) {
            console.log('*3 - Succesfully received character ID 451');
            res.json(mockCharacter);
        } else {
            console.log(`*3 - Received character ID, but with the incorrect value. Expected: 451. Received: ${req.body.characterId}`);
        }

    } else {
        console.log('*2 - no "characterId" sent with post');
    }
    res.json({ "message": "Something did not go right yet - See console logs!"});
});

const mockCharacter = {
    "name": "Mock Name",
    "faction": "Dugo",
    "skills": [
        { "name": "engineering", "level": 1, "sub_skills": [ { "name": "engineering_1", } ] },
    ]
}
