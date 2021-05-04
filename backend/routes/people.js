const express = require("express");
const router = express.Router();
const mysqlConnecrtion = require('../connection');

router.get('/', (req, res) => {
  mysqlConnecrtion.query("select * from todo", (err, rows, field) => {
  if(!err) {
      res.send(rows);
  } else {
      console.log(err);
  }
  })
}
)

router.post("/create", function(abc, res) {
  // console.log('this is abc::', abc)

    let query = `insert into todo(firstname, lastname, email, title) values("${abc.body.firstName}","${abc.body.lastName}","${abc.body.email}","${abc.body.title}")`
    mysqlConnecrtion.query(query, (err, rows, fields) => {
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }
    })
})

router.get("/todo/:id", function(req, res) {
  console.log('this is req::', req)
  let query = `select * from todo where id="${req.params.id}"`
  mysqlConnecrtion.query(query, (err, rows, fields) => {
    if (!err) {
      res.send(rows[0]);
    } else {
      console.log(err);
    }
  })
})

router.put("/todo", function(req, res) {
  console.log('this is req::', req)
  let query = `update todo set firstname='${req.body.firstName}',lastname='${req.body.lastName}',email='${req.body.email}',title='${req.body.title}' where id='${req.body.id}'`
  mysqlConnecrtion.query(query, (err, rows, field) => {
    if (!err) {
      res.send(rows)
    } else {
      console.log(err);
    }
  })
})

router.delete("/delete/:id", function(req, res) {
  console.log('this is req::', req)
  let query = `delete from todo where id="${req.params.id}"`
  mysqlConnecrtion.query(query, (err, rows, field) => {
    if(!err) {
      res.send(rows);
    } else {
      console.log(err);
    }
  }) 
})

module.exports = router;