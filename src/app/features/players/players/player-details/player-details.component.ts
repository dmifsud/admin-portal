import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayersFacade } from 'src/app/store/players-store/services/players.facade.service';
import { PlayerStatus } from '../../../../models/player.model';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.scss']
})
export class PlayerDetailsComponent implements OnInit {

  public playerStatus = PlayerStatus;

  constructor(
    private route: ActivatedRoute,
    private playersFacade: PlayersFacade
  ) { }

  public player$ = this.playersFacade.player$;

  public ngOnInit(): void {
    const id: number = this.route.snapshot.params?.['id'] as number;
    if (id) {
      this.playersFacade.getPlayer(id);
    }
  }

}
