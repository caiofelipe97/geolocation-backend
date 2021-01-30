module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: '12345',
  database: 'maps',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}