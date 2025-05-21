import { Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/qr-code.module').then((m) => m.QrCodeModule),
      },
    ],
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];
