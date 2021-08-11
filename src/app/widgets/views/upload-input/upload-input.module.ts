
import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {UploadInputComponent} from "./upload-input.component";

@NgModule({
  declarations: [
    UploadInputComponent
  ],
  exports: [
    UploadInputComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UploadInputModule
{
}
