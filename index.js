const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('This message is from Youness : My heart Rania All I need is you right here. I looooooooooove you so muuch ');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
