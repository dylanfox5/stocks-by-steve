const express = require('express'); 
const sql = require('mssql');
const app = express(); 
const port = process.env.PORT || 5000;

const config = {
  user: process.env.DB_USER || "stocksbysteve-server-admin",
  password: process.env.DB_PASSWORD || "apple@1234",
  server: process.env.DB_SERVER || "stocksbysteve-server.database.windows.net",
  database: process.env.DB_DATABASE || "stocksbysteve-database",
}

/********************************************************************************************************************/

const retrieve_stock_code_list = async (req) => {
  let Industry = req.query.Industry;
  let Volatility = req.query.Volatility;

  const productQuery = `select * from StockList s where s.Industry = '`+Industry+`' and s.Volatility = '`+Volatility+`'`;

  await sql.connect(config).then(pool => {
    return pool.request()
      .query(productQuery)
  }).then(result => {
    return result;
  }).catch(err => {
    console.log(err);
  });
}

/********************************************************************************************************************/

app.get('/sentiment_analysis', (req, res) => {
  const productQuery = `select * from StockSentiment s where s.Stock_Code IN (?)`;
  var data=retrieve_stock_code_list(req);
  let unique_stock_codes = [];
  let processed_record = {};

  var queryData=[data]; 
  data.then(function(result) {
    result.recordset.forEach(element => {
      stock_list_records.push(element.Stock_Code);
      stock_list_records.forEach((c) => {
        if (!unique_stock_codes.includes(c)) {
          unique_stock_codes.push(c);
        }
      });
    });
 })

  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);
    // create Request object
    var request = new sql.Request();
    // query to the database and get the records
    request.query(productQuery, queryData, function (err, recordset) {
      if (err) console.log(err)

      // For each unique stock_code we need to loop through the resuts and create a new json
      let stock_code;
      tweet_sentiment = [];
      recordset.forEach((record) => {

      });

      // send records as a response
      res.send(recordset);
    });
  });
});

/********************************************************************************************************************/

app.get('/time_series_forecast', (req, res) => {
  const productQuery = `select * from StockValues s where s.StockCode IN (?)`;
  let unique_stock_codes = [];
  let processed_record = {};

  var queryData=[data]; 
  data.then(function(result) {
    result.recordset.forEach(element => {
      stock_list_records.push(element.Stock_Code);
      stock_list_records.forEach((c) => {
        if (!unique_stock_codes.includes(c)) {
          unique_stock_codes.push(c);
        }
      });
    });
 })

  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);
    // create Request object
    var request = new sql.Request();
    // query to the database and get the records
    request.query(productQuery, queryData, function (err, recordset) {
      if (err) console.log(err)
      recordset.forEach((record) => {

      });
      
      // send records as a response
      res.send(recordset);
    });
  });
});

/********************************************************************************************************************/

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});