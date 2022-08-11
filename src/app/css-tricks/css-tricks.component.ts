import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-css-tricks',
  templateUrl: './css-tricks.component.html',
  styleUrls: ['./css-tricks.component.scss']
})
export class CSSTricksComponent implements OnInit {


  menuLists: string[] = [
    "Organization",
    "Phase",
    "Discipline",
    "Recurring Report Preset"
  ];


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  routeLink(value: MatTabChangeEvent) {
    const urlName = this.menuLists[value.index];
    const url = urlName.split(' ').join('+')
    console.log(url);
    this.router.navigateByUrl('/'+url.toLowerCase());
  }

}
