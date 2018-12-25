import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutingGuard } from './core/routing/routing.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: './screens/home/home.module#HomeModule',
        canActivate: [RoutingGuard],
        canDeactivate: [RoutingGuard],
        data: {
          animation: 'ForwardPage'
        }
      },
      {
        path: 'graphql-and-websockets',
        loadChildren: './screens/graphql-and-websockets/graphql-and-websockets.module#GraphqlAndWebsocketsModule',
        canActivate: [RoutingGuard],
        canDeactivate: [RoutingGuard],
        data: {
          animation: 'LeftPage'
        }
      },
      {
        path: 'dnd-and-pwa',
        loadChildren: './screens/dnd-and-pwa/dnd-and-pwa.module#DndAndPwaModule',
        canActivate: [RoutingGuard],
        canDeactivate: [RoutingGuard],
        data: {
          animation: 'RightPage'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
