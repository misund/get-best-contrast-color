/* global describe, it */
import assert from 'assert';
import bestContrast from '..';

describe('Get best contrast color', () => {
  describe('Black on white', () => (
    it('should yield black over white on white', () => {
      assert.equal(bestContrast(
        'white',
        ['black', 'white'],
      ), 'black');
    })
  ));
  describe('Black on gray', () => (
    it('should yield black over white on gray', () => {
      assert.equal(bestContrast(
        'gray',
        ['black', 'white'],
      ), 'black');
    })
  ));
  describe('White on darkgray', () => (
    it('should yield white over pink on darkgray', () => {
      assert.equal(bestContrast(
        'darkgray',
        ['pink', 'white'],
      ), 'white');
    })
  ));
  describe('White on black', () => (
    it('should yield white over black on black', () => {
      assert.equal(bestContrast(
        'hsl(0, 0%, 0%)',
        ['black', 'white'],
      ), 'white');
    })
  ));
  describe('White on saddlebrown', () => (
    it('should yield white over black on saddlebrown', () => {
      assert.equal(bestContrast(
        'saddlebrown',
        ['black', 'white'],
      ), 'white');
    })
  ));
  describe('Black on palevioletred', () => (
    it('should yield black over white on palevioletred', () => {
      assert.equal(bestContrast(
        'palevioletred',
        ['black', 'white'],
      ), 'black');
    })
  ));
  describe('Darkslateblue on papayawhip', () => (
    it('should yield darkslateblue over green and yellow on papayawhip', () => {
      assert.equal(bestContrast(
        'papayawhip',
        ['#00ff00', 'darkslateblue', 'yellow'],
      ), 'darkslateblue');
    })
  ));
});
