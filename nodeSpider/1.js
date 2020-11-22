const request = require("request")
const cheerio = require("cheerio")
const mysql = require('mysql')
var connection = mysql.createConnection({ //配置参数，然后添加你的数据库里面的表
  host: 'localhost',
  user: 'root',
  password: '225514',
  database: 'test'
})
connection.connect((err) => {
  if (err) {
    throw err
  }
  console.log('连接成功');
}); //连接
// function show(item) {
  request('https://movie.douban.com/explore#!type=movie&tag=%E7%83%AD%E9%97%A8&sort=recommend&page_limit=20&page_start=0', function (err, res) {
    if (err) {
      console.log('请求出错');
    } else {
      var $ = cheerio.load(res.body, {
        decodeEntities: false
      });
      var i = 0
      $('#wrapper #content .article .gaia .list-wp .list a').each(function (i, item) {
        console.log(i, item);
        var id = $('.cover-wp', this).attr('data-id')
        var img = $('.cover-wp img', this).attr('src');
        var name = $('.cover-wp img', this).attr('alt');
        // var describe = $('.bd p', this).eq(0).text().replace(/[ ]/g,"").replace(/[\r\n]/g,"");
        var score = $('p span.green strong', this).text()
        // var evaluatenums = $('.star span', this).eq(3).text()
        // i++
        // console.log(i);

        // let addSql = `insert into dbhotmovie(id,img,name,score) values (?,?,?,?)`;
        // let addParmas = [id, img, name, score]
        // connection.query(addSql, addParmas, function (err, data) {
        //   if (err) {
        //     console.log("数据库连接错误");
        //   } else {
        //     // item++;
        //     // show(item)
        //   }
        // })
      });
    }
  });
// }

// show(1)