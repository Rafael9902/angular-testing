import { inject, Injectable } from '@angular/core';
import { LoggerService } from '../../shared/services/logger/logger.service';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  logger = inject(LoggerService);

  add(number1: number, number2: number): number {
    this.logger.log(`Add ${number1} and ${number2}`);

    return number1 + number2;
  }

  substract(number1: number, number2: number) {
    this.logger.log(`Add ${number1} and ${number2}`);

    return number1 - number2;
  }
}
