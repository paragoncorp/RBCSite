import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  form = {
    name: '',
    email: '',
    company: '',
    message: ''
  };

  submitted = signal(false);

  onSubmit() {
    this.submitted.set(true);
    setTimeout(() => {
      this.form = { name: '', email: '', company: '', message: '' };
    }, 500);
  }
}
