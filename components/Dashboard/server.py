# importing the requests library
import requests
  
# api-endpoint
URL = "http://8984-128-91-56-203.ngrok.io/sendUIdata"


# sending get request and saving the response as response object
r = requests.get(url = URL)
  
# extracting data in json format
data = r.json()
  
  
