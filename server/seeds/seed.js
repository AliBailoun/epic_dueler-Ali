const db = require('../config/connection');
// const { } = require('../models');

// const Data = require('./Data.json');

db.once('open', async () => {
  // await Tech.deleteMany({});

  // const technologies = await Tech.insertMany(techData);

  console.log('Technologies seeded!');
  process.exit(0);
});
