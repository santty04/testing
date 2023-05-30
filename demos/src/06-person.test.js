const Person = require('./06-person');

describe('Test for person', () => {
  let person;

  // Arrange
  beforeEach(() => {
    person = new Person('Santiago', 45, 1.7);
  });

  test('should return down', () => {
    // AAA
    // Arrange / Given
    // Act / When
    // Assert / Then
    // Arrange
    person.weight = 45;
    // Act
    const imc = person.calcIMC();
    // Assert
    expect(imc).toBe('down');
  });

  test('should return normal', () => {
    person.weight = 60;
    const imc = person.calcIMC();
    expect(imc).toBe('normal');
  });
});
