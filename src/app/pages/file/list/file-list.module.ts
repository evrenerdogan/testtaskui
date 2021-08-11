
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FileListComponent} from "./file-list.component";
import {CommonModule} from "@angular/common";
import {TableModule} from "../../../widgets/views/table/table.module";

const routes = [
  {
    path     : '',
    component: FileListComponent
  }
];

@NgModule({
  declarations: [
    FileListComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    TableModule
  ]
})
export class FileListModule
{
}
