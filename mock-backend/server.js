const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const crypto = require("crypto");
const app = express();

app.use(bodyParser.json());
app.use(cors());

const PORT = 3000;
const DATA_FILE = "./mock-backend/data.json";
// MOCK API

const fakeDB = {
  read: (cb, errCb) => {
    fs.readFile(DATA_FILE, "utf8", (err, data) => {
      if (err) {
        if (errCb) {
          errCb(err);
        }
        return;
      }

      if (cb && typeof cb === "function") {
        const jsonData = JSON.parse(data);
        cb(jsonData);
      }
    });
  },
};

app.get("/data", (req, res) => {
  fakeDB.read(
    (data) => {
      res.send(data);
    },
    (err) => {
      console.error(err);
      res.status(500).send("Server Error");
    }
  );
});

app.post("/data", (req, res) => {
  const newData = req.body;

  // Read the existing data from the JSON file
  fakeDB.read((data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Server Error");
      return;
    }

    const jsonData = JSON.parse(data);
    console.log("newData", newData);

    // Write the updated data to the JSON file
    fs.writeFile(
      DATA_FILE,
      JSON.stringify({
        ...jsonData,
        newData,
      }),
      (err) => {
        if (err) {
          console.error(err);
          res.status(500).send("Server Error");
          return;
        }

        res.send("Data saved successfully");
      }
    );
  });
});

app.post("/login", (req, res) => {
  console.log("req.body", req.body);
  fakeDB.read(
    (data) => {
      
      const hash = crypto
        .pbkdf2Sync(
          req.body.username + req.body.password,
          "salt",
          1000,
          64,
          "sha512"
        )
        .toString("hex");

      if (data.users) {
        const foundUser = data.users.find(
          (user) =>
            user.username === req.body.username &&
            user._data.hashedPassword === hash
        );
        if (foundUser) {
          const { _data, ...user } = foundUser;
          res.status(200).send(user);
        } else {
          res.status(401).send("Invalid credentials");
        }
      } else {
        res.status(500).send('Server Error');
      }
    },
    (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("Server Error");
        return;
      }
    }
  );
});

// END MOCK API

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
