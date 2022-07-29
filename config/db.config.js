module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "0000",
  DB: "testdb",
  dialect: "postgres",
  pool: { //pool is optional, it will be used for Sequelize connection pool configuration:
    max: 5,//maximum number of connection in pool
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};