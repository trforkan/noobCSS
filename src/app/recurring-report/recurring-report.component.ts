import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recurring-report',
  templateUrl: './recurring-report.component.html',
  styleUrls: ['./recurring-report.component.scss']
})
export class RecurringReportComponent implements OnInit {

  radioItems: any[] = [
    { name: "List 0001", ok: true },
    { name: "List 0002", ok: true },
    { name: "List 0003", ok: true },
    { name: "List 0004", ok: true },
    { name: "List 0005", ok: true },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  toggleEvent(index:number){
    this.radioItems[index].ok = !this.radioItems[index].ok;
  }

}
