
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FileUploadComponent} from "./file-upload.component";
import {CommonModule} from "@angular/common";
import {UploadInputModule} from "../../../widgets/views/upload-input/upload-input.module";

const routes = [
  {
    path     : '',
    component: FileUploadComponent
  }
];

@NgModule({
  declarations: [
    FileUploadComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    UploadInputModule
  ]
})
export class FileUploadModule
{

}
