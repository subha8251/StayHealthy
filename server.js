// const express = require("express");
// const cors = require("cors"); // Import the cors package
// const app = express();
// require('dotenv').config();
// const dbConfig = require("./config/dbConfig");

// app.use(express.json());
// const path = require("path");

// // Use the CORS middleware
// app.use(cors({
//   origin: 'http://localhost:3000' // Replace with your client's URL
// }));

// const userRoute = require("./routes/userRoute");
// app.use('/api/user', userRoute);

// const adminRoute = require("./routes/adminRoute");
// app.use("/api/admin", adminRoute);

// const doctorRoute = require("./routes/doctorsRoute");
// app.use("/api/doctor", doctorRoute);

// app.use(express.static(path.join(__dirname, "./client/build")))

// app.get('*', function(req, res){
//   res.sendFile(path.join(__dirname, "client/build/index.html"));
// });


// const port = process.env.PORT || 5000;
// app.listen(port, () => console.log(`Node server started at port ${port}`));


const express = require("express");
const cors = require("cors");
const path = require("path");
require('dotenv').config();
const dbConfig = require("./config/dbConfig");

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000' // Update with your client's URL for production if needed
}));

// Routes
const userRoute = require("./routes/userRoute");
app.use('/api/user', userRoute);

const adminRoute = require("./routes/adminRoute");
app.use("/api/admin", adminRoute);

const doctorRoute = require("./routes/doctorsRoute");
app.use("/api/doctor", doctorRoute);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "./client/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Node server started at port ${port}`));
