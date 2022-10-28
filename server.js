const express = require('express');
const cors = require('cors');


const app = express();

// Allow all origins
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send({
        slackUsername: "Richie Moluno",
        backend: true,
        age: 21,
        bio: "I am a full stack developer",
    })
})

const PORT = 24123;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})