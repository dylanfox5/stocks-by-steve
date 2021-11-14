import numpy as np
import pandas as pd
import nltk
from nltk.sentiment.vader import SentimentIntensityAnalyzer
import tweepy

import sqlalchemy as db
import pyodbc

api_key = '01hWYK7fWUmHxE58OfB6c4Dbz'
api_key_secret = 'Yz7bYndFf3ApiM6hSiLCQcWxNJTK4i8aZLV9zM03tmhferEEZY'
access_token = '3653973169-Ak30tqblIGn9HWiOh7qeIwv1kz6x8D7nRAp7W1L'
access_token_secret = 'MkAa2pQgd9pSDDRD1E3Krk0UvRBI39QoKodnMtqfeBKHR'


# Creating the authentication object
auth = tweepy.OAuthHandler(api_key, api_key_secret)
# Setting your access token and secret
auth.set_access_token(access_token, access_token_secret)
# Creating the API object while passing in auth information
api = tweepy.API(auth)
# Language code (follows ISO 639-1 standards)
language = "en"



stocks = pd.read_csv("stocks-list-updated.csv")
tickers = stocks['Stock Code']
final_df = pd.DataFrame(columns=['Stock Code', 'Tweet'])
final_df


for i in tickers:
  # The search term you want to find
  query = "$" + i

  # Calling the user_timeline function with our parameters
  results = api.search_tweets(q=query, lang=language, result_type='recent', count=75)

  tweet_results = {}
  counter=0
  # foreach through all tweets pulled
  for tweet in results:
    tweet_results[counter] = tweet.text
    counter += 1

  # query tweet results
  tweet_results_df = pd.DataFrame(columns=['Stock Code','Tweet'])
  tweet_results_df['Tweet'] = tweet_results.values()
  tweet_results_df['Stock Code'] = query
  final_df = pd.concat([final_df, tweet_results_df])

nltk.download('vader_lexicon')

def nltk_sentiment(sentence):
    nltk_sentiment = SentimentIntensityAnalyzer()
    score = nltk_sentiment.polarity_scores(sentence)
    return score

nltk_results = [nltk_sentiment(row) for row in final_df['Tweet']]
results_df = pd.DataFrame(nltk_results)


final_df['Compound'] = results_df['compound']

engine = db.create_engine('mssql+pyodbc://Dylan:1Apple_123@stocksbysteve-server.database.windows.net/stocksbysteve-database?driver=SQL+Server+Native+Client+11.0')

final_df.to_sql('Tweets', con=engine, if_exists='replace')