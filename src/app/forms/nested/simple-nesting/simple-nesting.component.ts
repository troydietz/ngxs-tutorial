import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
    selector: 'app-simple-nesting',
    templateUrl: './simple-nesting.component.html',
    styleUrls: ['./simple-nesting.component.css'],
    viewProviders: [
        {
            provide: ControlContainer,
            useExisting: FormGroupDirective
        }
    ]


})
export class SimpleNestingComponent implements OnInit {
    @Input()
    initialValue: { simpleNestingFirstName: string, simpleNestingEmail: string };

    public simpleNestingForm: FormGroup;

    constructor(private parent: FormGroupDirective) {
    }

    ngOnInit() {
        this.simpleNestingForm = new FormGroup({
            simpleNestingFirstName: new FormControl(this.initialValue ? this.initialValue.simpleNestingFirstName : '', [Validators.required]),
            simpleNestingEmail: new FormControl(this.initialValue ? this.initialValue.simpleNestingEmail : '', [Validators.required, Validators.email])
        });
        this.parent.form.addControl('simpleNesting', this.simpleNestingForm);
    }

    getFirstNameErrorState() {
        return JSON.stringify(this.simpleNestingForm.controls.simpleNestingFirstName.errors);
    }

    getEmailErrorState() {
        return JSON.stringify(this.simpleNestingForm.controls.simpleNestingEmail.errors);
    }

}
