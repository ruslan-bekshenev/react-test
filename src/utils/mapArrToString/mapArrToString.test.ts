import {mapArrToString} from "./mapArrToString";

// toEqual используется для сравнения содержимого, делает глубокое сравнение
describe('validateValue', () => {
  test('Корректное значение', () => {
    expect(mapArrToString([1, 2, 3])).toEqual(['1', '2', '3'])
  })
  test('Мешанина', () => {
    expect(mapArrToString([1, 2, 3, null, undefined, 'asdas'])).toEqual(['1', '2', '3'])
  })
  test('Пустой массив', () => {
    expect(mapArrToString([])).toEqual([])
  })
  test('Отрицание', () => {
    expect(mapArrToString([1,2,3])).not.toEqual([1,2,3,4])
  })
})