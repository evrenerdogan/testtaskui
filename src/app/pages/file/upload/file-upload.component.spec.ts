import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FileUploadComponent} from './file-upload.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {TableModule} from "../../../widgets/views/table/table.module";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {BrowserModule} from "@angular/platform-browser";

describe('FileUploadComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserModule,
        HttpClientModule
      ],
      declarations: [
        FileUploadComponent
      ],
      providers: [
        HttpClient,
        CommonModule,
        HttpClientTestingModule,
        TableModule
      ]
    }).compileComponents();
  });

  //
  it(`should call listFiles method`, () => {
    const fixture = TestBed.createComponent(FileUploadComponent);
    const comp = fixture.componentInstance;
  });

  //
  it(`should call listFiles method`, () => {
    const fixture = TestBed.createComponent(FileUploadComponent);
    const comp = fixture.componentInstance;
  });
});
