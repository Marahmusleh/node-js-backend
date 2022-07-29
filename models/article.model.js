module.exports = (sequelize, Sequelize) => {
    const Article = sequelize.define("articles", {
      img: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      text: {
        type: Sequelize.STRING
      },
  
    });
    return Article;
  };
  