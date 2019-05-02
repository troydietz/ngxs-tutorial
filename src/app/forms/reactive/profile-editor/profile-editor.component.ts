import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-profile-editor',
    templateUrl: './profile-editor.component.html',
    styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent {

    profileForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.profileForm = this.fb.group({
            firstName: ['', Validators.required],
            lastName: [''],
            email: ['', [Validators.required, Validators.email]],
            address: this.fb.group({
                street: [''],
                city: [''],
                state: [''],
                zip: ['']
            }),
        });
        this.profileForm.valueChanges.subscribe(val => {
            console.log('profileForm changed', this.profileForm);
        })
    }

    getEmailErrors(): string {
        //return JSON.stringify(this.profileForm.);
        return '';
    }

    updateProfile() {
        this.profileForm.patchValue({
            firstName: 'Nancy',
            address: {
                street: '123 Drew Street'
            }
        });
    }

    onSubmit() {
        console.warn(this.profileForm.value);
    }
}