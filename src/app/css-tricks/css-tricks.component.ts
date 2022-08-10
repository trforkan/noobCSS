import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-css-tricks',
  templateUrl: './css-tricks.component.html',
  styleUrls: ['./css-tricks.component.scss']
})
export class CSSTricksComponent implements OnInit {


  menuLists: string[] = [
    "ORGANIZATION",
    "PHASE",
    "DISCIPLINE",
    "RECURRING-REPORT-PRESET"
  ];


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  routeLink(value: string) {
    this.router.navigateByUrl('/'+value.toLowerCase());
  }

}
