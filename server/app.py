import cv2
import os
from flask import Flask, request, jsonify, make_response
from datetime import date
from datetime import datetime
import numpy as np
from sklearn.neighbors import KNeighborsClassifier
import pandas as pd
import joblib
from flask_cors import CORS
import io
import openpyxl
import csv


#### Defining Flask App
app = Flask(__name__)
CORS(app)


#### Saving Date today in 2 different formats
datetoday = date.today().strftime("%m_%d_%y")
datetoday2 = date.today().strftime("%d-%B-%Y")


#### Initializing VideoCapture object to access WebCam
face_detector = cv2.CascadeClassifier('static/haarcascade_frontalface_default.xml')
cap = cv2.VideoCapture(0)


#### If these directories don't exist, create them
if not os.path.isdir('Attendance'):
    os.makedirs('Attendance')
if not os.path.isdir('static/faces'):
    os.makedirs('static/faces')
if f'Attendance-{datetoday}.csv' not in os.listdir('Attendance'):
    with open(f'Attendance/Attendance-{datetoday}.csv', 'w') as f:
        f.write('Name,Roll,Time,Course\n')


#### get a number of total registered users
def totalreg():
    return len(os.listdir('static/faces'))


#### extract the face from an image
def extract_faces(img):
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    face_points = face_detector.detectMultiScale(gray, 1.3, 5)
    return face_points


#### Identify face using ML model
def identify_face(facearray):
    model = joblib.load('static/face_recognition_model.pkl')
    return model.predict(facearray)


# A function which trains the model on all the faces available in faces folder
def train_model():
    faces = []
    labels = []
    userlist = os.listdir('static/faces')
    for user in userlist:
        for imgname in os.listdir(f'static/faces/{user}'):
            img = cv2.imread(f'static/faces/{user}/{imgname}')
            resized_face = cv2.resize(img, (50, 50))
            faces.append(resized_face.ravel())
            labels.append(user)

    # Add the following code to include the course column
    with open(f'Attendance/Attendance-{datetoday}.csv') as f:
        csv_reader = csv.reader(f, delimiter=',')
        for row in csv_reader:
            name, roll, time = row[:3]
            course = row[3] if len(row) > 3 else ''  # If course column doesn't exist, initialize it to empty string
            for i in range(len(userlist)):
                if str(i) in roll:
                    labels.append(userlist[i])
                    faces.append(resized_face.ravel())
                    break

    faces = np.array(faces)
    knn = KNeighborsClassifier(n_neighbors=5)
    knn.fit(faces, labels)
    joblib.dump(knn, 'static/face_recognition_model.pkl')


#### Extract info from today's attendance file in attendance folder
def extract_attendance():
    df = pd.read_csv(f'Attendance/Attendance-{datetoday}.csv')
    names = df['Name'].to_dict()
    rolls = df['Roll'].to_dict()
    courses = df['Course'].to_dict()
    times = df['Time'].to_dict()
    l = len(df)

    images = {}
    for i, (name, roll, course) in enumerate(zip(names.values(), rolls.values(), courses.values())):
        label_folder = os.path.join('static/faces/', f"{name.replace(' ', ' ')}_{roll.replace('/', '-')}_{course}")
        images[i] = os.path.join(label_folder, os.listdir(label_folder)[0])

    return names, rolls, courses, times, l, images


#### Add Attendance of a specific user
# def add_attendance(name, course):
#     username = name.split('_')[0]
#     userid = name.split('_')[1].replace('-', '/')
#     current_time = datetime.now().strftime("%H:%M:%S")
    
#     df = pd.read_csv(f'Attendance/Attendance-{datetoday}.csv')
#     if userid not in list(df['Roll']):
#         with open(f'Attendance/Attendance-{datetoday}.csv','a') as f:
#             f.write(f'\n{username},{userid},{current_time},{course}')
def add_attendance(name, roll, course):
    with open(f'Attendance/Attendance-{datetoday}.csv', 'a', newline='') as f:
        csv_writer = csv.writer(f)
        time = datetime.datetime.now().strftime('%H:%M:%S')
        csv_writer.writerow([name, roll, time, course])


# function to return todays attendance download
@app.route('/api/attendance/<datetoday>', methods=['GET'])
def download_attendance(datetoday):
    df = pd.read_csv(f'Attendance/Attendance-{datetoday}.csv')
    output = io.BytesIO()
    writer = pd.ExcelWriter(output, engine='openpyxl')
    df.to_excel(writer, index=False)
    writer.save()
    response = make_response(output.getvalue())
    response.headers["Content-Disposition"] = "attachment; filename=Attendance.xlsx"
    response.mimetype = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    return response


################## ROUTING FUNCTIONS #########################

#### Our main page
@app.route('/')
def home():
    names,rolls,courses,times,l, images = extract_attendance()
    
    return jsonify(
        {
            "name": names,
            "roll": rolls,
            "time": times,
            "course": courses,
            "length": l,
            "date": datetoday2,
            "date2": datetoday,
            "allstud": totalreg(),
            "image": images
        }
    )



