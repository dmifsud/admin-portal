import { Component, OnInit } from '@angular/core';
import { PlayersFacade } from '../../../store/players-store/services/players.facade.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter } from 'rxjs';
import { Player, PlayerStatus } from '../../../models/player.model';
import { Router } from '@angular/router';

@UntilDestroy()
@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  public displayedColumns: string[] = ['icon', 'id', 'name', 'surname', 'email', 'status', 'balance', 'registrationTimestamp'];
  public dataSource: Player[] = [];
  public playerStatus = PlayerStatus;
  
  constructor(
    private playersFacade: PlayersFacade,
    private router: Router
    ) { }

    public players$ = this.playersFacade.players$;
    public playersDataList$ = this.playersFacade.playersDataList$;

  public ngOnInit(): void {
    this.playersFacade.getPlayers();

    this.playersFacade.playersDataList$
      .pipe(
        untilDestroyed(this)
      )
      .subscribe(players => {
        this.dataSource = players;
      })
  }

  public selectRow(player: Player): void {
    console.log('redirect to ', player.id);
    void this.router.navigate(['/players', player.id]);
  }

}
