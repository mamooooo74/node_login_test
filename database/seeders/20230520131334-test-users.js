'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const now = new Date();
    return queryInterface.bulkInsert('Users', [
      { name: '太郎',  email: 'taro@example.com', password: bcrypt.hashSync('password',bcrypt.genSaltSync(8)), createdAt: now, updatedAt: now},
      { name: '次郎',  email: 'jiro@example.com', password: bcrypt.hashSync('password',bcrypt.genSaltSync(8)), createdAt: now, updatedAt: now},
      { name: '三郎',  email: 'saburo@example.com', password: bcrypt.hashSync('password',bcrypt.genSaltSync(8)), createdAt: now, updatedAt: now},
      { name: '四郎',  email: 'shiro@example.com', password: bcrypt.hashSync('password',bcrypt.genSaltSync(8)), createdAt: now, updatedAt: now},
      { name: '五郎',  email: 'goro@example.com', password: bcrypt.hashSync('password',bcrypt.genSaltSync(8)), createdAt: now, updatedAt: now},
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
