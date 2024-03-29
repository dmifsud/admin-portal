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

app.get("/players", (req, res) => {
  fakeDB.read(
    (data) => {
      setTimeout(() => {
        res.send(data.players);
      }, 500);
      
    },
    (err) => {
      console.error(err);
      res.status(500).send("Server Error");
    }
  );
});

app.get("/players/:id/transactions", (req, res) => {
  const playerId = req.params.id;
  fakeDB.read(
    (data) => {
      setTimeout(() => {
        const playerFound = data.players.find(player => player.id === +playerId);
        if (playerFound) {
          const transactions = data.player_transactions.filter((transaction) => transaction.playerId === playerFound.id)
          res.send(transactions);
        } else {
          res.status(404).send({
            errMessage: 'Player not found'
          });
        }
      }, 500);
      
    },
    (err) => {
      console.error(err);
      res.status(500).send("Server Error");
    }
  );
});

app.get('/players/:id', (req, res) => {
  const playerId = req.params.id;
  fakeDB.read(
    (data) => {
      setTimeout(() => {
        const playerFound = data.players.find(player => player.id === +playerId)
        if (playerFound) {
          res.send(playerFound);
        } else {
          res.status(404).send({
            errMessage: 'Player not found'
          });
        }
      }, 500);
      
    },
    (err) => {
      console.error(err);
      res.status(500).send("Server Error");
    }
  );
});

app.post("/login", (req, res) => {
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
        setTimeout(() => {
          if (foundUser) {
            const { _data, ...user } = foundUser;
            res.status(200).send(user);
          } else {
            res.status(401).send({
              errMessage: "Invalid Credentials"
            });
          }
        }, 500);
        
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
