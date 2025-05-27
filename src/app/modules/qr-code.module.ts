import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QrCodeMainComponent } from './qr-code-main.component';
import { DrgDropComponent } from './components/drg-drop/drg-drop.component';
import { MaterialModulesModule } from '../core/material/material-modules.module';
import { DragDropModulesModule } from '../core/drag-drop/drag-drop.module';
import { DrgDropBetweenListComponent } from './components/drg-drop-between-list/drg-drop-between-list.component';
import { CountryCodeComponent } from './components/country-code/country-code.component';
import { HttpClientModule } from '@angular/common/http';

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
      {
        path: 'country-code',
        component: CountryCodeComponent,
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
    CountryCodeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModulesModule,
    DragDropModulesModule,
    HttpClientModule,
  ],
})
export class QrCodeModule {}
