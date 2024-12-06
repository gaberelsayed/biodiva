const mongoose = require('mongoose')
const { required } = require('nodemon/lib/config')
const Schema = mongoose.Schema
const questionSchema = new Schema(
  {
    questionPhoto: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    answer1 : {
        type: String,
        required: true,
        },
    answer2 : {
        type: String,
        required: true,
        },
    answer3 : {
        type: String,
        required: true,
        },
    answer4 : {
        type: String,
        required: true,
        },

     ranswer : {
        type: String,
        required: true,
        },
    // options: [
    //   {
    //     type: String,
    //     required: true,
    //   },
    // ],
    // correctAnswer: {
    //   type: String,
    //   required: true,
    // },
  },
  { _id: false }
);

const quizSchema = new Schema(
  {
    quizName: {
      type: String,
      required: true,
    },
    timeOfQuiz: {
      type: Number,
      required: true,
    },
    sampleQuestions: {
        type: Number,
        required: false,
    },
    Questions: [questionSchema],

    isQuizActive: {
      type: Boolean,
      default: true,
      required: true,
    },
    permissionToShow: {
      type: Boolean,
      default: true,
      required: true,
    },
    // videoWillbeOpen: {
    //   type: String,
    // },
    Grade: {
      type: String,
      required: true,
    },
    prepaidStatus: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const Quiz = mongoose.model('Quiz',quizSchema)

module.exports=Quiz;