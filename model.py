from tensorflow.keras.models import load_model
from PIL import Image as im
import numpy as np
import base64

m = load_model('C:\\Users\\SharabhCode\\VSCode-Projects\\sql-flask-code\\model8.h')

def get_pred(model, image_path):
    pred_dict = {0: 'Cup',
                 1: 'Empty',
                 2: 'GranolaBar',
                 3: 'RedBull',
                 4: 'Water'}

    img = im.open(image_path).resize((256, 256))
    img.show()
    img = img.convert('RGB')
    img = np.asarray(img) / 255.0

    prediction_array = model.predict(img.reshape((1, 256, 256, 3)))
    prediction = pred_dict[np.argmax(prediction_array)]
    pred_conf = prediction_array[0][np.argmax(prediction_array)]
    print(prediction_array)
    print(prediction, pred_conf)
    if prediction == "Cup" or prediction == "GranolaBar":
        return "Trash"
    elif prediction == "RedBull" or prediction == "Water":
        return "Recycle"
    else:
        return "Empty"