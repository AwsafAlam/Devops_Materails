const express = require('express');
const router = require('./routes');

const app = express();

const port = process.env.APPID || 8000;

app.use(express.json())


app.use(router);

// catch all
app.all('*', (_, res) => {
	res.send(
		"This route is not implemented yet. Maybe you've used the wrong HTTP verb."
	);
});

app.listen(port, () => console.log(`Online Exam server listening on ${port}`));
