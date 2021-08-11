import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FileUploadComponent} from './file-upload.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {TableModule} from "../../../widgets/views/table/table.module";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {BrowserModule} from "@angular/platform-browser";
import {UploadInputModule} from "../../../widgets/views/upload-input/upload-input.module";
import {UploadFilePost} from "../../../models/post/file/upload-file.post";

describe('FileUploadComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserModule,
        HttpClientModule,
        UploadInputModule
      ],
      declarations: [
        FileUploadComponent
      ],
      providers: [
        HttpClient,
        CommonModule
      ]
    }).compileComponents();
  });

  // upload button should appear when file is chosen
  it(`upload button should appear`, () => {
    const fixture = TestBed.createComponent(FileUploadComponent);
    const comp = fixture.componentInstance;
    comp.uploadFilePost = new UploadFilePost();
    comp.uploadFilePost.content = "asa";
    fixture.detectChanges();
    let button = fixture.nativeElement.querySelector('#upload-button');
    console.log(button);
    expect(button).toBeDefined();
  });

  // upload button shouldnt appear
  it(`upload button should NOT appear`, () => {
    const fixture = TestBed.createComponent(FileUploadComponent);
    const comp = fixture.componentInstance;
    comp.uploadFilePost = new UploadFilePost();
    fixture.detectChanges();
    let button = fixture.nativeElement.querySelector('#upload-button');
    console.log(button);
    expect(button).toBeNull();
  });
});
