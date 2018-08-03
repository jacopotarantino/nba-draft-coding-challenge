import { Injectable } from '@angular/core';

const players = [{
  id: 1,
  name: 'lebron'
}, {
  id: 2,
  name: 'james'
}, {
  id: 3,
  name: 'bob'
}, {
  id: 4,
  name: 'burgers'
}, {
  id: 5,
  name: 'archer'
}, {
  id: 6,
  name: 'scooby'
}, {
  id: 7,
  name: 'cody'
}, {
  id: 8,
  name: 'cooper'
}, {
  id: 9,
  name: 'muffins'
}, {
  id: 10,
  name: 'spike lee'
}, ];

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() { }

  getPlayers() {
    return players;
  }
}
