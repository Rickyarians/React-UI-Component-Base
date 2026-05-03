
import { describe, expect, it, test } from 'vitest'
import { sum } from './sum.js'
import { maskAccountNumber } from './maskAccountNumber.js'

describe('maskNumber', () => {
  describe('positive case', () => {
     it('masking account number dengan benar', () => {
      expect(maskAccountNumber('1111222233334444')).toBe('11XX-XXXX-XXXX-XX44')
     })
  })


  describe('negatif case', () => {
    it('tidak masukkan value, harusnya tidak usah di proses atau return string kosong', () => {
     expect(maskAccountNumber('')).toBe('')
    })
 })



})
