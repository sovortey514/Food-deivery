import { DataTypes, Sequelize } from 'sequelize'; // Import Sequelize

const sequelize = new Sequelize('food-delivery', 'root', '1709', {
  host: 'localhost',
  dialect: 'mysql',
});

const user = sequelize.define('user', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Assuming email should be unique
    validate: {
      isEmail: true, // Validate if the email is in the correct format
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cartData: {
    type: DataTypes.JSON, // Assuming cartData is stored as JSON
    allowNull: true, // Allow null as the cart might not be populated initially
  },
});
// Sync the model with the database
const syncDatabase = async () => {
    try {
      await sequelize.authenticate(); // Check the database connection
      console.log('Connection has been established successfully.');
      await sequelize.sync({ force: true }); // This will create the table
      console.log('user table has been created.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  };
  
  syncDatabase();

export default user;
