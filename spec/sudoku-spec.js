import { Sudoku } from './../src/sudoku.js';

describe('Sudoku', function() {

  it('should make an array of 9 numbers', function() {
      var sudoku = new Sudoku(3,4,5,7,8,6,1,2,9);
      var sudokuArray = sudoku.makeRowArray();
      expect(sudoku.makeRowArray()).toEqual([3,4,5,7,8,6,1,2,9]);
      expect(sudokuArray.length).toEqual(9);
    });

    it('should check that numbers in the array are 1-9', function() {
        var sudoku = new Sudoku(3,4,5,7,8,6,1,2,9);
        var sudokuArray = sudoku.makeRowArray();
        expect(sudokuArray.sort()).toEqual([1,2,3,4,5,6,7,8,9]);
    });

    it('should get first row', function() {
        var sudoku = new Sudoku(3,4,5,7,8,6,1,2,9);
        var sudokuArray = (sudoku.getRow(1));
        console.log(sudokuArray);
        expect(sudokuArray.sort()).toEqual([1,2,3,4,5,6,7,8,9]);
    });

});
