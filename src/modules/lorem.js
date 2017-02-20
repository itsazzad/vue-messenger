import {getRandomIntInclusive} from './random'

var faker = require('faker');
var uuid = require('node-uuid');

const loremTypes = [
  'word',
  'words',
  'sentence',
  'sentences',
  'paragraph',
  'paragraphs',
  'text',
  'lines'
];

export function user() {
  let loremType = loremTypes[getRandomIntInclusive(0, loremTypes.length - 1)];
  let name = faker.name.lastName() + ' ' + faker.name.firstName() + ' ' + faker.name.suffix();
  let about = faker.lorem[loremType]();
  return {
    "id": uuid.v4(),
    "name": name,
    "about": about,
    "picture": {
      "url": faker.image.avatar()
    }
  };
}

export function message() {
  let text = faker.lorem[loremTypes[getRandomIntInclusive(0, loremTypes.length - 1)]]();
  return {
    "created_time": faker.date.recent(7),
    "id": uuid.v4(),
    "message": text,
    "direction": faker.random.arrayElement(["to","from"]),
  };
}
