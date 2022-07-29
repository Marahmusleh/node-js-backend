const { article } = require("../models");
const db = require("../models");
const User = db.user;
const Article = db.article;

exports.userBoard = async (req,res , token) => {
  const id = req.params.id;
  var articles = [];
  Article.findOne({ where: { id } }).then((article) => {
    articles.push({
      id:article.id,
      userId:article.userId,
      img: article.img,
      title: article.title,
      text: article.text,
    });
  });
  User.findOne({ where: { id } }).then((user) => {
    res.status(200).send({
      id: user.id,
      username: user.username,
      email: user.email,
      articles:articles,
      token,
    });
  });
}

exports.createArticle = (req, res) => {

  User.findOne({ where: req.id  }).then((user) =>{
  console.log(user,"iddd")
  Article.create({
  userId:user.id,
  img:req.body.img,
  title:req.body.title,
  text:req.body.text
  
})
    .then(article => {
      res.send({       
        userId:article.userId,
        img: article.img,
        title: article.title,
        text: article.text,
        });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
  });
};


exports.getArticle = (req,res ) => {
  Article.findAll({ where:  req.id  }).then((article) => {
    res.status(200).send({
    article
    });
  });
}
  exports.updateArticle = (req,res) =>{
    const id= req.params.id;
    const {img,title,text} = req.body;
    Article.update({
      id:id,
      img:img,
      title:title,
      text:text
    },  { where: { id: id } })
    .then(result =>{
      res.status(200).send({ img:img,
        title:title,
        text:text,
        id:id
  })
})
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
}