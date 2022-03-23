import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MenuComponent} from "./menu/menu.component";
import {FileComponent} from "./file/file.component";
import {NewComponent} from "./new/new.component";
import {BookmarkComponent} from "./bookmark/bookmark.component";
import {VideoComponent} from "./video/video.component";
import {EditComponent} from "./edit/edit.component";
import {DeleteComponent} from "./delete/delete.component";
import {ExportComponent} from "./export/export.component";
import {CopyComponent} from "./copy/copy.component";

const routes: Routes = [
  {
    path:'Menu',
    component:MenuComponent,
    children:[{
      path:'File',
      component:FileComponent,
      children:[{
        path:'New',
        component:NewComponent,
        children:[{
          path:'Bookmark',
          component:BookmarkComponent
        },
          {
            path:'Video',
            component:VideoComponent
          }
        ]
      },
        {
          path:'Delete',
          component:DeleteComponent
        },
        {
          path:'Export',
          component:ExportComponent
        }
      ]

    },
      {
        path:'Edit',
        component:EditComponent,
        children:[{
          path: 'Copy',
          component: CopyComponent
        }]
      },

    ],

  },
  { path: '', redirectTo: '/Menu', pathMatch: 'full' },
  { path: '**', redirectTo: '/Menu' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
