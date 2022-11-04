function receivesAFunction(spy) {
    spy()
  }

function taylorsFunction() {
    console.log("I will go for a walk today")
}


function returnsANamedFunction() {
    return taylorsFunction
}

function returnsAnAnonymousFunction() {
    return function() {
    }
}