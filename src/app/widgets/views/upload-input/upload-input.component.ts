
import {Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild, ViewEncapsulation} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {FileService} from "../../../services/http/file.service";
import {UploadFilePost} from "../../../models/post/file/upload-file.post";
import {ColumnModel} from "../../../models/view/table/column.model";
import {UploadInputModel} from "../../../models/view/upload-input/upload-input.model";

@Component({
  selector     : 'ev-upload-input',
  templateUrl  : './upload-input.component.html',
  styleUrls    : ['./upload-input.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UploadInputComponent
{
  fileObj: UploadInputModel;
  @Output() uploaded: EventEmitter<UploadInputModel> = new EventEmitter();
  constructor() {}

  // file input change event handler
  fileChange(e: any): void {
    this.readThis(e.target);
  }

  // reading the file chosen from file input
  readThis(inputValue: any): void {
    if (inputValue.files && inputValue.files.length > 0)
    {
      let file: File = inputValue.files[0];
      let fileReader: FileReader = new FileReader();
      let that = this;
      this.fileObj = new UploadInputModel();
      this.fileObj.size = file.size;
      this.fileObj.name = file.name.split(".")[0];
      this.fileObj.ext = <string>file.name.split('.').pop();
      fileReader.onloadend = function (e) {
        that.fileObj.content = <string>fileReader.result;
        that.uploaded.emit(that.fileObj);
      }

      fileReader.readAsDataURL(file);
    }
    else
    {
      this.fileObj = new UploadInputModel();
    }

  }

}
