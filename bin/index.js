#!/usr/bin/env node
const fetch = require("node-fetch");
const chalk = require('chalk');

fetch("https://beervanaza.azurewebsites.net/api/GetCurrentTapDataCLI")
  .then((res) => res.json())
  .then((beers) => {
    for (let i = 0; i < beers.length; i++) {
      console.log(`${chalk.yellowBright('Pivo číslo')} : ${i},
${chalk.yellowBright('Meno')} : ${beers[i].beerName},
${chalk.yellowBright('Zostáva')} : ${beers[i].remaining},
${chalk.yellowBright('Štýl')} : ${beers[i].beerStyle},
${chalk.yellowBright('Link')} : ${beers[i].rateBeerLink},
${chalk.yellowBright('Popis')} : ${beers[i].description}
`);
    }
  });
