var express = require('express');
var app = express();
const uuidv1 = require('uuid/v1');

const data = [
    {
      "AccountID": "11834",
      "AccountName": "Kamloops Kia",
      "ContractDate": "2017-09-08T07:00:00Z",
      "Cost": 2383.50,
      "Created": "2017-09-09T03:43:09.77632Z",
      "DateMoved": null,
      "DealerProfit": null,
      "ExpiryDate": null,
      "FinancingProgram": "",
      "FirstName": "KIMBERLY",
      "FriendlyId": 1856660,
      "HasAmendmentPending": false,
      "HasCancellationPending": false,
      "Id": "6c105305-1195-e711-80e6-0050568a57d5",
      "LastName": "EVERARD",
      "ProductName": "SecureDrive Mechanical Breakdown Protection",
      "QuoteLabel": null,
      "RetailPrice": 4221.00,
      "Status": "Inforce",
      "Vehicle": "2015 Ford Escape SE",
      "Vin": "1FMCU9GX7FUB99425"
    },
    {
      "AccountID": "10771",
      "AccountName": "Glenoak Ford - Victoria",
      "ContractDate": "2017-09-08T07:00:00Z",
      "Cost": 203.70,
      "Created": "2017-09-09T03:15:47.881071Z",
      "DateMoved": null,
      "DealerProfit": null,
      "ExpiryDate": null,
      "FinancingProgram": "",
      "FirstName": "STEPHEN",
      "FriendlyId": 1856659,
      "HasAmendmentPending": false,
      "HasCancellationPending": false,
      "Id": "64ce3e33-0d95-e711-80e6-0050568a57d5",
      "LastName": "ANDREW",
      "ProductName": "SecureDrive Vehicle Loss Privilege Program",
      "QuoteLabel": null,
      "RetailPrice": 519.75,
      "Status": "Inforce",
      "Vehicle": "2017 Ford Explorer Platinum",
      "Vin": "1FM5K8HT0HGD71817"
    },
    {
      "AccountID": "7275",
      "AccountName": "Go Dodge Surrey",
      "ContractDate": "2017-09-08T07:00:00Z",
      "Cost": 1181.25,
      "Created": "2017-09-09T02:53:57.0385415Z",
      "DateMoved": null,
      "DealerProfit": null,
      "ExpiryDate": null,
      "FinancingProgram": "",
      "FirstName": "SHWN",
      "FriendlyId": 1856658,
      "HasAmendmentPending": false,
      "HasCancellationPending": false,
      "Id": "f4e72f48-0a95-e711-80e6-0050568a57d5",
      "LastName": "FULTON",
      "ProductName": "SecureDrive Vehicle Loss Privilege Program",
      "QuoteLabel": null,
      "RetailPrice": 2231.25,
      "Status": "Inforce",
      "Vehicle": "2017 Ram Ram Pickup 1500 ST",
      "Vin": "1C6RR7FT8HS856676"
    },
    {
      "AccountID": "11852",
      "AccountName": "Kia West",
      "ContractDate": "2017-09-08T07:00:00Z",
      "Cost": 624.75,
      "Created": "2017-09-09T02:51:56.3888312Z",
      "DateMoved": null,
      "DealerProfit": null,
      "ExpiryDate": null,
      "FinancingProgram": "",
      "FirstName": "WILLIAM",
      "FriendlyId": 1856657,
      "HasAmendmentPending": false,
      "HasCancellationPending": false,
      "Id": "6115e2dd-0995-e711-80e6-0050568a57d5",
      "LastName": "CARNE",
      "ProductName": "Kia Protect Appearance Protection",
      "QuoteLabel": null,
      "RetailPrice": 1674.75,
      "Status": "Inforce",
      "Vehicle": "2017 Kia Sorento EX V6",
      "Vin": "5XYPHDA5XHG194339"
    },
    {
      "AccountID": "11852",
      "AccountName": "Kia West",
      "ContractDate": "2017-09-08T07:00:00Z",
      "Cost": 582.75,
      "Created": "2017-09-09T02:51:43.25157Z",
      "DateMoved": null,
      "DealerProfit": null,
      "ExpiryDate": null,
      "FinancingProgram": "",
      "FirstName": "WILLIAM",
      "FriendlyId": 1856656,
      "HasAmendmentPending": false,
      "HasCancellationPending": false,
      "Id": "3f15e2dd-0995-e711-80e6-0050568a57d5",
      "LastName": "CARNE",
      "ProductName": "Kia Protect Vehicle Loss Privilege Program",
      "QuoteLabel": null,
      "RetailPrice": 1632.75,
      "Status": "Inforce",
      "Vehicle": "2017 Kia Sorento EX V6",
      "Vin": "5XYPHDA5XHG194339"
    },
    {
      "AccountID": "21501",
      "AccountName": "Harris Service Sales",
      "ContractDate": "2017-09-08T07:00:00Z",
      "Cost": 1754.55,
      "Created": "2017-09-09T01:58:16.3113699Z",
      "DateMoved": null,
      "DealerProfit": null,
      "ExpiryDate": null,
      "FinancingProgram": "",
      "FirstName": "CHARLES",
      "FriendlyId": 1856655,
      "HasAmendmentPending": false,
      "HasCancellationPending": false,
      "Id": "52086c5e-0295-e711-80e6-0050568a57d5",
      "LastName": "MCMANUS",
      "ProductName": "SecureDrive Mechanical Breakdown Protection",
      "QuoteLabel": null,
      "RetailPrice": 3592.05,
      "Status": "Inforce",
      "Vehicle": "2017 Mazda CX-5 Touring",
      "Vin": "JM3KFBCLXH0146448"
    },
    {
      "AccountID": "19712",
      "AccountName": "Metrotown Mitsubishi",
      "ContractDate": "2017-09-08T07:00:00Z",
      "Cost": 0.00,
      "Created": "2017-09-09T01:44:51.013513Z",
      "DateMoved": null,
      "DealerProfit": null,
      "ExpiryDate": null,
      "FinancingProgram": "",
      "FirstName": "LINCOLN",
      "FriendlyId": 1856654,
      "HasAmendmentPending": false,
      "HasCancellationPending": false,
      "Id": "5e1f457e-0095-e711-80e6-0050568a57d5",
      "LastName": "HOWARD",
      "ProductName": "Mitsubishi Diamond Care Mechanical Breakdown Protection Promotion",
      "QuoteLabel": null,
      "RetailPrice": 0.00,
      "Status": "Inforce",
      "Vehicle": "2017 Mitsubishi Outlander ES",
      "Vin": "JA4AZ2A31HZ610487"
    },
    {
      "AccountID": "11853",
      "AccountName": "Applewood Langley Kia",
      "ContractDate": "2017-09-08T07:00:00Z",
      "Cost": 781.20,
      "Created": "2017-09-09T01:40:44.5339086Z",
      "DateMoved": null,
      "DealerProfit": null,
      "ExpiryDate": null,
      "FinancingProgram": "",
      "FirstName": "DANA",
      "FriendlyId": 1856653,
      "HasAmendmentPending": false,
      "HasCancellationPending": false,
      "Id": "b90022eb-ff94-e711-80e6-0050568a57d5",
      "LastName": "KELLY",
      "ProductName": "Kia Protect Vehicle Loss Privilege Program",
      "QuoteLabel": null,
      "RetailPrice": 2326.80,
      "Status": "Inforce",
      "Vehicle": "2011 Kia Sportage LX",
      "Vin": "KNDPBCA29B7144764"
    },
    {
      "AccountID": "11853",
      "AccountName": "Applewood Langley Kia",
      "ContractDate": "2017-09-08T07:00:00Z",
      "Cost": 2212.35,
      "Created": "2017-09-09T01:40:32.1182256Z",
      "DateMoved": null,
      "DealerProfit": null,
      "ExpiryDate": null,
      "FinancingProgram": "",
      "FirstName": "DANA",
      "FriendlyId": 1856652,
      "HasAmendmentPending": false,
      "HasCancellationPending": false,
      "Id": "940022eb-ff94-e711-80e6-0050568a57d5",
      "LastName": "KELLY",
      "ProductName": "Kia Protect Mechanical Breakdown Protection",
      "QuoteLabel": null,
      "RetailPrice": 3787.35,
      "Status": "Inforce",
      "Vehicle": "2011 Kia Sportage LX",
      "Vin": "KNDPBCA29B7144764"
    },
    {
      "AccountID": "12425",
      "AccountName": "Jaguar Richmond/Land Rover Richmond",
      "ContractDate": "2017-09-08T07:00:00Z",
      "Cost": 4077.70,
      "Created": "2017-09-09T01:39:33.2634421Z",
      "DateMoved": null,
      "DealerProfit": 1890.00,
      "ExpiryDate": null,
      "FinancingProgram": "NIDPP MBP 200",
      "FirstName": "PETER",
      "FriendlyId": 1856651,
      "HasAmendmentPending": false,
      "HasCancellationPending": false,
      "Id": "97b6dac4-ff94-e711-80e6-0050568a57d5",
      "LastName": "TRIEU",
      "ProductName": "SecureDrive Mechanical Breakdown Protection - Premium",
      "QuoteLabel": null,
      "RetailPrice": 6167.70,
      "Status": "Inforce",
      "Vehicle": "2015 Mercedes-Benz CLS CLS 63 AMG S-Model",
      "Vin": "WDDLJ7GB6FA133655"
    }
  ];


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/account/token', function(request, response) {
  var username = request.query.username;
  var password = request.query.password;

  if (username === 'omni_karen' && password === 'Password!') {
    response.json(`{token:${uuidv1()}}`);
  } else {
    response.send(401);
  }  
});

app.get('/contract/search', (request, response) => {
  response.json(data);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
