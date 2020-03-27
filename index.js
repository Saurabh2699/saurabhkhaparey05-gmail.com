const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')

app.use(express.static(path.join(__dirname + ' /public/student1/examples')))
app.use(express.static(path.join(__dirname + 'public/student1/assets')))

mongoose.connect('mongodb://localhost:27017/mini-project', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

//Creating a student schema
const studentSchema = new mongoose.Schema({
    rollno: Number,
    name: String,
    phoneNumber: Number,
    courses: [String]
})

//Creating a teacher schema
const teacherSchema = new mongoose.Schema({
    name: String,
    coursesTaken: [String],
    studentArray: [String],
    noOfLecturesTaken: Number
})

const Student = new mongoose.model('students', studentSchema)
const Teacher = new mongoose.model('teacher', teacherSchema)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/student1/examples/index1.html'))
})

app.listen(3000, () => {
    console.log('server running at port 3000')
})