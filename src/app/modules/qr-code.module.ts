import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QrCodeMainComponent } from './qr-code-main.component';
import { DrgDropComponent } from './components/drg-drop/drg-drop.component';
import { MaterialModulesModule } from '../core/material/material-modules.module';
import { DragDropModulesModule } from '../core/drag-drop/drag-drop.module';
import { DrgDropBetweenListComponent } from './components/drg-drop-between-list/drg-drop-between-list.component';

const routes: Routes = [
  {
    path: '',
    component: QrCodeMainComponent,
    children: [
      {
        path: 'drag-drop',
        component: DrgDropComponent,
      },
      {
        path: 'drag-drop-list',
        component: DrgDropBetweenListComponent,
      },
      { path: '**', redirectTo: 'drag-drop', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: 'drag-drop', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    QrCodeMainComponent,
    DrgDropComponent,
    DrgDropBetweenListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModulesModule,
    DragDropModulesModule,
  ],
})
export class QrCodeModule {}
