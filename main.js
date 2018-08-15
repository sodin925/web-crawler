let request = require('request');
let fs = require('fs');
let cheerio = require('cheerio');

// let x = fs.readFileSync('./posts.json', 'utf8');
// let y = JSON.parse(x);
// let idList = [];
// y.forEach(element => {
//   idList.push(element.id);
// });
// console.log(idList);


request({
  method: 'GET',
  //popular=true 為熱門文章  popular =false為最新文章
  url: 'https://www.dcard.tw/_api/forums/sex/posts?popular=true',
  // url:'https://www.dcard.tw/f/sex',

}, function (error, response, body) {
  if(error || !body) { return '404'};
  let y = JSON.parse(body);
  // console.log(y);

  let result = [];
  for (i = 0; i < y.length; i++) {
    result.push(`https://www.dcard.tw/f/sex/p/${y[i].id}-${y[i].title}`);//固定網址+id-title
  }
  console.log(result[5]);

  // result.forEach
  // fs.writeFileSync('result.json', JSON.stringify(result));
});