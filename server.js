import Routes from './routes/index';

const express = require('express');
const process = require('process');

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
Routes(app);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;
