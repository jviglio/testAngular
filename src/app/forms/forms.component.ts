import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss',
})
export class FormsComponent {
  form = new FormGroup({
    companyName: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(8)],
    }),
    taxId: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(8)],
    }),
    phones: new FormArray<FormControl<string>>([
      new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    ]),
  });

  get phones(): FormArray<FormControl<string>> {
    return this.form.get('phones') as FormArray<FormControl<string>>;
  }

  addPhone(): void {
    this.phones.push(new FormControl('', { nonNullable: true, validators: [Validators.required] }));
  }

  removePhone(index: number): void {
    this.phones.removeAt(index);
  }

  save(): void {
    if (this.form.valid) {
      // getRawValue() incluye todos los campos tipados, sin el Partial<...>
      // que devuelve .value (que excluye controles disabled).
      console.log(this.form.getRawValue());
    }
  }
}
