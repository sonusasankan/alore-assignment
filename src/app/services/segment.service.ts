import { Injectable } from '@angular/core';
import { Segment } from '../models/Segment';
import { Table } from '../models/Table';

@Injectable({
  providedIn: 'root'
})
export class SegmentService {

  segments: any[] = [];

  constructor() {

    this.segments = [
      {
        id: 1,
        title: 'A Segment',
        icon: '🦁',
        desc: 'Some description',
        table: [{
          title: 'table 1',
          icon: '😀',
          color: 'orange'
        }]
      },
      {
        id: 2,
        title: 'New Segment',
        icon: '💥',
        desc: 'Some description',
        table: [{
          title: 'table 2',
          icon: '🏀',
          color: 'blue'
        }]
      }
    ]

  }


  getSegments() {
    return this.segments;
  }

  addSegment(segment: Segment) {
    this.segments.push(segment);
  }

  addTable(table: Table, id: string) {

    let updatedItem = this.segments.find((element) => { return element.id === id })
    updatedItem.table = [...updatedItem.table, table];
  }

}
