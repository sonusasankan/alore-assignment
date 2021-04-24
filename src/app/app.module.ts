import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule }  from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';


import { PickerModule } from '@ctrl/ngx-emoji-mart';


import { SearchComponent } from './components/search/search.component';
import { SegmentsComponent } from './components/segments-menu/segments.component';
import { AddSegmentFormComponent } from './components/add-segment-form/add-segment-form.component';
import { DisplaySegmentsComponent } from './components/display-segments/display-segments.component';
import { AddTableFormComponent } from './components/add-table-form/add-table-form.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SegmentsComponent,
    AddSegmentFormComponent,
    DisplaySegmentsComponent,
    AddTableFormComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatDialogModule,
    PickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
