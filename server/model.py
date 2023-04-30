# Mounting google drives data
from google.colab import drive
drive.mount('/content/drive')

# Installing files and libraries
import os
import tensorflow as tf
from tensorflow.keras import layers, models, optimizers
import numpy as np
from tensorflow.keras.preprocessing import image

trainingdatasets = "drive/MyDrive/Googlenet/datasets"
validatingdatasets = "drive/MyDrive/Googlenet/validations"

def train_model(trainingdatasets, validatingdatasets):
    # Create a list of all subdirectories (i.e. labels)
    labelstrain = [label for label in os.listdir(trainingdatasets) if os.path.isdir(os.path.join(trainingdatasets, label))]
    labelsvalidate = [label for label in os.listdir(validatingdatasets) if os.path.isdir(os.path.join(validatingdatasets, label))]

    # Load and preprocess the images
    image_generator = tf.keras.preprocessing.image.ImageDataGenerator(rescale=1./255, validation_split=0.2)
    train_data = image_generator.flow_from_directory(trainingdatasets, target_size=(224,224), classes=labelstrain, class_mode='categorical', subset='training')
    val_data = image_generator.flow_from_directory(validatingdatasets, target_size=(224,224), classes=labelsvalidate, class_mode='categorical', subset='validation')

    # Define the model architecture
    model = models.Sequential()
    model.add(layers.Conv2D(32, (3,3), activation='relu', input_shape=(224,224,3)))
    model.add(layers.MaxPooling2D((2,2)))
    model.add(layers.Conv2D(64, (3,3), activation='relu'))
    model.add(layers.MaxPooling2D((2,2)))
    model.add(layers.Conv2D(128, (3,3), activation='relu'))
    model.add(layers.MaxPooling2D((2,2)))
    model.add(layers.Flatten())
    model.add(layers.Dense(128, activation='relu'))
    model.add(layers.Dense(len(labels), activation='softmax'))

    # Compile the model
    model.compile(loss='categorical_crossentropy', optimizer=optimizers.Adam(), metrics=['accuracy'])

    # Train the model
    history = model.fit(train_data, epochs=10, validation_data=val_data)

    # Save the model
    model.save("drive/MyDrive/Googlenet/seku_face_model.h5")

    return model, history

# Calling the function
train_model(base_dir)


# Loading the model
model = tf.keras.models.load_model("drive/MyDrive/Googlenet/seku_face_model.h5")

# PAth for data used for validation
validationdatapath = "drive/MyDrive/Googlenet/evaluationdataset/image1.JPG"

# Resizing and transpositioning of the image
img = image.load_img(validationdatapath, target_size=(224,224))
img_tensor = image.img_to_array(img)
img_tensor = np.expand_dims(img_tensor, axis=0)
img_tensor /= 255.

# Prediction of the image and return the label 
prediction = model.predict(img_tensor)
predicted_label = np.argmax(prediction[0])

# Load the label names from the subdirectories in the dataset
labels = [label for label in os.listdir(base_dir) if os.path.isdir(os.path.join(base_dir, label))]

print("The image is predicted to be of label: ", labels[predicted_label])