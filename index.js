const consonant = /[bcdfghjklmnpqrstvwxz]/gi;
const consonantOConsontant = /([bcdfghjklmnpqrstvwxz])o\1/gi;

module.exports = {
  encode: str => str.toString().replace(consonant, char => `${char}o${char.toLowerCase()}`),
  decode: str => str.toString().replace(consonantOConsontant, char => char.substr(0, 1)),
};
