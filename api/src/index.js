
const express = require('express');
const bodyParser = require('body-parser');
const transactionController = require('./controllers/transactionController');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// API routes
app.get('/api/initialize-database', transactionController.initializeDatabase);
app.get('/api/list-transactions', transactionController.listTransactions);
app.get('/api/statistics', transactionController.statistics);
app.get('/api/bar-chart', transactionController.barChart);
app.get('/api/pie-chart', transactionController.pieChart);
app.get('/api/combined-response', transactionController.combinedResponse); 
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});