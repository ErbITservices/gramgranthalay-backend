require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./db");
const cors = require("cors");
const bodyParser = require("body-parser");
const formRouter = require("./routes/fromRutes");
const district = require("./routes/DistrictRutes");
const Count = require("./routes/Countrutes");
const adminRouter = require("./routes/AdminRutes");
const Motibhaiamin1rutes = require("./routes/Motibhaiamin1rute");
const Motibhaiamin2rutes = require("./routes/Motibhaiamin2rutes");
const Motibhaiamin3rutes = require("./routes/Motibhaiamin3rutes");
const Motibhaiamin4rutes = require("./routes/Motibhaiamin4rutes");
const Motibhaiamin5rutes = require("./routes/Motibhaiamin5rutes");
const Motibhaiamin6rutes = require("./routes/Motibhaiamin6rutes");
const Motibhaiamin7rutes = require("./routes/Motibhaiamin7rutes");
const base_url = process.env.BASE;

const corsOptions = {
  origin: `${base_url}`,
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
// app.use("/person",personRoutes);
// app.use('/menu',menuRoutes) ;
app.use("/form", formRouter);
app.use("/district", district);
app.use("/Count", Count);
app.use("/admin", adminRouter);
app.use("/Motibhaiamin1", Motibhaiamin1rutes);
app.use("/Motibhaiamin2", Motibhaiamin2rutes);
app.use("/Motibhaiamin3", Motibhaiamin3rutes);
app.use("/Motibhaiamin4", Motibhaiamin4rutes);
app.use("/Motibhaiamin5", Motibhaiamin5rutes);
app.use("/Motibhaiamin6", Motibhaiamin6rutes);
app.use("/Motibhaiamin7", Motibhaiamin7rutes);

const PORT = process.env.PORT || 5555;

db(
  app.listen(PORT, () => {
    console.log(`jaimin server is run on port ${PORT}`);
    console.log(base_url);
  })
);

exports.app = app;
