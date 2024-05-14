import { DataTypes, Sequelize } from 'sequelize'; // Import Sequelize

const sequelize = new Sequelize('food-delivery', 'root', '1709', {
  host: 'localhost',
  dialect: 'mysql',
});

const Food = sequelize.define('food', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Sync the model with the database
const syncDatabase = async () => {
  try {
    await sequelize.authenticate(); // Check the database connection
    console.log('Connection has been established successfully.');
    await sequelize.sync({ force: true }); // This will create the table
    console.log('Food table has been created.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

syncDatabase();

export default Food;
