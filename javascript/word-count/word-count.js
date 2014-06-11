module.exports = function (words) {
  
  var counts = {};
  
  words.split(' ').forEach(function (word) {
    if (counts[word]) {
      ++counts[word];
    } else {
      counts[word] = 1;
    }
  });
  
}