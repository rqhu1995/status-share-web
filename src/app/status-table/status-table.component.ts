import {Component, OnInit} from '@angular/core';
import {ItemData} from '../ItemData';
import {ServiceService} from "../service.service";

@Component({
  selector: 'app-status-table',
  templateUrl: './status-table.component.html',
  styles: [
    `
      .editable-cell {
        position: relative;
        padding: 5px 12px;
        cursor: pointer;
      }

      .editable-row:hover .editable-cell {
        border: 1px solid #d9d9d9;
        border-radius: 4px;
        padding: 4px 11px;
      }
    `
  ]
})
export class StatusTableComponent implements OnInit {
  i = 0;
  editId: string | null = null;
  listOfData: ItemData[] = [];
  constructor(private service: ServiceService) {
  }

  ngOnInit(): void {
    this.readData();
    // this.addRow();
  }

  startEdit(id: string): void {
    this.editId = id;
  }

  stopEdit(): void {
    this.editId = null;
  }

  readData(): void {
    // this.listOfData = [
    //   ...this.listOfData,
    //   {
    //     id: `${this.i}`,
    //     name: `Edward King ${this.i}`,
    //     status: true,
    //     info: `London, Park Lane no. ${this.i}`
    //   }
    // ];
    //
    // this.i++;
    this.service.getUserList().subscribe(
      data => {
        this.listOfData = data;
      }
    );
  }

  submit(user_id: string): void {
    // console.log(user_id);
    this.service.setUserList(this.listOfData[parseInt(user_id) - 1]).subscribe(
      data => {
        this.listOfData = data;
      }
    );
    // this.listOfData = this.listOfData.filter(d => d.id !== id);
  }
}
