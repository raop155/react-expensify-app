const path = require('path');
const express = require('express');
const app = express();
const pubicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(pubicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(pubicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('Server is up! listen to port ' + port);
});
