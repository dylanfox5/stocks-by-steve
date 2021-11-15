import pandas as pd
import pyodbc
from fbprophet import Prophet
from pandas_datareader.data import DataReader
import sqlalchemy as db
from datetime import datetime, date, timedelta
conn = pyodbc.connect('Driver={SQL Server};'
                      'Server=stocksbysteve-server.database.windows.net;'
                      'Database=stocksbysteve-database;'
                      'UID=stocksbysteve-server-admin;'
                      'PWD=apple@1234;'
                      )

cursor = conn.cursor()
cursor.execute('SELECT * FROM [dbo].[StockList]')

# Extracting all the symbol as it is in the database
listA = []
count = 0;
for i in cursor:
    if (count < 90):
        listA.append(i[1])
        count += 1

print(listA)



# Get all the stock quote as in the database and run all the model predictions

for var in listA:
    try:
        df = DataReader(var, data_source='yahoo', start='2012-01-01', end=datetime.now()).reset_index()
        # Select the data and price(here we chose the close)
        df = df[['Date', 'Close']]

        # Rename the feature:
        df = df.rename(columns={'Date': 'ds', 'Close': 'y'})
        fbp = Prophet(daily_seasonality=True)

        # Fit or train the model
        fbp.fit(df)
        future = fbp.make_future_dataframe(periods=365)
        forecast = fbp.predict(future)

        # plot the data
        fig = fbp.plot(forecast)  # Prophet's plot method creates a prediction graph
        plt.title('{0}'.format(var))

        result = []


        for n in range(300):
            # Models Prediction for n
            date_count = date(2021, 11, 12) + timedelta(days=n)
            predict = forecast[forecast.ds == str(date_count)]['yhat'].iloc[0]
            result.append([str(date_count), predict])

            # converting predictions to dataframe
            df = pd.DataFrame(result)
            df.columns = ['Date', 'Close']

            engine = db.create_engine('mssql+pyodbc://Dylan:1Apple_123@stocksbysteve-server.database.windows.net/stocksbysteve-database?driver=SQL+Server+Native+Client+11.0')
            # Writing the close prediction to DB
            df.to_sql('Stock_Predictions', con=engine, if_exists='replace')




    except KeyError:
        pass

