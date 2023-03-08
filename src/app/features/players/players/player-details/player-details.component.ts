import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayersFacade } from 'src/app/store/players-store/services/players.facade.service';
import { PlayerStatus } from '../../../../models/player.model';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Transaction } from '../../../../models/transaction.model';

@UntilDestroy()
@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.scss']
})
export class PlayerDetailsComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'type', 'amount', 'status', 'timestamp'];
  public playerStatus = PlayerStatus;
  public dataSource: Transaction[] = [];
  public noItems = false;

  constructor(
    private route: ActivatedRoute,
    private playersFacade: PlayersFacade
  ) { }

  public player$ = this.playersFacade.player$;

  public playerTransactions$ = this.playersFacade.playerTransactions$;
  public playerTransactionsDataList$ = this.playersFacade.playerTransactionsDataList$;

  public ngOnInit(): void {
    const id: number = this.route.snapshot.params?.['id'] as number;
    if (id) {
      this.playersFacade.getPlayer(id);
      this.playersFacade.getPlayerTransactions(id);
    }

    this.playersFacade.playerTransactionsDataList$
      .pipe(
        untilDestroyed(this)
      )
      .subscribe(transactions => {
        this.noItems = transactions.length === 0;
        this.dataSource = transactions;
      })
  }

}
