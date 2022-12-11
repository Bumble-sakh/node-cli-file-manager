import { app } from './app.js';

const args = process.argv.splice(2);

if (args.length > 0 && args[0].startsWith('--username') && args[0].includes('=')) {
  const [_, userName] = args[0].split('=');

  app(userName);
} else {
  console.log("For start program type: 'npm run start -- --username=your_username'");
}
