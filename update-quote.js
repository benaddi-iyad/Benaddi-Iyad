const fs = require('fs');

async function updateQuote() {
  try {
    const quotes = require('./quotes.json');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const { quote, author } = quotes[randomIndex];

    // St3mlo Readme Typing SVG hit s-pport dyalo l l-Arbiya hsen b-bezzaf
    const cardDesign = `<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=25&pause=1000&color=d4af37&background=0f4d36&center=true&vCenter=true&width=840&height=150&lines=${encodeURIComponent(quote)};${encodeURIComponent(author)}">
</p>
`;

    const readmePath = './README.md';
    let readmeContent = fs.readFileSync(readmePath, 'utf-8');

    const updatedReadme = readmeContent.replace(
      /[\s\S]*/,
      cardDesign
    );

    fs.writeFileSync(readmePath, updatedReadme);
    console.log("Updated with Arabic-friendly Typing SVG!");
  } catch (error) {
    console.error('Error updating quote:', error);
  }
}

updateQuote();
