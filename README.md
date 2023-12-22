**MERN Stack Coding Challenge**

**_Backend Task_**
Data Source
Third Party API URL: https://s3.amazonaws.com/roxiler.com/product_transaction.json

Request Method: GET

Response Format: JSON

_Initialize Database API_
Create an API to initialize the database. Fetch the JSON from the third-party API mentioned above and initialize the database with seed data. You are free to define your own efficient table/collection structure.

**Instructions**
All the APIs below should take a month (expected value is any month between January to December) as an input and should be matched against the field dateOfSale regardless of the year.

_API to List All Transactions_
GET
Create an API to list all transactions.

The API should support search and pagination on product transactions.
Based on the value of search parameters, it should match search text on product title/description/price, and based on matching results, it should return the product transactions.
If the search parameter is empty, then based on applied pagination, it should return all the records of that page number.
Default pagination values will be like page = 1, per page = 10.

_API for Statistics_
GET
Create an API for statistics.

Total sale amount of the selected month.
Total number of sold items of the selected month.
Total number of not sold items of the selected month.

_API for Bar Chart_
GET
Create an API for a bar chart. 
The response should contain the price range and the number of items in that range for the selected month regardless of the year.

0 - 100
101 - 200
201-300
301-400
401-500
501 - 600
601-700
701-800
801-900
901-above

_API for Pie Chart_

GET
Create an API for a pie chart. 
Find unique categories and the number of items from that category for the selected month regardless of the year.

For example:

X category: 20 (items)
Y category: 5 (items)
Z category: 3 (items)
Combined Data API
GET

Create an API that fetches the data from all the three APIs mentioned above, combines the response, and sends a final response of the combined JSON.

**_Frontend Task_**

By using the above-created APIs,
create the following table and charts on a single page.
Follow the given mockups, and you can implement your own design to change the look and feel.

**Transactions Table**
Use the transactions listing API to list transactions in the table.
The select month dropdown should display Jan to Dec months as options.
By default, March month should be selected.
The table should list the transactions of the selected month irrespective of the year using the API.
The search transaction box should take an input, 
and if the search text is matching with any one of these title/description/price, 
then those transactions of the selected month should come in the list using the API.
If the user clears the search box, then the initial list of transactions should be displayed for the selected month using the API.
On click of Next, it should load the next page data from the API.
On click of Previous, it should load the previous page data from the API.

**Transactions Statistics**
(Use your created API to fetch the data)

Display the total amount of sale, total sold items, and total not sold item in the box for the selected month from the dropdown (present above the table) using the API.

**Transactions Bar Chart**
(Use your created API to fetch the data)

The chart should display the price range and the number of items in that range for the selected month irrespective of the year using the API.
The month selected from the dropdown (above the table) should be applied here.
