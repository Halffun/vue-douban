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
  request('https://movie.douban.com/top250', function (err, res) {
    if (err) {
      console.log('请求出错');
    } else {
      var $ = cheerio.load(res.body, {
        decodeEntities: false
      });
      $('li .item').each(function () {
        var id = $('.pic em', this).text()
        var img = $('.pic img', this).attr('src');
        var name = $('.hd .title', this).text().replace(/([/][^/]+)$/, "");
        // var describe = $('.bd p', this).eq(0).text().replace(/[ ]/g,"").replace(/[\r\n]/g,"");
        var score = $('.rating_num', this).text()
        var evaluatenums = $('.star span', this).eq(3).text()
        // console.log(name);

        let addSql = `insert into dbtop250(id,img,name,score,evaluatenums) values (?,?,?,?,?)`;
        let addParmas = [id, img, name, score, evaluatenums]
        connection.query(addSql, addParmas, function (err, data) {
          if (err) {
            console.log("数据库连接错误");
          } else {
            // item++;
            // show(item)
          }
        })
      });
    }
  });
// }

// show(1)