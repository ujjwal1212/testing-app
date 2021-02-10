import { Component, OnInit } from '@angular/core';
import { count } from 'console';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  countClicks: number;
  constructor() {
    this.countClicks = 0;
  }

  ngOnInit() {
  }

  addClicks() {
    this.countClicks++;
  }

  removeClicks() {
    this.countClicks--;
  }

}
