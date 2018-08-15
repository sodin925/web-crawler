let request = require('request');
let fs = require('fs');
let cheerio = require('cheerio');
request({
  method: 'GET',
  //popular=true 為熱門文章  popular =false為最新文章
  url: 'https://www.dcard.tw/_api/forums/sex/posts?popular=true',
  // url:'https://www.dcard.tw/f/sex',

}, function(error, response, body) {
  if(error || !body) { return error };
  let $ = cheerio.load(body);
  let result = [];
  let titles = $('h3.PostEntry_title_H5o4d');
  for(let i=0;i<titles.length;i++) {
    result.push($(titles[i]).text());
  }
  fs.writeFileSync('result.json', JSON.stringify(result))
});