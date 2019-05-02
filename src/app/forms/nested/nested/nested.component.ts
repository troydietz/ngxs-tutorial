import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nested',
  templateUrl: './nested.component.html',
  styleUrls: ['./nested.component.css']
})
export class NestedComponent implements OnInit {
    constructor() {}

    public ngOnInit(): void {
    }

    profileForm = new FormGroup({
        cva: new FormControl('')
    });

    getFormValueJson() {
        return JSON.stringify(this.profileForm.value);
    }

    getCVAErrorState() {
        return JSON.stringify(this.profileForm.controls.cva.errors);
    }
    onSubmit() {
        console.warn(this.profileForm.value);
    }
}
