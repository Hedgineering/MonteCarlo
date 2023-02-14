// =========================
// Pre-Config for .env file
// =========================
const fs = require("fs");
const path = require("path");
const rootDir = path.resolve(__dirname, ".");
const env = require("dotenv").config({ path: `${rootDir}/.env` }).parsed;

if (!env) {
  console.log(env);
  console.log("Environment variables file not found");
}

const server_port = process.env.PORT || env["PORT"] || 5000;

// if .env file loaded properly, this should print 3000, else it will print 5000
console.log(`Server configured for port ${server_port}`);

const express = require("express");
const cors = require("cors");

// Custom Modules
const corsOptions = require("./config/CorsOptions");
const credentials = require("./middleware/CorsCredentials");
const { logger } = require("./middleware/LogEvents");
const errorHandler = require("./middleware/ErrorHandler");

const app = express();

// Custom middleware logger
app.use(logger);

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// Built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// Built-in middleware for json
app.use(express.json());

// Non-Protected Endpoints ---------
app.use("/", require("./routes/Root"));
app.use("/api/sum", require("./routes/api/Sums"));

// Catch all for 404
app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ error: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

// Error Handling at the end of the middleware chain
// to be done if all other routes fail
app.use(errorHandler);

app.listen(server_port, () => {
  console.log(`Server listening on port ${server_port}`);
});