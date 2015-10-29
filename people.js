//Generate a random set of user data
//based on example from: https://egghead.io/lessons/nodejs-creating-demo-apis-with-json-server
//
module.exports = function(){
  var _ = require("lodash");
  var faker = require("faker");

  return {
    people: _.times(10, function (n) {
      // Constants for creating a uniform user
      var fn = faker.name.firstName();
      var ln = faker.name.lastName();
      var dn = faker.internet.domainName();
      var tld = faker.internet.domainSuffix();
      var phTyp = ["cell","work","home"];
      return{
        //Define the schema
        //TODO: other generators, validation,
        //specify ports
        //id: n,
        uuid: faker.random.uuid(),
        userName: fn + '.' + ln,
        firstName: fn,
        lastName: ln,
        email: fn + '.' + ln + '@' + dn,
        phone: _.times(_.random(0,3), function (i) {
          return {
          type: faker.random.arrayElement(phTyp),
          value: faker.helpers.replaceSymbolWithNumber('###-###-####'),
          }
        }),
        avatar: faker.internet.avatar()
      }
    })
  }
}
