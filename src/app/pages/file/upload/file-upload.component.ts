
import {Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {FileService} from "../../../services/http/file.service";
import {UploadFilePost} from "../../../models/post/file/upload-file.post";
import {Router} from "@angular/router";
import {UploadInputModel} from "../../../models/view/upload-input/upload-input.model";

@Component({
  selector     : 'ev-file-upload',
  templateUrl  : './file-upload.component.html',
  styleUrls    : ['./file-upload.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FileUploadComponent
{
  uploadFilePost: UploadFilePost;
  isUploading: boolean = false;

  constructor(
    private fileService: FileService,
    private router: Router
  )
  {

  }

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
      this.uploadFilePost = new UploadFilePost();
      this.uploadFilePost.size = file.size;
      this.uploadFilePost.name = file.name.split(".")[0];
      this.uploadFilePost.ext = <string>file.name.split('.').pop();
      fileReader.onloadend = function (e) {
        that.uploadFilePost.content = <string>fileReader.result;
      }

      fileReader.readAsDataURL(file);
    }

  }

  uploadFile() {
    this.isUploading = true; // To Disable the button while a request in progress

    // Send file to api
    this.fileService.upload(this.uploadFilePost).subscribe(r => {
      this.isUploading = false; // To Enable the button when a request is done
      if(r.status)
      {
        this.uploadFilePost = new UploadFilePost();
      }
      alert(r.description);
    });
  }

  // redirecting to file list page when "Go To File List" button is clicked
  goToFileList() {
    this.router.navigate(["file/list"])
  }

  onFileUploaded(event: UploadInputModel) {
    this.uploadFilePost = new UploadFilePost();
    this.uploadFilePost.ext = event.ext;
    this.uploadFilePost.size = event.size;
    this.uploadFilePost.content = event.content;
    this.uploadFilePost.name = event.name;
  }
}
