import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-expansiondata',
  templateUrl: './expansiondata.component.html',
  styleUrls: ['./expansiondata.component.scss']
})
export class ExpansiondataComponent implements OnInit {

  @Input() itemName: string | null = "Organization";

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
