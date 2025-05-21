import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { SimpleQrComponent } from './components/simple-qr/simple-qr.component';
import { RouterModule, Routes } from '@angular/router';
import { QrCodeMainComponent } from './qr-code-main.component';
import { QrCodeImageComponent } from './components/qr-code-image/qr-code-image.component';
import { DrgDropComponent } from './components/drg-drop/drg-drop.component';
import { MaterialModulesModule } from '../core/material/material-modules.module';

const routes: Routes = [
  {
    path: '',
    component: QrCodeMainComponent,
    children: [
      {
        path: 'qr-code-simple',
        component: SimpleQrComponent,
      },
      {
        path: 'qr-code-image',
        component: QrCodeImageComponent,
      },
      {
        path: 'drag-drop',
        component: DrgDropComponent,
      },
      { path: '**', redirectTo: 'qr-code-simple', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: 'qr-code-simple', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    SimpleQrComponent,
    QrCodeMainComponent,
    QrCodeImageComponent,
    DrgDropComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModulesModule,
    CdkDropList,
    CdkDrag,
  ],
})
export class QrCodeModule {}
