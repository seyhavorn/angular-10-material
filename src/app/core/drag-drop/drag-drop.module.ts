import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';

const dragDropModules = [CdkDropList, CdkDrag];

@NgModule({
  imports: [CommonModule, ...dragDropModules],
  exports: [CommonModule, ...dragDropModules],
})
export class DragDropModulesModule {}
