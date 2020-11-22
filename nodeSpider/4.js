const express = require('express')
const cheerio = require("cheerio")
const request = require("request")
const app = express()
const mysql = require('mysql')

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '225514',
  database: 'test',
})

db.connect((err) => {
  if (err) {
    throw err
  }
  console.log('连接成功');
})


app.listen(3000, () => {
  console.log('服务器开启在3000端口...');
})
