import { Component, forwardRef, OnInit } from '@angular/core';
import {
    AbstractControl,
    ControlValueAccessor,
    FormControl,
    FormGroup, NG_VALIDATORS,
    NG_VALUE_ACCESSOR, NgControl,
    ValidationErrors,
    Validator,
    Validators
} from '@angular/forms';

@Component({
    selector: 'app-cva',
    templateUrl: './cva.component.html',
    styleUrls: ['./cva.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CvaComponent),
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => CvaComponent),
            multi: true
        }
    ]
})
export class CvaComponent implements OnInit, ControlValueAccessor, Validator {

    public cvaForm: FormGroup = new FormGroup(
        {
            cvaFirstName: new FormControl('', [Validators.required]),
            cvaEmail: new FormControl('', [Validators.required, Validators.email]),
        });

    constructor() {
    }

    ngOnInit() {
    }

    public onTouched: () => void = () => {};

    registerOnChange(fn: any): void {
        console.log('on change called for CVA form component');
        this.cvaForm.valueChanges.subscribe(fn);
    }

    registerOnTouched(fn: any): void {
        console.log('on blur called for CVA Form component');
        this.onTouched = fn;
    }

    writeValue(val: any): void {
        val && this.cvaForm.setValue(val, {emitEvent: false});
    }

    validate(control: AbstractControl): ValidationErrors | null {
        return this.cvaForm.valid ? null : {
            cvaFirstName: this.cvaForm.controls.cvaFirstName.errors,
            cvaEmail: this.cvaForm.controls.cvaEmail.errors
        };
    }

}
