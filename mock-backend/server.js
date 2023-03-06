const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const PORT = 3000;
const DATA_FILE = './mock-backend/data.json';
// MOCK API



app.get('/data', (req, res) => {
  fs.readFile(DATA_FILE, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Server Error');
      return;
    }

    const jsonData = JSON.parse(data);
    res.send(jsonData);
  });
});



app.post('/data', (req, res) => {
    const newData = req.body;
  
    // Read the existing data from the JSON file
    fs.readFile(DATA_FILE, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Server Error');
        return;
      }
  
      const jsonData = JSON.parse(data);
      console.log('newData', newData);
  
      // Write the updated data to the JSON file
      fs.writeFile(DATA_FILE, JSON.stringify({
        ...jsonData,
        newData
      }), (err) => {
        if (err) {
          console.error(err);
          res.status(500).send('Server Error');
          return;
        }
  
        res.send('Data saved successfully');
      });
    });
  });
  


// END MOCK API

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


