const express = require("express");
const connectDB = require('./backend/db')

connectDB();

require("./services/passport");

const app = express();

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
