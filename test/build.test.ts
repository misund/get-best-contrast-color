/* global describe, it */
import assert from 'assert'
import getBestContrastColor from '../build/index.js'

describe('Built output', () => {
  it('should export a working ESM module', () => {
    assert.strictEqual(typeof getBestContrastColor, 'function')
  })

  it('should calculate best contrast correctly from built output', () => {
    assert.strictEqual(getBestContrastColor('white', ['black', 'white']), 'black')
    assert.strictEqual(getBestContrastColor('black', ['black', 'white']), 'white')
  })
})
