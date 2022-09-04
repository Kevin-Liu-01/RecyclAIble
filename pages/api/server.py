# importing the requests library
import requests

# api-endpoint

def output():
    # sending get request and saving the response as response object
    r = requests.get("http://XXXX-XXX-XX-XX-XXX.ngrok.io/sendUIdata")
    
    # extracting data in json format
    # data = r.json()
    data=r.text
    print(data)
    return data
  
  
