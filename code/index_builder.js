/*
var data = documenterSearchIndex.docs;
for (var i=0; i<data.length; i++) {
    data[i].id = i + 1;

}

console.log(JSON.stringify(data));
*/

var elasticlunr = require('./../js/elasticlunr.js'),
    fs = require('fs');

var idx = elasticlunr(function () {
	      this.setRef('id');
          this.addField('title');
          this.addField('text');
          this.addField('location');
          this.addField('category');
          this.addField('page');
          
});

fs.readFile('si1.json', function (err, data) {
  if (err) throw err;

  var raw = JSON.parse(data);

  var questions = raw.map(function (q) {
    return {
      id: q.id,
      title: q.title,
      text: q.text,
      location: q.location,
      category: q.category,
      page: q.page
    };
  });

  questions.forEach(function (question) {
    idx.addDoc(question);
  });

  fs.writeFile('si3.json', JSON.stringify(idx), function (err) {
    if (err) throw err;
    console.log('done');
  });
});
