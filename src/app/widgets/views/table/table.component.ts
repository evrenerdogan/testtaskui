
import {Component, Input, OnInit, TemplateRef, ViewChild, ViewEncapsulation} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {FileService} from "../../../services/http/file.service";
import {UploadFilePost} from "../../../models/post/file/upload-file.post";
import {ColumnModel} from "../../../models/view/table/column.model";

@Component({
  selector     : 'ev-table',
  templateUrl  : './table.component.html',
  styleUrls    : ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableComponent implements OnInit
{
  @Input() columns: ColumnModel[];
  @Input() data: any[];
  constructor()
  {
    this.columns = this.columns ?? [];
  }

  ngOnInit(): void
  {
    this.columns = this.columns ?? [];
    this.data = this.data ?? [];
  }

}
