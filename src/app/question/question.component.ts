import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../common/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @Input() question: Question;
  @Output() getAnswer: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  sendAnswerTrue() {
    this.getAnswer.emit(true);
  }

  sendAnswerFalse() {
    this.getAnswer.emit(false);

  }

}
