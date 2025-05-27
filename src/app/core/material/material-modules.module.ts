import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

const materialModules = [
  MatIconModule,
  MatButtonModule,
  MatBadgeModule,
  MatFormFieldModule,
  MatSelectModule,
];

@NgModule({
  imports: [CommonModule, ...materialModules],
  exports: [CommonModule, ...materialModules],
})
export class MaterialModulesModule {}
