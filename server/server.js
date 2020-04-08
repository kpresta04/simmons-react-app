const path = require("path");
const express = require("express");
// const compression = require("compression");
const expressStaticGzip = require("express-static-gzip");
const app = express();
const publicPath = path.join(__dirname, "..", "public");
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));
// app.use(compression());

app.use(
	"/build/client",
	expressStaticGzip("build/client", {
		enableBrotli: true,
		orderPreference: ["br", "gz"],
		setHeaders: function (res, path) {
			res.setHeader("Cache-Control", "public, max-age=31536000");
		},
	})
);

app.get("*", (req, res) => {
	res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, () => {
	console.log("Server is up!");
});
