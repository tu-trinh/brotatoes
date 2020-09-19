const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "brotato/build")));
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'brotato/build')));
	app.get('*', (req, res) => {
		res.sendfile(path.join(__dirname = 'brotato/build/index.html'));
	})
}
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + '/brotato/public/index.html'));
})
app.get("/", (req, res) => {
	res.send("root route");
});
app.listen(port, (req, res) => {
	console.log("Server listening on port: ${port}");
});
