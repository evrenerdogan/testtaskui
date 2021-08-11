
import {Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {FileService} from "../../../services/http/file.service";
import {UploadFilePost} from "../../../models/post/file/upload-file.post";
import {ColumnModel} from "../../../models/view/table/column.model";
import {Router} from "@angular/router";

@Component({
  selector     : 'ev-file-list',
  templateUrl  : './file-list.component.html',
  styleUrls    : ['./file-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FileListComponent implements OnInit
{
  uploadFilePost: UploadFilePost;
  files: any[];
  columns: ColumnModel[] = [
    {key: "name", title: "File Name"},
    {key: "size", title: "File Size"},
    {key: "uploadedAt", title: "File Upload Date"}
  ];


  constructor( private fileService: FileService, private router: Router )
  {

  }

  ngOnInit(): void
  {
    this.listFiles();
  }

  listFiles()
  {
    this.fileService.list().subscribe(r => {
      if (r.status)
      {
        this.files = r.data;
      }
      else
      {
        alert(r.description);
      }
    });
  }

  goToUploadPage() {
    this.router.navigate(["file/upload"])
  }
}
