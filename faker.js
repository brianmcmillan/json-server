//Generate a random set of user data
//based on example from: https://egghead.io/lessons/nodejs-creating-demo-apis-with-json-server
//
module.exports = function(){
  var faker = require("faker");

  return {
    random: {
      number: faker.random.number(100), // faker.random.number(range)
      //number2: faker.random.number(5,10),
      amount: faker.finance.amount(9000,10000,4),
      arrayElement: faker.random.arrayElement(["one","two","three","four"]),
      // faker.random.arrayElement(["one","two","three"]) = "one"
      objectElement: faker.random.objectElement({one: 1, two: 2, three: 3}),
      //Usage is not clear
      //uuid: faker.random.uuid(),
      boolean: faker.random.boolean()
    },

    helpers: {
      randomize: faker.helpers.randomize(), //use faker.helpers.shuffle() instead
      slugify: faker.helpers.slugify(),
        // Removes all special characters from a string.
        // faker.helpers.slugify(URL)
        // faker.helpers.slugify("https://github.com/cocur/slugify")
        // faker.helpers.slugify("httpsgithub.comcocurslugify")
      replaceSymbolWithNumber: faker.helpers.replaceSymbolWithNumber("###"),
        // faker.helpers.replaceSymbolWithNumber(symbol)
        // faker.helpers.replaceSymbolWithNumber("###")
        // faker.helpers.replaceSymbolWithNumber("473")
      replaceSymbols: faker.helpers.replaceSymbols("###$%^ cat"),
        // faker.helpers.replaceSymbols(symbol)
        // faker.helpers.replaceSymbols("###-###")
        // faker.helpers.replaceSymbols("883-21")
      shuffle: faker.helpers.shuffle(["apple", "bat", "cat"]),
        // faker.helpers.shuffle(["apple", "bat", "cat"])
        // faker.helpers.shuffle(["bat", "apple", "cat"])
      //mustache: faker.helpers.mustache()
        // Not clear how to use this
      },

    date: {
      past: faker.date.past(10), // some time from now to N years ago faker.date.past((years, refDate))
      past2: faker.date.past(10,"2010-01-01"),
      future: faker.date.future(2), // some time from now to N years later faker.date.future(years, refDate)
      between: faker.date.between('2015-01-01', '2015-12-31'),  //faker.date.between(from, to)
      month: faker.date.month(), // faker.date.month(options) wide
      weekday: faker.date.weekday(), // faker.date.weekday(options)
      recent: faker.date.recent(1000) // some time from now to N days ago faker.date.recent(days)
    },

      lorem: {
      words: faker.lorem.words(), // faker.lorem.words()
      sentence: faker.lorem.sentence(), // faker.lorem.sentence(num [3])
      sentences: faker.lorem.sentences(3,3), // faker.lorem.sentences(wordCount [3], range [7])
      paragraph: faker.lorem.paragraph(), // faker.lorem.paragraph(sentenceCount [3])
      paragraphs: faker.lorem.paragraphs() // faker.lorem.paragraphs(paragraphCount [3], separator ["\n \r"])
    },

    hacker: {
    abbreviation: faker.hacker.abbreviation(),
    adjective: faker.hacker.adjective(),
    noun: faker.hacker.noun(),
    verb: faker.hacker.verb(),
    ingverb: faker.hacker.ingverb(),
    phrase: faker.hacker.phrase()
    },

    name: {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      findName: faker.name.findName(),
      jobTitle: faker.name.jobTitle(),
      prefix: faker.name.prefix(),
      suffix: faker.name.suffix(),
      title: faker.name.title(),
      jobDescriptor: faker.name.jobDescriptor(),
      jobArea: faker.name.jobArea(),
      jobType: faker.name.jobType()
    },

    company: {
      companyName: faker.company.companyName(),
      //companyName2: faker.company.companyName('{{name.lastName}}, {{name.lastName}} and {{name.lastName}}'),
      //companyName3: faker.company.companyName(0),
      companySuffix: faker.company.companySuffix(),
      catchPhrase: faker.company.catchPhrase(),
      bs: faker.company.bs(),
      catchPhraseAdjective: faker.company.catchPhraseAdjective(),
      catchPhraseDescriptor: faker.company.catchPhraseDescriptor(),
      catchPhraseNoun: faker.company.catchPhraseNoun(),
      bsAdjective: faker.company.bsAdjective(),
      bsBuzz: faker.company.bsBuzz(),
      bsNoun: faker.company.bsNoun()
    },

    address: {
      address_zipCode: faker.address.zipCode(),
        // if zip format is not specified, use the zip format defined for the locale
        // faker.address.zipCode("#####")
      address_city1: faker.address.city(0),
      address_city: faker.address.city(3), //faker.address.city(format)
        // 0 = '{{address.cityPrefix}} {{name.firstName}} {{address.citySuffix}}',
        // 1 = '{{address.cityPrefix}} {{name.firstName}}',
        // 2 = '{{name.firstName}} {{address.citySuffix}}',
        // 3 = '{{name.lastName}} {{address.citySuffix}}'
      address_cityPrefix: faker.address.cityPrefix(),
      address_citySuffix: faker.address.citySuffix(),
      address_streetName: faker.address.streetName(),
      address_streetAddress: faker.address.streetAddress(),
        //faker.address.streetAddress("###")
      address_streetSuffix: faker.address.streetSuffix(),
      address_streetPrefix: faker.address.streetPrefix(),
      address_secondaryAddress: faker.address.secondaryAddress(),
      address_county: faker.address.county(),
      address_country: faker.address.country(),
      address_countryCode: faker.address.countryCode(),
      address_state: faker.address.state(),
      address_stateAbbr: faker.address.stateAbbr(),
      address_latitude: faker.address.latitude(),
      address_longitude: faker.address.longitude()
      },

    commerce: {
      color: faker.commerce.color(),
      department: faker.commerce.department(),
      productName: faker.commerce.productName(),
      price: faker.commerce.price(.10,5.00,2,"$"),
      productAdjective: faker.commerce.productAdjective(),
      productMaterial: faker.commerce.productMaterial(),
      product: faker.commerce.product()
    },

    finance: {
      account: faker.finance.account(),
      accountName: faker.finance.accountName(),
      mask: faker.finance.mask(),
      mask2: faker.finance.mask(4,false,true),
      mask3: faker.finance.mask(4,true,true),
      mask4: faker.finance.mask(7,true,false),
      amount: faker.finance.amount(9000,10000,4),
      // faker.finance.amount(min, max, dec, symbol)
      // amount: faker.finance.amount(9000,10000,4) = "9127.3846"
      transactionType: faker.finance.transactionType(),
      currencyCode: faker.finance.currencyCode(),
      currencyName: faker.finance.currencyName(),
      currencySymbol: faker.finance.currencySymbol()
    },

    internet: {
      //avatar: faker.internet.avatar(), //refer to image for usage
      email: faker.internet.email(),
      // faker.internet.email(firstName, lastName, provider)
      // faker.internet.email("joe","smith","gmail.com") = "joe.smith@gmail.com"
      userName: faker.internet.userName(),
      // faker.internet.userName(firstName, lastName)
      // user name is choosen from a random pattern
      // firstName##, firstName[.,_]lastName, firstName[.,_]lastName##
      // with no spaces or "'" characters
      protocol: faker.internet.protocol(), //http, https
      url: faker.internet.url(),
      domainName: faker.internet.domainName(),
      domainSuffix: faker.internet.domainSuffix(),
      domainWord: faker.internet.domainWord(),
      ip: faker.internet.ip(),
      userAgent: faker.internet.userAgent(),
      color: faker.internet.color(),
      mac: faker.internet.mac(),
      password: faker.internet.password(8),
      // faker.internet.password(len, memorable)
      // faker.internet.password(8,1) = "susejofe"
      // faker.internet.password(8) = "AM7zl6Mg"
      uuid: faker.random.uuid()
    },

    phone: {
      phoneNumber: faker.phone.phoneNumber(),
      // Appears to pick a randon number and format "169-506-0340 x1627"
      phoneNumberFormat: faker.phone.phoneNumberFormat(3),
      // 0 = "587-753-7028"
      // 1 = "(116) 239-1938"
      // 2 = "1-878-758-7353"
      // 3 = "343.578.4788"
      phoneNumberFormat2: faker.phone.phoneNumberFormat(),
      phoneFormats: faker.phone.phoneFormats()
      // Appears to pick a randon format string "1-###-###-#### x####"

    },

    image: {
      imageUrl: faker.image.imageUrl(400,400,"people"), // "http://lorempixel.com/640/480"
      // faker.image.imageURL(width, height, category)
      // for specific categories, use the helpers
      // faker.image.imageURL(400,200)
      // http://lorempixel.com/400/200/)
      avatar: faker.image.avatar(),
      // "https://s3.amazonaws.com/uifaces/faces/twitter/imcoding/128.jpg"
      // "http://uifaces.com/api/v1/random"
      /*
      $ curl http://uifaces.com/api/v1/random
        ---
        {
        	"username": "calebogden"
        	"image_urls": {
        		"epic": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg",
        		"bigger": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/73.jpg",
        		"normal": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/48.jpg",
        		"mini": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/24.jpg"
        	}
        }
      */
      image: faker.image.image(),
      // Random image from lorempixel.com
      // Same as faker.image.imageURL()
      abstract: faker.image.abstract(), // "http://lorempixel.com/640/480/abstract"
      animals: faker.image.animals(), //
      business: faker.image.business(), //
      cats: faker.image.cats(), //
      city: faker.image.city(), //
      food: faker.image.food(), //
      nightlife: faker.image.nightlife(), //
      fashion: faker.image.fashion(), //
      people: faker.image.people(), //
      nature: faker.image.nature(), //
      sports: faker.image.sports(), //
      technics: faker.image.technics(), //
      transport: faker.image.transport() //
    },

//////////////////////////////////////////////
// Functions with unclear Usage
//////////////////////////////////////////////
    unclearUsage: {
      objectElement: faker.random.objectElement(),
      //Usage is not clear
      mustache: faker.helpers.mustache(),
        // Not clear how to use this
      fake: {},
        //  fake: faker.fake(", ")
        // It's not clear what this function does.

    },

/////////////////////////////////////////////////
// Pre specified data sets
/////////////////////////////////////////////////
    cards: {
      createCard: faker.helpers.createCard(),
/*
"name": "Henriette Dibbert",
"username": "Bobbie_Dooley",
"email": "Ora.Weissnat50@gmail.com",
"address": {
  "streetA": "Gusikowski Brook",
  "streetB": "55286 Cummerata Grove",
  "streetC": "4677 Durgan Road Suite 346",
  "streetD": "Apt. 426",
  "city": "Lake Marshall",
  "state": "Nebraska",
  "country": "Guinea-Bissau",
  "zipcode": "04803-4735",
  "geo": {
    "lat": "12.5813",
    "lng": "-179.6855"
  }
},
"phone": "1-775-772-3088",
"website": "holly.name",
"company": {
  "name": "Kertzmann and Sons",
  "catchPhrase": "Synergized user-facing hardware",
  "bs": "vertical synthesize bandwidth"
},
"posts": [
  {
    "words": [
      "ut",
      "repellendus",
      "in"
    ],
    "sentence": "Ea commodi vel accusamus sit nisi eligendi at explicabo iure.",
    "sentences": "Saepe libero sint.\nLaborum dolor enim odit modi nam.\nUt eum eaque sint.",
    "paragraph": "Dolore minima deserunt.\nMaxime aut molestiae autem.\nEnim magni nihil dicta voluptatem atque.\nEnim hic vitae nisi officiis qui eum fugiat et distinctio.\nArchitecto dolorem rerum voluptate id."
  },
  {
    "words": [
      "itaque",
      "repudiandae",
      "et"
    ],
    "sentence": "Totam consequatur assumenda nobis eos quod sit.",
    "sentences": "Iure dicta dolores ipsa dolorum voluptatibus.\nIusto aliquid dolor ut saepe dolor itaque assumenda voluptate.\nNobis ut aliquam placeat similique laboriosam.",
    "paragraph": "Ut pariatur et repudiandae illo quos consequatur autem.\nAliquam nisi magnam quia.\nTemporibus et et labore cumque et libero.\nVel excepturi explicabo et eveniet aspernatur enim corporis in.\nBeatae quidem dolor saepe."
  },
  {
    "words": [
      "necessitatibus",
      "quaerat",
      "neque"
    ],
    "sentence": "Ducimus ipsum sed.",
    "sentences": "Illum provident earum ab et.\nSint error id ea ut cumque praesentium dolores possimus est.\nVeritatis sed tenetur odit qui quasi ex et et.",
    "paragraph": "Autem ipsam culpa.\nCorporis qui delectus illo voluptatem laborum.\nNam non et accusantium reiciendis quasi culpa mollitia.\nNostrum aut recusandae quaerat eligendi.\nEsse quia vel dolorem eos aliquid."
  }
],
"accountHistory": [
  {
    "amount": "974.35",
    "date": "2012-02-02T07:00:00.000Z",
    "business": "Keeling, McDermott and Bernhard",
    "name": "Checking Account 7445",
    "type": "invoice",
    "account": "67313276"
  },
  {
    "amount": "411.04",
    "date": "2012-02-02T07:00:00.000Z",
    "business": "Moen Group",
    "name": "Money Market Account 8700",
    "type": "invoice",
    "account": "77703994"
  },
  {
    "amount": "949.79",
    "date": "2012-02-02T07:00:00.000Z",
    "business": "Heidenreich and Sons",
    "name": "Savings Account 2483",
    "type": "deposit",
    "account": "18406774"
  }
]
},
*/
      contextualCard: faker.helpers.contextualCard(),
      /*
      "name": "Kathlyn",
      "username": "Kathlyn94",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/davidmerrique/128.jpg",
      "email": "Kathlyn94_Gutmann58@hotmail.com",
      "dob": "1952-06-02T07:46:47.053Z",
      "phone": "540.848.9429",
      "address": {
        "street": "Hills View",
        "suite": "Apt. 775",
        "city": "Kautzer fort",
        "zipcode": "98617-0658",
        "geo": {
          "lat": "-46.1407",
          "lng": "-23.4923"
        }
      },
      "website": "alene.org",
      "company": {
        "name": "Cronin, Kautzer and Krajcik",
        "catchPhrase": "Enhanced background knowledge base",
        "bs": "interactive strategize web-readiness"
      }
      },
      */
      userCard: faker.helpers.userCard(),
      /*
      "name": "Uriah Carter",
      "username": "Kenna_Gleichner16",
      "email": "Tyrell95@hotmail.com",
      "address": {
        "street": "Brent Mall",
        "suite": "Apt. 481",
        "city": "South Harold land",
        "zipcode": "22653-9848",
        "geo": {
          "lat": "-60.6271",
          "lng": "-71.0209"
        }
      },
      "phone": "205.196.1316 x633",
      "website": "leila.info",
      "company": {
        "name": "DuBuque Group",
        "catchPhrase": "Persistent impactful algorithm",
        "bs": "wireless e-enable convergence"
      }
      },
      */
      createTransaction: faker.helpers.createTransaction()
      /*
      "amount": "505.30",
       "date": "2012-02-02T07:00:00.000Z",
       "business": "Heller and Sons",
       "name": "Home Loan Account 0998",
       "type": "payment",
       "account": "14533361"
     }
    },
      */
    }

  }
}
