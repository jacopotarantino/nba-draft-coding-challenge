import { Component, OnInit } from '@angular/core';

import { TeamService } from '../team.service';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-rosters',
  templateUrl: './rosters.component.html',
  styleUrls: ['./rosters.component.css']
})
export class RostersComponent implements OnInit {

  constructor(private playerService: PlayerService, private teamService: TeamService) { }

  players;
  teams;

  getPlayers(): void {
    this.players = this.playerService.getPlayers();
  }

  getTeams(): void {
    this.teams = this.teamService.getTeams().filter(team => team.id !== 0);
  }

  ngOnInit() {
    this.getPlayers();
    this.getTeams();
  }
}
