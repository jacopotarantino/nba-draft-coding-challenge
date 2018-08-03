import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rosters',
  templateUrl: './rosters.component.html',
  styleUrls: ['./rosters.component.css']
})
export class RostersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  teams = [{
    id: 21,
    name: 'lebron team'
  }, {
    id: 22,
    name: 'james team'
  }, {
    id: 23,
    name: 'bob team'
  }, {
    id: 24,
    name: 'burgers team'
  }, {
    id: 25,
    name: 'archer team'
  }, {
    id: 26,
    name: 'scooby team'
  }, {
    id: 27,
    name: 'cody team'
  }, {
    id: 28,
    name: 'cooper team'
  }, {
    id: 29,
    name: 'muffins team'
  }, {
    id: 210,
    name: 'spike team'
  }, ]
}