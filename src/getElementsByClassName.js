// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var object = [];
  
  var test = function(node) {
    if (node.classList) {
      if (node.classList.contains(className)) {
        object.push(node);
      }
    }
    (node.childNodes).forEach(function(child) {
      test(child);
    });
  };
  test(document);
  return object;
};
