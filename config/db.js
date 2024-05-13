import mysql from 'mysql';

export const connectDB = async () => {
    try {
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1709',
            database: 'food-delivery'
        });

        connection.connect((err) => {
            if (err) {
                console.error('Error connecting to MySQL database:', err);
                return;
            }
            console.log('Connected to MySQL database');
        });

        // Don't forget to close the connection when you're done
        // connection.end();
    } catch (error) {
        console.error('Error connecting to MySQL database:', error);
    }
};
