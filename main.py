import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import os
from PIL import Image as im
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Conv2D, Flatten, MaxPooling2D
from tensorflow.keras.callbacks import EarlyStopping
from tensorflow.keras.preprocessing.image import ImageDataGenerator as IDG
from sklearn.model_selection import train_test_split
from sklearn.utils import shuffle
import shutil

if os.path.exists('C:\\Users\\ranvi\\PycharmProjects\\PennApps\\Augmentation\\Train'):
    shutil.rmtree('C:\\Users\\ranvi\\PycharmProjects\\PennApps\\Augmentation\\Train')
    shutil.rmtree('C:\\Users\\ranvi\\PycharmProjects\\PennApps\\Augmentation\\Val')

imgPath = []
imgCategory = []
imgID = []

for dirname, _, filenames in os.walk('C:\\Users\\ranvi\\PycharmProjects\\PennApps\\WebData'):
    for filename in filenames:
        imgPath.append(os.path.join(dirname, filename))
        imgID.append(filename)
        osPathList = dirname.split('\\')
        imgCategory.append(osPathList[-1])
print(imgPath)
print(imgCategory)
print(imgID)

itemsDF = pd.DataFrame()
itemsDF["ID"] = imgID
itemsDF["Category"] = imgCategory
itemsDF["Path"] = imgPath
print(itemsDF)

arrList = np.array(itemsDF["Category"])
uniq = np.unique(arrList)
sampledDF = (shuffle(pd.concat([itemsDF[itemsDF["Category"] == cat].sample(100, replace=True) for cat in uniq], ignore_index=True)))
sampledDF = sampledDF.reset_index().drop(["index"], axis=1)
print(sampledDF)

trainDF, valDF = train_test_split(sampledDF, test_size=0.2, stratify=sampledDF["Category"])
trainDF = trainDF.reset_index().drop(['index'], axis=1)
valDF = valDF.reset_index().drop(['index'], axis=1)
print(trainDF)
print(valDF)

os.mkdir('C:\\Users\\ranvi\\PycharmProjects\\PennApps\\Augmentation\\Train')
os.mkdir('C:\\Users\\ranvi\\PycharmProjects\\PennApps\\Augmentation\\Val')
os.mkdir('C:\\Users\\ranvi\\PycharmProjects\\PennApps\\Augmentation\\Train\\Cup')
os.mkdir('C:\\Users\\ranvi\\PycharmProjects\\PennApps\\Augmentation\\Train\\Empty')
os.mkdir('C:\\Users\\ranvi\\PycharmProjects\\PennApps\\Augmentation\\Train\\GranolaBar')
os.mkdir('C:\\Users\\ranvi\\PycharmProjects\\PennApps\\Augmentation\\Train\\RedBull')
os.mkdir('C:\\Users\\ranvi\\PycharmProjects\\PennApps\\Augmentation\\Train\\Water')
os.mkdir('C:\\Users\\ranvi\\PycharmProjects\\PennApps\\Augmentation\\Val\\Cup')
os.mkdir('C:\\Users\\ranvi\\PycharmProjects\\PennApps\\Augmentation\\Val\\Empty')
os.mkdir('C:\\Users\\ranvi\\PycharmProjects\\PennApps\\Augmentation\\Val\\GranolaBar')
os.mkdir('C:\\Users\\ranvi\\PycharmProjects\\PennApps\\Augmentation\\Val\\RedBull')
os.mkdir('C:\\Users\\ranvi\\PycharmProjects\\PennApps\\Augmentation\\Val\\Water')

for i, x in enumerate(trainDF["Path"]):
    resized = im.open(x).resize((256, 256))
    path = os.path.join('C:\\Users\\ranvi\\PycharmProjects\\PennApps\\Augmentation\\Train', trainDF["Category"][i], trainDF["ID"][i])
    resized.save(path)

for i, x in enumerate(valDF["Path"]):
    resized = im.open(x).resize((256, 256))
    path = os.path.join('C:\\Users\\ranvi\\PycharmProjects\\PennApps\\Augmentation\\Val', valDF["Category"][i], valDF["ID"][i])
    resized.save(path)

trainAug = IDG(rotation_range=5, zoom_range=0.1, rescale=1./255, fill_mode='nearest')
trainGen = trainAug.flow_from_directory('Augmentation/Train', target_size=(256, 256), class_mode="categorical")
valAug = IDG(rescale=1./255, fill_mode='nearest')
valGen = valAug.flow_from_directory('Augmentation/Val', target_size=(256, 256), class_mode="categorical")

model = Sequential()
model.add(Conv2D(32, (10, 10), activation='relu', input_shape=(256, 256, 3)))
model.add(MaxPooling2D((32, 32)))
model.add(Flatten())
model.add(Dense(128, activation='relu'))
model.add(Dense(64, activation='relu'))
model.add(Dense(32, activation='relu'))
model.add(Dense(16, activation='relu'))
model.add(Dense(8, activation='relu'))
model.add(Dense(5, activation='softmax'))
model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=["accuracy"])

history = model.fit(trainGen, epochs=40, validation_data=valGen,
                    callbacks=[EarlyStopping(monitor="val_loss", patience=10, restore_best_weights=True)])

titleFont = {'family': 'serif', 'color': 'black', 'weight': 'bold', 'size': 14}
axesFont = {'family': 'serif', 'color': 'black', 'weight': 'normal', 'size': 10}
plt.plot(history.history['accuracy'])
plt.plot(history.history['val_accuracy'])
plt.title('Accuracy By Epoch', fontdict=titleFont, pad=20)
plt.xlabel('Epoch', fontdict=axesFont)
plt.ylabel('Accuracy', fontdict=axesFont)
plt.legend(['train', 'val'], loc='upper left')
plt.show()

plt.plot(history.history['loss'])
plt.plot(history.history['val_loss'])
plt.title('Loss By Epoch', fontdict=titleFont, pad=20)
plt.ylabel('Loss', fontdict=axesFont)
plt.xlabel('Epoch', fontdict=axesFont)
plt.legend(['train', 'val'], loc='upper left')
plt.show()

i = 0
while True:
    if not os.path.exists(os.path.join('C:\\Users\\ranvi\\PycharmProjects\\PennApps\\Models', 'model'+str(i)+'.h')):
        model.save(os.path.join('C:\\Users\\ranvi\\PycharmProjects\\PennApps\\Models', 'model'+str(i)+'.h'))
        break
    i += 1