#### This function will run when we click on Take Attendance Button
# @app.route('/start',methods=['GET'])
# def start():
#     if 'face_recognition_model.pkl' not in os.listdir('static'):
#         return jsonify(totalreg=totalreg(),datetoday2=datetoday2,mess='Please add a face to continue, The model works to scan faces wich are not available at the moment') 

#     cap = cv2.VideoCapture(0)
#     ret = True
#     while ret:
#         ret,frame = cap.read()
#         if extract_faces(frame)!=():
#             (x,y,w,h) = extract_faces(frame)[0]
#             cv2.rectangle(frame,(x, y), (x+w, y+h), (255, 0, 20), 2)
#             face = cv2.resize(frame[y:y+h,x:x+w], (50, 50))
#             identified_person = identify_face(face.reshape(1,-1))[0]
#             add_attendance(identified_person)
#             cv2.putText(frame,f'{identified_person}',(30,30),cv2.FONT_HERSHEY_SIMPLEX,1,(1, 168, 96),2,cv2.LINE_AA)
#         cv2.imshow('Attendance',frame)
#         key = cv2.waitKey(1)
#         if key == 13: # 13 is the ASCII value for the Enter key
#             break
#     cap.release()
#     cv2.destroyAllWindows()

#     names,rolls,courses,times,l,images = extract_attendance()   
#     return jsonify(
#         {
#             "name": names,
#             "roll": rolls,
#             "time": times,
#             "course": courses,
#             "length": l,
#             "date": datetoday2,
#             "date2": datetoday,
#             "allstud": totalreg(),
#             "image": images
#         }
#     )
@app.route('/start',methods=['GET'])
def start():
    if 'face_recognition_model.pkl' not in os.listdir('static'):
        return jsonify(totalreg=totalreg(),datetoday2=datetoday2,mess='Please add a face to continue, The model works to scan faces wich are not available at the moment') 

    cap = cv2.VideoCapture(0)
    ret = True
    while ret:
        ret,frame = cap.read()
        if not ret:
            break
        if extract_faces(frame)!=():
            (x,y,w,h) = extract_faces(frame)[0]
            cv2.rectangle(frame,(x, y), (x+w, y+h), (255, 0, 20), 2)
            face = cv2.resize(frame[y:y+h,x:x+w], (50, 50))
            identified_person = identify_face(face.reshape(1,-1))[0]
            add_attendance(identified_person, identified_person.split('_')[1], identified_person.split('_')[2])
            cv2.putText(frame,f'{identified_person}',(30,30),cv2.FONT_HERSHEY_SIMPLEX,1,(1, 168, 96),2,cv2.LINE_AA)
        cv2.imshow('Attendance',frame)
        key = cv2.waitKey(1)
        if key == 13: # 13 is the ASCII value for the Enter key
            break
    cap.release()
    cv2.destroyAllWindows()

    names,rolls,courses,times,l,images = extract_attendance()   
    return jsonify(
        {
            "name": names,
            "roll": rolls,
            "time": times,
            "course": courses,
            "length": l,
            "date": datetoday2,
            "date2": datetoday,
            "allstud": totalreg(),
            "image": images
        }
    )


#### This function will run when we add a new user
@app.route('/add', methods=['GET','POST'])
def add():
    data = request.get_json()
    newusername = data['studname']
    newuserid = data['studreg']
    newcourse = data['studentcourse']
    print(data)
    userimagefolder = 'static/faces/'+newusername+'_'+newuserid.replace("/", "-")+'_'+newcourse
    if not os.path.isdir(userimagefolder):
        os.makedirs(userimagefolder)
    cap = cv2.VideoCapture(0)
    i,j = 0,0
    while 1:
        _,frame = cap.read()
        faces = extract_faces(frame)
        for (x,y,w,h) in faces:
            cv2.rectangle(frame,(x, y), (x+w, y+h), (255, 0, 20), 2)
            cv2.putText(frame,f'Images Captured: {i}/50',(30,30),cv2.FONT_HERSHEY_SIMPLEX,1,(255, 0, 20),2,cv2.LINE_AA)
            if j%10==0:
                name = newusername+'_'+str(i)+'_'+newcourse+'.jpg'
                cv2.imwrite(userimagefolder+'/'+name,frame[y:y+h,x:x+w])
                i+=1
            j+=1
        if j==500:
            break
        cv2.imshow('Adding new User', frame)
        key = cv2.waitKey(1)
        if key == 13: # 13 is the ASCII value for the Enter key
            break
    cap.release()
    cv2.destroyAllWindows()
    print('Training Model')

    train_model()
    
    add_attendance(newusername+'_'+newuserid.replace("/", "-"), newcourse)
    
    names,rolls,courses,times,l,images = extract_attendance()    
    return jsonify(
        {
            "name": names,
            "roll": rolls,
            "time": times,
            "course": courses,
            "length": l,
            "date": datetoday2,
            "date2": datetoday,
            "allstud": totalreg(),
            "image": images
        }
    )

#### Our main function which runs the Flask App
if __name__ == '__main__':
    app.run(debug=True, port=3001)