const sum = require("../src/calc");

describe('The function sum() used in the calculator', () => {
    it('should be a function', () => {
        expect(typeof sum).toBe('function');
    });

    it('should return 0 for any empty array', () => {
        expect(sum([])).toBe(0);
    });

    it('should throw an error if no parameter is provided', () => {
        expect(() => {
            sum();
        }).toThrow(new Error('No parameter provided'));
    });

    it('should return a number', () => {
        expect(typeof sum([1,1])).toBe('number');
    });

    it('should return the correct value', () => {
    // if array with one element is passed, sum should be equal to  that element
    expect(sum([1])).toBe(1);
    expect(sum([1, 2])).toEqual(3);
    expect(sum([4, 5, 6])).toBe(15);
    expect(sum([0, -2])).toBe(-2);
    expect(sum([1, 2, 3, 4, 5])).toBe(15);    
    });
});



/* One thing we can start with is to make sure that
the function gives a correct result if there are
no numbers passed to function (by default,
the calculator should return zero before
the user inputs any numbers to do a calculation on them) */


/* After we write "it should return a number", we should proceed to write
the algorithm to calculate the sum. The sum should always
reflect the correct addition of all the elements passed 
to the sum() function. Let’s wrap this up into a test and 
then let’s proceed to write the algorithm: */
