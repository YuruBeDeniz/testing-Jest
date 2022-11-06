function greeting(){
    return 'Hello developers!';
};



// The following is required for automated testing:
if (typeof module !== 'undefined') {
    module.exports = greeting;
  }


/* We are writing these past lines because jest doesn’t run
on the browser, only on a NodeJs environment */
  