import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path         : '',
    pathMatch    :"full",
    redirectTo   :"file/upload",

  },
  {
    path         : 'file/upload',
    pathMatch    :"full",
    loadChildren : () => import('./pages/file/upload/file-upload.module').then(m => m.FileUploadModule)
  },
  {
    path         : 'file/list',
    pathMatch    :"full",
    loadChildren : () => import('./pages/file/list/file-list.module').then(m => m.FileListModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
