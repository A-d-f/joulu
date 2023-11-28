import { CardsOfDayType, SingleCard } from '../types/card';

const daysLeft = (day: string) => 24 - Number.parseInt(day) || 0;
const calendarIntro = (day: string): SingleCard => [
  { text: `${day}.`, size: 'big' },
  { text: 'luukku' },
];
const daysToChristmas = (day: string): SingleCard => [
  { text: `${daysLeft(day)}`, size: 'big' },
  { text: 'päivää jouluun!' },
];

export const allJokes: CardsOfDayType = {
  1: [
    [{ text: 'Miksi salaatti meni lääkäriin?' }],
    [{ text: 'Koska kurkku oli kipeä.' }],
  ],
  2: [[{ text: 'Mitä pylly tekee puukäsityöntunnilla?' }], [{ text: 'Hyllyy' }]],
  3: [
    [{ text: 'Miksi kuka tahansa ei voi olla joulupukki?' }],
    [{ text: 'Kaikilla ei ole tarpeeksi lahjoja.' }],
  ],
  4: [
    [{ text: 'Jos laitat vapahtajan arkkuun, mitä sinulla on?' }],
    [{ text: 'Jeesus kirstus.' }],
  ],
  5: [
    [{ text: 'Mitä yhteistä on insinöörillä ja salamalla?' }],
    [{ text: 'Ensin välähtää ja sitten korjataan tuhot.' }],
  ],
  6: [
    [{ text: 'Mikä on hiekan ja noidan sekoitus?' }],
    [{ text: 'Sandwich.' }],
  ],
  7: [
    [
      {
        text: 'Miksi joulupukki meni psykiatrille?',
      },
    ],
    [{ text: 'Hän ei enää uskonut itseensä.' }],
  ],
  8: [
    [{ text: 'Minkä niminen on nainen, joka menee marjastamaan eikä löydä marjoja?' }],
    [{ text: 'Marjatta.' }],
  ],
  9: [
    [{ text: 'Miksi hampaita ei kannata pestä vasemmalla kädellä?' }],
    [{ text: 'Hammasharja on tehokkaampi.' }],
  ],
  10: [
    [{ text: 'Mitä eroa on pianistilla ja huilistilla?' }],
    [{ text: 'Huilistilla on pilli kuonon alla ja pianistilla toisin päin.' }],
  ],
  11: [
    [{ text: 'Miksi kannattaa hankkia liian pienet turvakengät?' }],
    [{ text: 'Voi olla aina pienissä sievissä.' }],
  ],
  12: [
    [{ text: 'Mitä vangilla oli mukana karatessa?' }],
    [{ text: 'Musta vyö.' }],
  ],
  13: [
    [
      {
        text: 'Kolme kiinalaista kaverusta nimeltään Bu, Chu ja Fu muutti Amerikkaan. Perille päästyään he päättivät muuttaa nimensä amerikkalaisiksi.',
      },
    ],
    [{ text: 'Bu muutti nimekseen Buck, ja Chu muutti nimekseen Chuck. Fu päätti lähteä takaisin Kiinaan.' }],
  ],
  14: [
    [{ text: 'Disney World etsii jälleen kesätyöntekijöitä.' }],
    [{ text: 'Pian on taas kiitettävä määrä kesähessuja.' }],
  ],
  15: [
    [{ text: 'Mitä kalastuksesta haaveileva tekee koulussa?' }],
    [{ text: 'Pilkkii oppitunnilla.' }],
  ],
  16: [
    [{ text: 'Cashewpähkinä kysyi maapähkinältä: "miksi teit noin?"' }],
    [{ text: 'Koska maapähkinävoi.' }],
  ],
  17: [
    [{ text: 'Mitä kainuulainen sanoi soittaessaan hätäkeskukseen?' }],
    [{ text: 'Nyt on susiset paikat.' }],
  ],
  18: [
    [{ text: 'Al Capone ryhtyi laihdutuskuurille.' }],
    [{ text: 'Muutaman kuukauden jälkeen hän oli Al Caposempi' }],
  ],
  19: [[{ text: 'Mikä on kirjolohen äidin nimi?' }], [{ text: 'Pirjo Lohi' }]],
  20: [
    [{ text: 'Minkä takia ohjelmoijan juopottelu pysyi hyvin kurissa?' }],
    [{ text: 'Hän keksi itselleen todella toimivan alkorytmin.' }],
  ],
  21: [
    [{ text: 'Mistä rallikuskien ruoat tulevat?' }],
    [{ text: 'Erikoiskokeilta.' }],
  ],
  22: [
    [{ text: 'Mikä on äärioikeistolaisten humalatila?' }],
    [{ text: 'PeruSkänni.' }],
  ],
  23: [
    [
      {
        text: 'Naisystäväni pyysi minua hemmottelemaan häntä.',
      },
    ],
    [{ text: 'Nyt hän on aivan raivoissaan, kun olen pari viikkoa kutsunut häntä Hemmoksi.' }],
  ],
  24: [
    [{ text: 'Kemisti jäädytti itsensä -273,15°C asteeseen' }],
    [
      {
        text: 'Kaikki sanoivat, että hän oli hullu, mutta hän oli 0K.',
      },
    ],
  ],
};

export const getDays = (): string[] => Object.keys(allJokes ?? {});
export const createJoke = (day: string): SingleCard[] => [
  calendarIntro(day),
  ...allJokes[day],
  daysToChristmas(day),
];
