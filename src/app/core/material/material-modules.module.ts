import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';

const materialModules = [MatIconModule, MatButtonModule, MatBadgeModule];

@NgModule({
  imports: [CommonModule, ...materialModules],
  exports: [CommonModule, ...materialModules],
})
export class MaterialModulesModule {}
