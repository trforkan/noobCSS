import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs'


const Material = [
  MatIconModule,
  MatExpansionModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatButtonModule,
  MatDividerModule,
  MatFormFieldModule,
  MatTabsModule
];


@NgModule({

  imports: [
    Material
  ],

  exports: [
    Material
  ]
})
export class MaterialModule { }
