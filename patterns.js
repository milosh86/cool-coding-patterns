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
