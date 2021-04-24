import { Table } from './Table';

export class Segment {
    
    id: number;
    title: string;
    icon: string;
    desc: string;
    table: Table[] = [];

    constructor() {

        this.id = 0;
        this.title = '';
        this.icon = '';
        this.desc = '';
       
    }

}