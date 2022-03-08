import {validateValue} from "./validateValue";

describe('validateValue', () => {
  test('Корректное значение', () => {
    expect(validateValue(50)).toBe(true)
  })
  test('Меньше корректного', () => {
    expect(validateValue(-1)).toBe(false)
  })
  test('Больше корректного', () => {
    expect(validateValue(181)).toBe(false)
  })
  test('Минимальное значение', () => {
    expect(validateValue(0)).toBe(true)
  })
  test('Максимальное значение', () => {
    expect(validateValue(180)).toBe(true)
  })
})