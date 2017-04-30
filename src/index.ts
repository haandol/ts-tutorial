import * as mongoose from 'mongoose';

import { Pirate, PirateModel } from './domain/pirate';
import { DB } from './domain/db';


let uri = 'mongodb://localhost/onepiece';
const connection: mongoose.MongooseThenable = mongoose.connect(uri);

const db = new DB();

let luffy = <Pirate>{name: 'luffy', bounty: 0.3, isEsper: true};

connection.then(() => {
  return db.create(luffy)
})
.then((raw: Pirate) => { 
  db.read({name: raw.name}).then((pirates) => { 
    console.log('Created');
    console.log(pirates);
  });
})
.then(() => {
  luffy.bounty = 5;
  return db.update(luffy);
})
.then(() => {
  db.read({name: 'luffy'}).then((pirates) => { 
    console.log('Updated');
    console.log(pirates);
  });
})
.then(() => {
  return db.delete(luffy);
})
.then(() => {
  db.read({name: 'luffy'}).then((pirates) => { 
    console.log('Deleted');
    console.log(pirates);
  });
})
.then(() => {
  mongoose.connection.close();
});
