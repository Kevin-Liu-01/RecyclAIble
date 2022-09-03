# importing the requests library
import requests

# api-endpoint

def output():
    # sending get request and saving the response as response object
    r = requests.get("http://9d6c-128-91-56-203.ngrok.io/sendUIdata")
    
    # extracting data in json format
    # data = r.json()
    data=r.text
    print(data)
    return data
  
  
