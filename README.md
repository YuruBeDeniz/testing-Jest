# testing-Jest

To set up the app:
 mkdir unit-testing-example
 cd unit-testing-example
 touch .gitignore
 npm init -y && npm install -D jest
 add node_modules to .gitignore file
 mkdir src && spec
 
 update package.json
 
   "scripts": {
    "test": "jest"
  },

### see Jest expect methods (matchers)
https://jestjs.io/docs/expect


#### To run the tests
npm run test

If you don’t want to always write npm run test for every time you update the file, you can run instead:

npm run test --watchAll 

### TDD 

TDD stands for -Test Driven Development- is an approach to writing software where you write tests before you write application code. It is composed of three steps:

Write a test and watch it failing. This methodology is correctly applied when we make sure the test fails, and we have to be forced to fix it.
Write the simplest possible code to make the test pass.
Refactor and simplify the application code without breaking the test.

### Unit testing
Unit testing allows you to build up a set of small tests that verify fine-grained bits of your code, especially edge cases. This is especially useful in JavaScript, where your application needs to run the same way on different browser platforms.

The core idea of unit testing is to test a function’s behavior or output when giving it a certain set of inputs. You call a function with certain parameters and check you got the correct result.

This has a couple of huge advantages:

You always test your code in the same way. Goodbye self-doubt like: “Did I call it the same way? Is it different because the situation is different or did the behavior of my code change unexpectedly?”
With every new bit of code you are testing all of your previous code again. Automatically! What does this mean? The situations like “Hmm that used to work before, where did it break?” will be passed since with TDD you KNOW where and when it broke. You don’t have to go through the whole codebase again to find the needle.
Usually manual testing takes a lot of steps and therefore costs you the time.

see more
https://www.valentinog.com/blog/jest/ 
https://jasmine.github.io/api/3.5/global

