import { Injectable } from '@angular/core';

const teams = [{
  id: 21,
  name: 'lebron team',
  players: []
}, {
  id: 22,
  name: 'james team',
  players: []
}, {
  id: 23,
  name: 'bob team',
  players: []
}, {
  id: 24,
  name: 'burgers team',
  players: []
}, {
  id: 25,
  name: 'archer team',
  players: []
}, {
  id: 26,
  name: 'scooby team',
  players: []
}, {
  id: 27,
  name: 'cody team',
  players: []
}, {
  id: 28,
  name: 'cooper team',
  players: []
}, {
  id: 29,
  name: 'muffins team',
  players: []
}, {
  id: 210,
  name: 'spike team',
  players: []
}, ]

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor() { }

  getTeams() {
    return teams;
  }
}
