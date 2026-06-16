import os
import base64
import requests
import sys
import RPi.GPIO as GPIO
import time
import json

servoPIN = 17

GPIO.setmode(GPIO.BCM)

GPIO_TRIGGER = 18
GPIO_ECHO = 24

#set GPIO direction (IN / OUT)
GPIO.setup(GPIO_TRIGGER,GPIO.OUT)
GPIO.setup(GPIO_ECHO, GPIO.IN)
GPIO.setup(servoPIN, GPIO.OUT)

p = GPIO.PWM(servoPIN, 50)

count = 1

p.start (5)

def distance() :
    GPIO.output(GPIO_TRIGGER, True)
    time.sleep (0.00001)
    GPIO.output(GPIO_TRIGGER, False)
    StartTime=time.time()
    StopTime=time.time()

    while GPIO.input(GPIO_ECHO) == 0:
        StartTime = time.time()
    
    while GPIO.input(GPIO_ECHO) == 1:
        StopTime = time.time()
    
    TimeElapsed = StopTime - StartTime

    distance = (TimeElapsed * 34000 ) / 2

try:
    while True:
        if distance() < 25:
            streaml = os.popen('fswebcam /home/pi/PennApps22/image' + str(count) + ' . jpg')
            output1 = streaml.read()
            my_stringl=""
            with open ('/home/pi/PennApps22/image'+ str(count) + '.jpg', "rb") as img_file1:
                my_string1 = base64. b64encode (img_file1.read())
                print(my_stringl)

            response = requests.get('http: //85b2-128-91-19-1.ngrok.i0/test', json={"base64": str(my_string1)})
            count+=1
            response=response.text
            print(response)
            
            if response == 'Trash':
                p.ChangeDutyCycle(7)
                time.sleep(2.5)
                p.ChangeDutyCycle(5)
                time.sleep(2.5)
            elif response == 'Recycle':
                p.ChangeDutyCycle(3)
                time.sleep(2.5)
                p.ChangeDutyCycle(5)
                time.sleep(2.5)
            else:
                time.sleep(5)
        else:
            time.sleep(1)

except KeyboardInterrupt:
    p.stop()
    GPIO.cleanup()
