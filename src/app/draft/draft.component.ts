import { Component, OnInit } from '@angular/core';

import { PlayerService } from '../player.service';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.css']
})
export class DraftComponent implements OnInit {

  constructor(private playerService: PlayerService, private teamService: TeamService) { }

  players;
  teams;

  getPlayers(): void {
    this.players = this.playerService.getPlayers();
  }

  getTeams(): void {
    this.teams = this.teamService.getTeams();
  }

  ngOnInit() {
    this.getPlayers();
    this.getTeams();
  }

  onSelect(teamId, playerId) { 
    const theTeam = this.teams.find(function (team) {
      return team.id === parseInt(teamId);
    });
    const thePlayer = this.players.find(function (player) {
      return player.id === parseInt(playerId);
    })

    theTeam.players.push(thePlayer);
    this.players.splice(this.players.indexOf(thePlayer), 1);
  }
}
