'use strict';

module.exports = {
  //function to run when (trying) to create the table (or make needed changes to it)
  up: function (queryInterface, Sequelize) {
    //define all columns in Users, including id, createdAt, and updatedAt as well as foreign keys (none in this table)
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      username: {
        type: Sequelize.STRING,
        unique: true
      },
      email: {
        type: Sequelize.STRING,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      class: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      rollNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  //function to run when reverting the changes to the table
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Users');
  }
};


// id: {
//   allowNull: false,
//   primaryKey: true,
//   type: Sequelize.UUID,
//   defaultValue: Sequelize.UUIDV
//   email,password,name,class,rollNumber
