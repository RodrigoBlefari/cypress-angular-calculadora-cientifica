import { Component } from '@angular/core';
import { CalculatorService } from './services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  display = '';

  constructor(private calculatorService: CalculatorService) {}

  appendValue(value: string) {
    this.display += value;
  }

  calculate() {
    let expression = this.display;

    // Substitui funções científicas por sintaxe do Math.js
    expression = expression.replace(/sqrt\(/g, 'sqrt(');
    expression = expression.replace(/pow\((\d+),\s*(\d+)\)/g, 'pow($1,$2)');
    expression = expression.replace(/log\(/g, 'log10(');
    expression = expression.replace(/exp\(/g, 'exp(');
    expression = expression.replace(/abs\(/g, 'abs(');
    expression = expression.replace(/factorial\(/g, 'factorial(');

    // Avalia a expressão usando a API Math.js
    this.calculatorService.calculate(expression).subscribe(
      (result) => (this.display = result),
      (error) => (this.display = 'Error')
    );
  }

  clear() {
    this.display = '';
  }
}
