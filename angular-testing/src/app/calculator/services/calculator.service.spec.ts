import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';
import { LoggerService } from '../../shared/services/logger/logger.service';

describe('CalculatorService', () => {
  let service: CalculatorService;
  let logger: LoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
    logger = TestBed.inject(LoggerService);

    spyOn(logger, 'log');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add two numbers', () => {
    // Arrange
    const number1: number = 5;
    const number2: number = 4;

    // Act
    const calculator: number = service.add(number1, number2);

    // Assert
    expect(logger.log).toHaveBeenCalledTimes(1);
    expect(calculator).toBe(9);
  });

  it('should substract two numbers', () => {
    // Arrange
    const number1: number = 50;
    const number2: number = 12;

    // Act
    const calculator: number = service.substract(number1, number2);

    // Assert
    expect(logger.log).toHaveBeenCalledTimes(1);
    expect(calculator).toBe(38);
  });
});
