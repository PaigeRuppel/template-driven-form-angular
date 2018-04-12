import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') form: NgForm;
  defaultSubscription = 'Advanced';
  submitted = false;
  newSubscription = {
    email: '',
    subscriptionLevel: '',
    password: ''
  }


onSubmit() {
  console.log(this.form);
  this.submitted = true;
  this.newSubscription.email = this.form.value.email;
  this.newSubscription.subscriptionLevel = this.form.value.subscriptionLevel;
  this.form.reset();
}
}

