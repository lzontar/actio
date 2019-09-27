import { Router } from '@angular/router';

declare var require: any;
export class WebUtil<T> {
  client: any;
  countryCodes: any[];
  navigateFunc: any;

  constructor(router: Router) {
   // this.connectToMongoDB();
    this.getCountryCodes();
    this.navigateFunc = (path) => router.navigate(path);
  }

  getCountryCodes() {
    this.countryCodes = require('../../assets/CountryCodes.json');
  }

  navigate(path: string[]) {
    this.navigateFunc(path);
  }

  /*connectToMongoDB() {
    const MongoClient = require('mongodb').MongoClient;
    const uri = 'mongodb+srv://lukaz:<actiopassword>@actiocluster-oq6uv.azure.mongodb.net/test?retryWrites=true&w=majority';
    this.client = new MongoClient(uri, { useNewUrlParser: true });
    this.client.connect(err => {
      const collection = this.client.db('test').collection('devices');
      // perform actions on the collection object
      this.client.close();
    });
  }*/


}
