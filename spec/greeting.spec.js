const greeting = require('../src/greeting');

describe('The function greeting', () => {
    it('should greet all developers', () => {
        expect(greeting()).toEqual('Hello developers!');
    });
});



/* 
describe (string, () => {}): This is called a suite, a group of tests for a component of our application (could be a class or a bunch of functions). It looks like an anonymous function because it is actually an anonymous function. However, the string we pass as the first argument is a name or title for a spec suite - usually what is being tested.

it(string, () => {}): This is called a spec (from specifications) and it contains one or more expectations that test the state of the code. The first string is the title and describes in English the expected behavior. Each suite can hold several specs according to the outputs we are expecting.

expect(function.matcher(output): This is the actual expectation that will test the code. This is an assertion that could be true or false. These are built with the function expect, and it is chained with a Matcher function. This matcher function should receive the expected output according to its comparison.  */