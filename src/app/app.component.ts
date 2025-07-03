import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SheetsService } from '../services/sheets.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  ventaForm: FormGroup;

  constructor(private fb: FormBuilder, private sheetsService: SheetsService) {
    this.ventaForm = this.fb.group({
      nombreCliente: ['', Validators.required],
      tipoCafe: ['Honduras', Validators.required],
      tipoTueste: ['medio', Validators.required],
      tipoGramaje: ['250gr', Validators.required],
      cantidad: [1, [Validators.required, Validators.min(1)]],
    });
  }
  onSubmit() {
    if (this.ventaForm.valid) {
      this.sheetsService.enviarVenta(this.ventaForm.value).subscribe({
        next: () => alert('Formulario enviado con éxito!'),
        error: (err) => alert('Error al enviar formulario: ' + err.message),
      });
    } else {
      alert('Por favor, completa todos los campos correctamente.');
    }
  }
}
