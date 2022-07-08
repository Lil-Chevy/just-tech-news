const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our user model
class User extends Model {}

// define a table columns and configuration
User.init(
  {
    // table columns go here
    // define and id column
    id: {
      // use the special SEQUELIZE DataTypes object provide what types of data it is
      type: DataTypes.INTEGER,
      //   this is the wquivalent of the sqls 'not null' options
      allowNull: false,
      // instruct that this is the Primary Key
      primaryKey: true,
      // turn on autoIncrement
      autoIncrement: true,
    },
    // define a username colum
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // define an email column
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      //   there cannot be any duplicate email values in this table
      unique: true,
      // if allow null is set to false, we can run our data through validators before creating
      // the table data
      validate: {
        isEmail: true,
      },
    },
    // define a password column
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        //   this means the password must be at least four characters long
        len: [4],
      },
    },
  },
  {
    // TABLE CONFIGURATION DEFINITIONS  got here ((https://sequelize.org/v5/manual/models-definition.html#configuration))
    // pass in our imported sequelize connection (direct connection to our databases)
    sequelize,
    // dont automatically create createdAt/ updateAt time stamp fields
    timestamps: false,
    // dont pluralize name of database table
    freezeTableName: true,
    // use underscores instead of camel-casing (ie 'comment_text)
    underscored: true,
    // make it so our model name stays lowercase in the database
    modelName: "user",
  }
);

module.exports = User;
