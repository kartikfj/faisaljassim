import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private firestoreService: ContactService
  ) {
    // Initialize the form with FormBuilder
    this.contactForm = this.fb.group({
      your_name: ['', Validators.required],
      contact_number: ['', Validators.required],
      your_email: ['', [Validators.required, Validators.email]],
      your_company: ['', Validators.required],
      company_landline: ['', Validators.required],
      company_website: [''],
      your_region: ['', Validators.required],
      your_subject: [''],
      your_message: ['', Validators.required]
    });
  }

  // Method to handle form submission
  onSubmit() {
    if (this.contactForm.valid) {
      this.firestoreService.addContact(this.contactForm.value)
        .then(() => {
          console.log('Contact data sent to Firestore');
          this.contactForm.reset(); // Reset the form after submission
        })
        .catch(()=>{
          console.error('Error sending contact data to Firestore:');
        });
    } else {
      console.error('Form is invalid');
    }
  }
}
