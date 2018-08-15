node-react-blog

Declare your own database url, login, password in
'/backend/controllers/postControllers.'

const databaseLogin = 'your login';
const databasePassword = 'your password';
mongoose.connect('mongodb://'+databaseLogin+':'+databasePassword+'@ds113442.mlab.com:13442/node-blog')


Need to use npm install in ./frontend/blog and ./backend