const test = require('tape');
const rovarspraket = require('../index');

const strings = [
  {
    decoded: '"Nåja", sa herr Blomkvist',
    encoded: '"Nonåjoja", sosa hoherorror Boblolomomkokvovisostot',
  },
  {
    decoded: 'Brott lönar sej inte!',
    encoded: 'Bobrorotottot lolönonaror sosejoj inontote!',
  },
  {
    decoded: 'Mästerdetektiven Blomkvist',
    encoded: 'Momäsostoterordodetotekoktotivovenon Boblolomomkokvovisostot',
  },
  {
    decoded: 'Oj',
    encoded: 'Ojoj',
  },
  {
    decoded: 'Hah',
    encoded: 'Hohahoh',
  },
];

test('Encode', assert => {
  strings.forEach(obj => {
    const actual = rovarspraket.encode(obj.decoded);
    const expected = obj.encoded;

    assert.equal(actual, expected);
  });

  assert.end();
});

test('Decode', assert => {
  strings.forEach(obj => {
    const actual = rovarspraket.decode(obj.encoded);
    const expected = obj.decoded;

    assert.equal(actual, expected);
  });

  assert.end();
});
