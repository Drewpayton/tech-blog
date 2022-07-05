const express = require("express");

const app = express();

const PORT = process.env.PORT || 3001

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/', )


app.listen(PORT, () => console.log(`Server has started at http://localhost:${PORT}`))