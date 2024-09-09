// var express = require('express');
// var mysql = require('mysql');
// var session = require('express-session');
// var bodyParser = require('body-parser');
// var path = require('path');
// var admin = require('express-admin');

// var app = express();

// Session setup
// app.use(session({
//   name: 'express-admin',
//   secret: 'very secret',
//   saveUninitialized: true,
//   resave: true
// }));

// // Body parser middleware
// app.use(bodyParser.urlencoded({ extended: false }));

// // Serve static files (CSS, JavaScript, etc.)
// app.use(express.static(path.join(__dirname, 'public')));

// // MySQL connection
// var db = mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'root',
//     password: 'Debanjan@2122',
//     database: 'admin_panel'
// });

// db.connect((err) => {
//     if (err) throw err;
//     console.log('Connected to MySQL database');
// });

// // Login page route
// app.get('/login', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views/login.html'));
// });

// // Handle login form submission
// app.post('/admin/login', (req, res) => {
//     const { username, password } = req.body;

//     // Replace with your own authentication logic
//     if (username === 'admin' && password === '1234abCD') {
//         req.session.isAuthenticated = true;
//         res.redirect('/custom');
//     } else {
//         res.redirect('/login'); // Redirect back to login on failure
//     }
// });

// // Logout route
// app.get('/logout', (req, res) => {
//     req.session.destroy();
//     res.redirect('/login');
// });

// // Middleware to protect admin routes
// app.use('/', (req, res, next) => {
//     if (req.session.isAuthenticated) {
//         next();
//     } else {
//         res.redirect('/login');
//     }
// });

// // Serve custom admin layout
// app.get('/custom', (req, res) => {
//     res.sendFile(path.join(__dirname, 'views/adminLayout.html'));
// });

// // Route to get users from the database and display as a table
// app.get('/users', (req, res) => {
//     let query = 'SELECT * FROM users';
    
//     db.query(query, (err, results) => {
//         if (err) throw err;
        
//         let tableRows = results.map(user => `
//             <tr>
//                 <td>${user.user_id}</td>
//                 <td>${user.name}</td>
//                 <td>${user.email}</td>
//                 <td>${user.phone}</td>
//                 <td>${user.dob}</td>
//             </tr>
//         `).join('');
        
//         const htmlContent = `
//             <table border="1" cellpadding="5" cellspacing="0" style="width: 100%; border-collapse: collapse;">
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Phone</th>
//                         <th>DOB</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     ${tableRows}
//                 </tbody>
//             </table>
//         `;
        
//         res.send(htmlContent);
//     });
// });

// Configure and use express-admin
// admin({
//     config: require(path.join(__dirname, 'config/mysql/config.json')),
//     settings: require(path.join(__dirname, 'config/mysql/settings.json')),
//     users: require(path.join(__dirname, 'config/users.json')),
//     custom: require(path.join(__dirname, 'config/custom.json'))
// }, (err, adminApp) => {
//     if (err) throw err;
//     app.use('/admin', adminApp);
// });

// // Start the server
// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// });
var express = require('express')
var admin = require('express-admin')
require("dotenv").config();
express()
  .use(admin({
    config: require(`./config/mysql/config.json`),
    settings: require(`./config/mysql/settings.json`),
    users: require(`./config/users.json`),
    custom: require(`./config/custom.json`),
  }))
  .listen(3001, () => {
    console.log('Server is running on port 3001');
  });