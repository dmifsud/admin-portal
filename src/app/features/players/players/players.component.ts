import { Component, OnInit } from '@angular/core';
import { PlayersFacade } from '../../../store/players-store/services/players.facade.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter } from 'rxjs';
import { Player, PlayerStatus } from '../../../models/player.model';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  // {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  // {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  // {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@UntilDestroy()
@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  displayedColumns: string[] = ['icon', 'id', 'name', 'surname', 'email', 'status', 'balance', 'registrationTimestamp'];
  public dataSource: Player[] = [];
  public playerStatus = PlayerStatus;
  
  constructor(
    public playersFacade: PlayersFacade
    ) { }

    public players$ = this.playersFacade.players$;
    public playersDataList$ = this.playersFacade.playersDataList$;

  ngOnInit(): void {
    this.playersFacade.getPlayers();

    this.playersFacade.playersDataList$
      .pipe(
        untilDestroyed(this)
      )
      .subscribe(players => {
        this.dataSource = players;
      })
  }

}
