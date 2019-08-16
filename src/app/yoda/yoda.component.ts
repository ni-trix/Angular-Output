import { Component, OnInit } from '@angular/core';
import { Question } from '../common/question';

@Component({
  selector: 'app-yoda',
  templateUrl: './yoda.component.html',
  styleUrls: ['./yoda.component.scss']
})
export class YodaComponent implements OnInit {

  questions: Array<Question>;
  answers = [];
  average = 0;
  results = false;

  constructor() { }

  ngOnInit() {

    this.questions = [
      new Question('1', 'Aimes-tu les logiciels libres ?', true, 3),
      new Question('2', 'La force a-t-elle créé Linux ?', true, 1),
      new Question('3', 'Est-ce que le code, c est la vie ?', true, 2),
      new Question('4', 'PrÉfÈres-tu les GUI au CLI ?', false, 3),
      new Question('5', 'L histoire de la force a-t-elle écrite par Git ?', true, 2),
      new Question('6', ' La documentation est-elle le meilleur ami de la force ?', true, 2),
      new Question('7', 'Penses-tu que tester c est douter ?', false, 1),
      new Question('8', 'Javascript est-il le Java du web ? ', false, 1),
      new Question('9', 'L open source se situe dans les Alpes ? ', false, 4),
      new Question('10', 'Angular est-il une pierre magique ?', false, 1),
    ];
    console.log(this.questions);

  }

  onGetAnswer($event) {
    this.answers.push($event);
    console.log(this.answers);
    if (this.answers.length === 10) {
      console.log('go');
      this.checkAnswers(this.answers);
    }
  }

  checkAnswers(answers) {
    console.log('in');

    for (let i = 0; i < 10; i++) {
      if (answers[i] === this.questions[i].answer) {
        this.average = this.average + this.questions[i].score;
      }
    }
    this.results = true;
    console.log(this.average);
  }
}
