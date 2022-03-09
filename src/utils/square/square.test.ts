import {square} from "./square";

describe('square', () => {
  // Вызывается перед каждым тестом
  beforeEach(() => {
    // Добавить в БД
  })
  // Вызывается один раз перед всеми тестами
  beforeAll(() => {
    
  })
  test('Корректное значение', () => {
    // expect(square(2)).toBe(4);
    // expect(square(2)).toBeLessThan(5);
    // expect(square(2)).toBeGreaterThan(3);
    // expect(square(2)).not.toBeUndefined();
    const spyMathPow = jest.spyOn(Math, 'pow')
    square(2);
    // Считает сколько раз вызывается функция
    expect(spyMathPow).toBeCalledTimes(1)
  })

  afterEach(() => {
      // Удаляет моки
      jest.clearAllMocks()
  })
  afterAll(() => {

  })
})