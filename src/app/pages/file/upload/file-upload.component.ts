
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
