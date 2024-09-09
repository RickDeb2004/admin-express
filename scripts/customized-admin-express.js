const fs = require('fs');
const path = require('path');

// Path to the target express-admin.css file in the express-admin package
const adminCssPath = path.join(__dirname, '../node_modules/express-admin/public/express-admin.css');

// Path to your custom admin.css file
const customAdminCssPath = path.join(__dirname, '../custom/admin.css')
console.log('Custom CSS Path:', customAdminCssPath);
console.log('Target CSS Path:', adminCssPath);

// Check if the target file exists before attempting to overwrite it
if (fs.existsSync(adminCssPath)) {
    fs.copyFile(customAdminCssPath, adminCssPath, (err) => {
        if (err) {
            console.error('Error copying custom admin.css:', err);
        } else {
            console.log('Successfully applied custom admin.css to express-admin package');
        }
    });
} else {
    console.error('The express-admin.css file does not exist at the expected path:', adminCssPath);
}
