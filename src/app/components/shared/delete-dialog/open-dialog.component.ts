import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';


@Component({
  selector: 'app-delete-dialog',
  templateUrl: './open-dialog.component.html',
  styleUrls: ['./open-dialog.component.scss']
})
export class DeleteDialogComponent {
  @Output() newItemEvent = new EventEmitter<string>();

  constructor(public dialog: MatDialog) { }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {

    const dialogResult = this.dialog.open(DialogComponent, {
      width: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogResult.afterClosed().subscribe((res) => {

      if(res === true){
        this.newItemEvent.emit();
      }

    })


  }
}


