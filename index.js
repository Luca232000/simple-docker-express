const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.end(new Date().toString());
});

app.listen(80,'0.0.0.0');
