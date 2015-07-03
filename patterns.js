// async recursion
(function asyncRec(){
  doStuff();
  
  setTimeout(asyncRec, 100);
})();

// or

(function asyncRec(){
  doStuff();
  
  $('#update').load('ajax/myservice', function (data) {
    // kepp updating something
    asyncRec();
  });
})();

////////////////////////////////////////////////////////////////////
// shorter notation for accessing Object and Array prototype methods
var slice = Array.prototype.slice;
// or
var slice = [].slice;
slice.call(arguments, 1);

var hasOwn = Object.prototype.hasOwnProperty;
// or
var hasOwn = ({}).hasOwnProperty; 
// or
var hasOwn = ({}.hasOwnProperty); 
// can't use {}.method because the JavaScript grammar tells the engine 
// to parse any statement starting with { as a block statement. 
// with () it looks a little bit tricky, so maybe it's best to stick with Object.prototype.method...

//or
var hasOwn = Object.hasOwnProperty; // todo: check if this is standard?

hasOwn.call({test: 'some test string'}, 'test');

/////////////////////////////////////////////////////////////////////
// executing multiple async operations concurrently
function whenAllDone(asyncOps, cb) {
    var result = [],
        pending = asyncOps.length;
    
    if (pending === 0) {
        setTimeout(cb.bind(null, null, result), 0);
        return;
    }
    
    asyncOps.forEach((op, i) => {
        op({
            error: (err) => cb(err, null),
            success: (res) => {
              result[i] = res;
              pending--;
              if (pending === 0) {
                cb(null, result);
              }
            }
        });
    });
}

//////////////////////////////////////////////////////////////////////////
// loop 
function loop(n, f) {
  for (let i = 0; i < n; i++) {
  }
  }
}
