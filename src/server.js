const {PORT = 3000} = process.env;
const app = require("./serverApp");

app.listen(PORT, () => console.log(`Listening on Port ${PORT}!`))