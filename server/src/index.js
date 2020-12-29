const app = require('./app');

async function main() {
  await app.listen(app.get('port'));
  console.log('pamcos', app.get('port'));
}
main();
