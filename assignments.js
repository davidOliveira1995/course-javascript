const country = 'Brazil';
const continent = 'South America';
let population = '212';

console.log(country);
console.log(continent);
console.log(population);

const isIsland = false;
const language = 'Portuguese';

console.log(isIsland);
console.log(language);

function populationSplitInHalf() {
    const populationSplitInHalf = population / 2;
    console.log(populationSplitInHalf);
};

function populationMoreOne() {
    const populationMoreOne = ++population;
    console.log(populationMoreOne);
};

function morePeopleThatFinland() {
    let finlandPopulation = 6;
    if(population > finlandPopulation) {
        console.log('My country has more people that Finland!')
    } else {
        console.log('Finland people is biggester that my country!');
    }

    console.log('Finland population: ', finlandPopulation);
    console.log('Population of my country: ', population);
};

function descriptionCountry() {
    console.log(country, ' is in ', continent, ', and its ', population, ' people speak ', language);
};

populationSplitInHalf();
populationMoreOne();
morePeopleThatFinland();
descriptionCountry();
