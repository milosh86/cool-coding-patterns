// async recursion
(function asyncRec(){
  doStuff();
  
  setTimeout(asyncRec, 100);
})();

(function asyncRec(){
  doStuff();
  
  $('#update').load('ajax/myservice', function (data) {
    asyncRec();
  });
})();
