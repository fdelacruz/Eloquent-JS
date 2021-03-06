// HINTS...

// Again, we are riding along on a JavaScript mechanism to get the equivalent feature in Egg. Special forms are passed the local environment in which they are evaluated, so that they can evaluate their sub-forms in that environment. The function returned by fun closes over the env argument given to its enclosing function, and uses that to create the function’s local environment when it is called.

// This means that the prototype of the local environment will be the environment in which the function was created, which makes it possible to access variables in that environment from the function. This is all there is to implementing closure (though to compile it in a way that is actually efficient, you’d need to do some more work).

// code below here: