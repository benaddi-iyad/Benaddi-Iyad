const fs = require('fs');

async function updateQuote() {
  try {
    const quotes = require('./quotes.json');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const { quote, author } = quotes[randomIndex];

    const cardDesign = `
<p align="center">
    <img src="https://readme-daily-quotes.vercel.app/api?author=${encodeURIComponent(author)}&quote=${encodeURIComponent(quote)}&theme=dark&bg_color=0f4d36&author_color=d4af37&accent_color=d4af37">
</p>
`;

    const readmePath = './README.md';
    let readmeContent = fs.readFileSync(readmePath, 'utf-8');

    readmeContent = readmeContent.replace(
      /(.|\n)*/,
      cardDesign
    );

    fs.writeFileSync(readmePath, readmeContent);
  } catch (error) {
    console.error('Error updating quote:', error);
  }
}

updateQuote();
