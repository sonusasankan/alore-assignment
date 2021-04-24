import { Component, OnInit } from '@angular/core';
import { Segment } from 'src/app/models/Segment';
import { SegmentService } from '../../services/segment.service';
import {MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddTableFormComponent } from '../add-table-form/add-table-form.component';

export interface DialogData {
  id: ''
}

@Component({
  selector: 'app-display-segments',
  templateUrl: './display-segments.component.html',
  styleUrls: ['./display-segments.component.scss']
})
export class DisplaySegmentsComponent implements OnInit {
  
  segments: Segment[] = [];

  constructor(private segmentService: SegmentService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.segments = this.segmentService.getSegments();
  }

  openDialog(id: any): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.height = '400px';
    dialogConfig.width = '400px';

    this.dialog.open(AddTableFormComponent, {data : {id: id}});
  }

}
