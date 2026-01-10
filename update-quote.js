const fs = require('fs');

async function updateQuote() {
  try {
    const quotes = require('./quotes.json');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const { quote, author } = quotes[randomIndex];

    // Zdna &rtl=true bach t-qad l-ktaba l-arbiya mn l-yamin
    const cardDesign = `<p align="center">
    <img src="https://readme-daily-quotes.vercel.app/api?author=${encodeURIComponent(author)}&quote=${encodeURIComponent(quote)}&theme=dark&bg_color=0f4d36&author_color=d4af37&accent_color=d4af37&rtl=true">
</p>
`;

    const readmePath = './README.md';
    let readmeContent = fs.readFileSync(readmePath, 'utf-8');

    const updatedReadme = readmeContent.replace(
      /[\s\S]*/,
      cardDesign
    );

    fs.writeFileSync(readmePath, updatedReadme);
    console.log("Successfully updated with RTL support!");
  } catch (error) {
    console.error('Error updating quote:', error);
  }
}

updateQuote();
