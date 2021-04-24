import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { SegmentService } from 'src/app/services/segment.service';
import { FormError } from '../../models/FormError';

@Component({
  selector: 'app-add-segment-form',
  templateUrl: './add-segment-form.component.html',
  styleUrls: ['./add-segment-form.component.scss']
})
export class AddSegmentFormComponent implements OnInit {

  @Output() addSegment: EventEmitter<any> = new EventEmitter();
  
  form: FormGroup = new FormGroup({
    title: new FormControl(''),
    icon: new FormControl(''),
    desc: new FormControl(''),
  });

  id: string = '';
  icon: string = '';
  formError: FormError = new FormError;
  toggled: boolean = false;

  
  constructor(private segmentService: SegmentService, fb: FormBuilder) { 

    this.form = fb.group({
      title: ["", Validators.required],
      icon: [{value: '', disabled: true}, [Validators.pattern('\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff]')]],
      desc: [{value: '', disabled: true}]
    });

  }

  ngOnInit(): void {
  }

  onBlur() {
    if(this.form.valid) {
      this.form.controls['icon'].enable();
      this.form.controls['desc'].enable();
    }
  }

  toggleEmoji() {
    this.toggled = !this.toggled;
  }

  addEmoji(event: any){
    this.form.patchValue({
      icon: event.emoji.native
    })
  }

  onSubmit() {

    let title = this.form.value.title;
    const nameCheck = this.segmentService.getSegments().find((element) => element.title === title);

    const id = new Date().getUTCMilliseconds()
    const segment = {id: id, table: [], ...this.form.value}

    if(this.form.valid && !nameCheck) {
      this.segmentService.addSegment(segment);
      this.form.reset();
    }else{
      this.formError.title = 'Name already exists'
    }
  
  }

}
