import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-familiar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-familiar.component.html',
  styleUrl: './form-familiar.component.css'
})
export class FormFamiliarComponent {

}
