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
  selectedTeam = {id: 22};

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

  onSelect(teamId) { 
    this.selectedTeam = null;
    for (var i = 0; i < this.teams.length; i++)
    {
      if (this.teams[i].id == teamId) {
        this.selectedTeam = this.teams[i];
      }
    }
  }
}
