import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { Router } from '@angular/router';
import { $ } from 'protractor';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent{
  correct: any;
  myanswer: any;
  answeris: string;
  constructor(private router: Router) {}
  question = document.getElementById("question");
  choices = Array.from(document.getElementsByClassName("choice-text"));
  questionCounterText=document.getElementById("questionCounter");
  scoreText=document.getElementById("score");

  currentQuestion = {};
  acceptingAnswers = false;
  score = 0;
  questionCounter = 0;
  availableQuestions = [];
  questions = [
    {
      question: "which is the national animal?",
      choice1: "<loin>",
      choice2: "<tiger>",
      choice3: "<cow>",
      choice4: "<rabbit>",
      answer: 2
    },
    {
      question: "which is the national bird?",
      choice1: "<parrot>",
      choice2: "<crow>",
      choice3: "<peacock>",
      choice4: "<ostrich>",
      answer: 3
    },
    {
    question: "which is the national flower?",
    choice1: "<lotus>",
    choice2: "<lilly>",
    choice3: "<rose>",
    choice4: "<tulip>",
    answer: 1
    },
    {
      question: "which is the national sport?",
      choice1: "<kabbdi>",
      choice2: "<ko-ko>",
      choice3: "<cricket>",
      choice4: "<hockey>",
      answer: 4
    }
  ];
  //Constants
  CORRECT_BONUS = 10;
  MAX_QUESTIONS = 3;
  questionIndex: any;
  choice1;choice2;choice3;choice4: any;
  //router:Router;
  startGame = () => {
    this.questionCounter = 0;
    this.score = 0;
    this.questions = [
      {
        question: "which is the national animal?",
        choice1: "<loin>",
        choice2: "<tiger>",
        choice3: "<cow>",
        choice4: "<rabbit>",
        answer: 2
      },
      {
        question: "which is the national bird?",
        choice1: "<parrot>",
        choice2: "<crow>",
        choice3: "<peacock>",
        choice4: "<ostrich>",
        answer: 3
      },
      {
      question: "which is the national flower?",
      choice1: "<lotus>",
      choice2: "<lilly>",
      choice3: "<rose>",
      choice4: "<tulip>",
      answer: 1
      },
      {
        question: "which is the national sport?",
        choice1: "<kabbdi>",
        choice2: "<ko-ko>",
        choice3: "<cricket>",
        choice4: "<hockey>",
        answer: 4
      }
    ];
    this.availableQuestions = [...this.questions];
    console.log(this.availableQuestions);
  };

  getNewQuestion = () => {
    if (this.availableQuestions.length === 0 || this.questionCounter >= this.MAX_QUESTIONS){
      //GO TO THE END PAGE
      this.router.navigate(['/endpage']);
    }
    this.question = document.getElementById("question");
    //console.log(this.question);
    this.questionCounter++;

    //console.log(this.questionCounter);
    const questionIndex = Math.floor(Math.random() * this.availableQuestions.length);
    //console.log(questionIndex);
    const currentQuestion = this.availableQuestions[questionIndex];
    //console.log(currentQuestion);
    this.question= currentQuestion['question'];
    //console.log(this.question);
    this.choice1= currentQuestion['choice1'];
    this.choice2= currentQuestion['choice2'];
    this.choice3= currentQuestion['choice3'];
    this.choice4= currentQuestion['choice4'];
    //console.log(this.choice1);
    this.availableQuestions.splice(questionIndex,1);
    //console.log(this.availableQuestions);
    this.acceptingAnswers = true;

    this.myanswer=currentQuestion['answer'];
    console.log(this.myanswer);

  };
  display1(){
    //console.log(this.choice1);
    //console.log(1===this.myanswer);
    this.answeris = 1===this.myanswer ? "CORRECT" : "INCORRECT";
    //console.log(this.answeris);
    if (this.answeris === "CORRECT") {
      this.incrementScore(this.CORRECT_BONUS);
    }
    setTimeout(() => {this.getNewQuestion();},2000);
  }
  display2(){
   // console.log(this.choice2);
    this.correct = this.currentQuestion['answer'];
    //console.log(2===this.myanswer);
    this.answeris = 2===this.myanswer ? "CORRECT" : "INCORRECT";
    //console.log(this.answeris);
    if (this.answeris === "CORRECT") {
      this.incrementScore(this.CORRECT_BONUS);
    }
    setTimeout(() => {this.getNewQuestion();},2000);
  }
  display3(){
   // console.log(this.choice3);
    this.correct = this.currentQuestion['answer'];
    //console.log(3===this.myanswer);
    this.answeris = 3===this.myanswer ? "CORRECT" : "INCORRECT";
    //console.log(this.answeris);
    if (this.answeris === "CORRECT") {
      this.incrementScore(this.CORRECT_BONUS);
    }
    setTimeout(() => {this.getNewQuestion();},2000);
  }
  display4(){
    //console.log(this.choice4);
    this.correct = this.currentQuestion['answer'];
    //console.log(4===this.myanswer);
    this.answeris = 4===this.myanswer ? "CORRECT" : "INCORRECT";
    //console.log(this.answeris);
    if (this.answeris === "CORRECT") {
      this.incrementScore(this.CORRECT_BONUS);
    }
    setTimeout(() => {this.getNewQuestion();},2000);
  }
  incrementScore = num => {
    this.score+=num;
   // console.log("incremennting score");
    //console.log(this.score);
  }

  
  x=this.startGame();
  y=this.getNewQuestion();
}
