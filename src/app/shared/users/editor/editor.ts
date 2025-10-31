import { Component, input, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Modal } from '../../components/modal/modal';

@Component({
  selector: 'app-user-editor',
  imports: [Modal, ReactiveFormsModule],
  templateUrl: './editor.html',
  styleUrl: './editor.scss',
})
export class UserEditor {
  modalId = input<string>();
  userForm!: FormGroup;
  isEdit = signal<boolean>(false);

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  ngOnDestroy() {
    this.isEdit.set(false);
  }

  handleSubmit() {
    console.log(this.userForm.value);
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      email: ['@gmail.com', [Validators.required]],
      password: ['password', [Validators.required]],
      role: ['student', [Validators.required]],
    });
  }

  setUserData(user: User | null) {
    if (user) {
      this.isEdit.set(true);

      this.userForm.patchValue({
        username: user.username,
        email: user.email,
        password: user.password,
        role: user.role,
      });
    }
  }
}
