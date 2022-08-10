import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phase',
  templateUrl: './phase.component.html',
  styleUrls: ['./phase.component.scss']
})
export class PhaseComponent implements OnInit {

  radioItems: any[] = [
    { name: "List 1", ok: true },
    { name: "List 2", ok: true },
    { name: "List 3", ok: true },
    { name: "List 4", ok: true },
    { name: "List 5", ok: true },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  toggleEvent(index:number){
    this.radioItems[index].ok = !this.radioItems[index].ok;
  }

}
