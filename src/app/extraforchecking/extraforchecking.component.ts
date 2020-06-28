import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extraforchecking',
  templateUrl: './extraforchecking.component.html',
  styleUrls: ['./extraforchecking.component.css']
})
export class ExtraforcheckingComponent {
  constructor() {
    let currentQuestion = {};
    let acceptingAnswer = true;
    let score = 0;
    let questionCounter = 0;
    let availableQuestions = [];
  
    let questions = [
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
    const CORRECT_BONUS = 10;
    const MAX_QUESTIONS = 3;
    const question = document.getElementById("question");
    const choices = Array.from(document.getElementsByClassName("choice-text"));

    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);

    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion['question'];
    console.log(question.innerText);
  }


}

