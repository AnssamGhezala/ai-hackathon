import cv2
import keras.models
from keras.models import load_model
import numpy as np

def pre_process(image, inv=False):
    resized = cv2.resize(image, (64, 64), interpolation=cv2.INTER_AREA)
    return resized

classifier = load_model('C:/Users/monemilima/Downloads/artifille.h5')
image_ori = cv2.imread('C:/Users/monemilima/Downloads/test/test_imgs/00a14441-7a62-4034-bc40-b196aeab2785___RS_NLB 3932.JPG')
image = cv2.imread('C:/Users/monemilima/Downloads/test/test_imgs/00a14441-7a62-4034-bc40-b196aeab2785___RS_NLB 3932.JPG')

image=pre_process(image,True)
image= keras.preprocessing.image.img_to_array(image)
image= image * 1. / 255
image = np.expand_dims(image, axis=0)
image = np.vstack([image])
print(image)

label = classifier.predict(image)
print(label)

cv2.imshow("image", image_ori)
cv2.waitKey(0)