import { Component, OnInit } from '@angular/core';
import { Segment } from '../../models/Segment';
import { SegmentService } from '../../services/segment.service';
import { AddSegmentFormComponent } from '../add-segment-form/add-segment-form.component';

//material
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-segments',
  templateUrl: './segments.component.html',
  styleUrls: ['./segments.component.scss']
})

export class SegmentsComponent implements OnInit {

  segments: Segment[] = [];

  constructor(private segmentService: SegmentService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.segments = this.segmentService.getSegments();
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.width = '500px';
    dialogConfig.height = '570px';

    this.dialog.open(AddSegmentFormComponent, dialogConfig);
  }

  // addSegment(segment: Segment) {
  //   // this.segments = [...this.segments, segment]
  //   this.segmentService.addSegment(segment);
  // }

}

