const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(5050, () => {
    console.log('/\\');
    console.log('[]');
    console.log('[] - TestTower');
    console.log('[]');
    console.log("Server running on port 5050");
});

app.get("/api", (req, res) => {
    res.json({ "message": "Welcome to the Mock API" });
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

app.get("/api/debugchar", (req, res) => {
    res.json(mockCharacter);
});

/**
 * @description FALLBACK ROUTE
 */
app.get("*", (req, res) => {
    res.json({ "message": "fallback! route is incorrect" });
});

/**
 * @description MOCK CHARACTER
 */
const mockCharacter = {
    "name": "Mock Name",
    "faction": "Dugo",
    "skills": [
        { "name": "engineering", "level": 1, "sub_skills": [{ "name": "engineering_1", }] },
        { "name": "informatica", "level": 1, "sub_skills": [{ "name": "informatica_1", }] },
        { "name": "biochemist", "level": 1, "sub_skills": [{ "name": "biochemist_1", }] },
        { "name": "ballistics", "level": 1, "sub_skills": [{ "name": "ballistics_1", }] },
        { "name": "melee", "level": 3, "sub_skills": [{ "name": "melee_1", }, { "name": "melee_2", }, { "name": "melee_3", }] },
        { "name": "willpower", "level": 1, "sub_skills": [{ "name": "willpower_1", }] },
        { "name": "condition", "level": 1, "sub_skills": [{ "name": "condition_1", }] },
        { "name": "protection", "level": 1, "sub_skills": [{ "name": "protection_1", }] },
        { "name": "dexterity", "level": 1, "sub_skills": [{ "name": "dexterity_1", }] },
        { "name": "mining", "level": 1, "sub_skills": [{ "name": "mining_1", }] },
        { "name": "economics", "level": 1, "sub_skills": [{ "name": "economics_1", }] },
        { "name": "politics", "level": 1, "sub_skills": [{ "name": "politics_1", }] },
        { "name": "analytics", "level": 1, "sub_skills": [{ "name": "analytics_1", }] },
        { "name": "psychic", "level": 1, "sub_skills": [{ "name": "psychic_1", }] },
        { "name": "surgery", "level": 1, "sub_skills": [{ "name": "surgery_1", }] },
        { "name": "firstaid", "level": 1, "sub_skills": [{ "name": "firstaid_1", }] }
    ]
}
