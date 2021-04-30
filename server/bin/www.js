const app = require('../server');
const PORT = process.env.PORT || 4000;
const database = require('../app/config/database');

app.listen(PORT, () => {
    database.connect();
    console.log(`Server is running at PORT ${PORT}`);
});