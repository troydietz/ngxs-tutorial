import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-nested',
    templateUrl: './nested.component.html',
    styleUrls: ['./nested.component.css']
})
export class NestedComponent implements OnInit {
    // TODO look into how to initialize forms
    private initialValue = {
        cva: {
            cvaFirstName: 'CVA First Name',
            cvaEmail: 'cva@email.com'
        },
        simpleNesting: {
            simpleNestingFirstName: 'Simple Nesting First Name',
            simpleNestingEmail: 'simpleNesting@email.com'
        }
    };

    public profileForm: FormGroup;

    constructor() {
    }

    public ngOnInit(): void {
        this.profileForm = new FormGroup({
            cva: new FormControl(this.initialValue.cva)
        });
    }

    updateValue() {
        this.profileForm.setValue(this.initialValue);
    }

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
