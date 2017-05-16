// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

const stringifyJSON = function(obj) {
  const json = [];

  if (obj === null) {
    return 'null';
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (typeof obj === 'boolean') {
    return '' + obj;
  } else if (typeof obj === 'number') {
    return obj.toString();
  } else if (_.isArray(obj)) {
    _.each(obj, (value) => {
      json.push(stringifyJSON(value));
    });
    return '[' + json  + ']';
  } else if (typeof obj === 'object') {
    _.each(obj, (value, key) => {
      if (obj[key] === undefined || typeof obj[key] === 'function') {      
        return;
      } else {
        json.push(stringifyJSON(key) + ':' + stringifyJSON(value));
      };
    });
    return '{' + json + '}';
    }; 
};
