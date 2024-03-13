const express = require("express");
const sql = require("mssql");
const app = express();
const port = 3000;

app.use(express.json());

const sqlConfig = {
  server: "172.187.184.173",
  database: "PaulDB",
  user: "sa",
  password: "Cheesecake!1",
  pool: {
    min: 0,
    max: 10,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

// using the GET method to access the url
app.get("/", (req, res) => {
  res.send("Default found");
});

// state a listening port
app.listen(port, () => {
  console.log("Service listening.");
});

// using the GET method to access the AudioBook and return the data to the screen
app.get("/Audiobook", async (req, res) => {
  try {
    let pool = await sql.connect(sqlConfig);
    let audiobooks = await pool.request().query("SELECT * FROM Audiobook");
    res.json(audiobooks.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
});

/// using POST requests for updating the AudioBook table
app.post("/AudioBook", async (req, res) => {
  const { title, author, price, bookLength, language, summary, image } =
    req.body;

  try {
    // Establish a connection to the SQL database
    await sql.connect(sqlConfig);

    // Create a new SQL request
    const request = new sql.Request();

    // Prepare and execute the SQL query to insert data into the Students table
    const query = `
        INSERT INTO AudioBook ( title, author, price, bookLength, language, summary, image)
        VALUES ( @title, @author, @price, @bookLength, @language, @summary, @image)
      `;
    // Add the input parameters to the request

    request.input("title", sql.VarChar, title);
    request.input("author", sql.VarChar, author);
    request.input("price", sql.Float, price);
    request.input("bookLength", sql.Float, bookLength);
    request.input("language", sql.VarChar, language);
    request.input("summary", sql.VarChar, summary);
    request.input("image", sql.VarChar, image);

    await request.query(query);

    // Send a success response back to the client
    res.status(200).json({ message: "AudioBook added successfully." });
  } catch (error) {
    // Log any errors and send an error response back to the client
    console.error(error);
    res.status(500).json({ error: "Error adding AudioBook." });
  }
});
