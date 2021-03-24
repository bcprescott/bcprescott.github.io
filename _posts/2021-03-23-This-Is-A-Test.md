import os
import glob
import numpy as np
from numpy import asarray, save
from tensorflow.keras.preprocessing.image import load_img, img_to_array
from PIL import Image
from shutil import copy
from IPython.core.interactiveshell import InteractiveShell
from azureml.core import Workspace, Datastore, Dataset
import tempfile

root = tempfile.mkdtemp()
ws = Workspace.from_config()
ds = Dataset.get_by_name(ws, name='histoimages')
mount = ds.mount(root)
mount.start()

bcImages = []
bcLabels = [] 

for f in range(len(images)):
    IMG = images[f]
    for c in [0,1]:
        patientID = root +'/' + IMG
        imgpath = root + '/'+ IMG + '/' + str(c)
        print(patientID)
        for file in glob.glob(imgpath+'/'+'*.png'):
            bci = load_img(file, target_size=(50,50))
            bci = img_to_array(bci)
            bci = np.divide(bci,255.)
            bcLabels.append(c)
            bcImages.append(bci)
            
bcImages = np.asarray(bcImages)
bcLabels = np.asarray(bcLabels)