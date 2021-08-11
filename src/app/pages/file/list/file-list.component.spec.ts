import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FileListComponent } from './file-list.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {TableModule} from "../../../widgets/views/table/table.module";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {BrowserModule} from "@angular/platform-browser";

describe('FileListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserModule,
        HttpClientModule
      ],
      declarations: [
        FileListComponent
      ],
      providers: [
        HttpClient,
        CommonModule,
        HttpClientTestingModule,
        TableModule
      ]
    }).compileComponents();
  });

  // make sure that listFiles method is called when component is loading
  it(`should call listFiles method`, () => {
    const fixture = TestBed.createComponent(FileListComponent);
    const comp = fixture.componentInstance;
    spyOn(comp, 'listFiles');
    comp.ngOnInit();
    expect(comp.listFiles).toHaveBeenCalled();
  });

  // make sure that listFiles method is NOT called before component is loading
  it(`should call listFiles method`, () => {
    const fixture = TestBed.createComponent(FileListComponent);
    const comp = fixture.componentInstance;
    spyOn(comp, 'listFiles');
    expect(comp.listFiles).not.toHaveBeenCalled();
  });
});
