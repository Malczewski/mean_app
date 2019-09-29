var fs = require('fs'),
configPath = './config.json';
try {
  var parsed = JSON.parse(fs.readFileSync(configPath, 'UTF-8'));
} catch (e) {
  console.log('Check if "config.json" with database url exists');
  throw e;
}
module.exports = parsed;