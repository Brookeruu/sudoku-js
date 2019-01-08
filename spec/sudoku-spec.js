import { Sudoku } from './../src/sudoku.js';

describe('Sudoku', function() {

  it('should make an array of 9 numbers', function() {
      var sudoku = new Sudoku(3,4,5,7,8,6,1,2,9);
      var sudokuArray = sudoku.makeArray();
      expect(sudoku.makeArray()).toEqual([3,4,5,7,8,6,1,2,9]);
      expect(sudokuArray.length).toEqual(9);
    });

});
