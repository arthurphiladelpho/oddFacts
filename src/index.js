'use strict';
var Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.  
//Make sure to enclose your value in quotes, like this: var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
var APP_ID = undefined;

var SKILL_NAME = "Odd Facts";
var GET_FACT_MESSAGE = "Here's your fact: ";
var HELP_MESSAGE = "You can say tell me an odd fact, or, you can say exit... What can I help you with?";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
var data = [
    "It is physically impossible for you to lick your elbow.",
    "Like fingerprints, everyone's tongue print is different.",
    "Your heart beats over one hundred thousand times a day.",
    "It takes approximately twelve hours for food to entirely digest.",
    "Ostriches can run faster than horses, and the male ostriches can roar like lions.",
    "Bats are the only mammals that can fly.",
    "Kangaroos use their tails for balance, so if you lift a kangaroo’s tail off the ground, it can’t hop.",
    "The Sun is an almost perfect sphere.",
    "A total solar eclipse can happen once every one to two years. This makes them a rare event.",
    "Saturn radiates two and a half times more energy into space than it receives from the sun.",
    "The temperature inside the Sun can reach fifteen million degrees Celsius.",
    "Tigers not only have stripes on their fur, they also have them on their skin.",
    "No two tigers ever have the same stripes.",
    "A cat has thirty two muscles in each ear.",
    "Elephants can smell water up to three miles away.",
    "There are only three mammals that undergo menopause: elephants, humpback whales and humans.",
    "The Arctic Circle is the most northerly of the abstract five major circles of latitude as shown on maps of the Earth.",
    "Adaptations are the most important features of all organisms.",
    "There is a narrow passage of water between Russia and the United States, it is called the Bering Strait.",
    "The micro biome is the genetic material of all the microbes that live on and inside the human body.",
    "Hinduism is the oldest religion in the world.",
    "Yoga is a group of physical, mental, and spiritual practices or disciplines which originated in ancient India.",
    "Yoga can reduce insomnia.",
    "Eagles have excellent eyesight.",
    "Dogs and cats both slurp water the same way.",
    "Dogs only have sweat glands in their paws.",
    "Unlike other cats, lions are very social animals.",
    "Lions live in groups, called pride.",
    "Most sharks species will drown if they stop moving.",
    "The polar bear is a carnivorous bear whose native range lies largely within the Arctic Circle, encompassing the Arctic Ocean, its surrounding seas and surrounding land masses.",
    "The giant panda, also known as panda bear or simply panda, is a bear native to south central China.",
    "The red panda, also called the lesser panda, the red bear-cat, and the red cat-bear, is a mammal native to the eastern Himalayas and southwestern China.",
    "The snow leopard or ounce is a large cat native to the mountain ranges of Central and South Asia.",
    "The jaguar is a big cat, the only one of his species native to the Americas.",
    "The cougar, also commonly known as the mountain lion, puma, panther, is native to the Americas.",
    "The Bengal tiger is the most numerous of the tiger subspecies.",
    "The bald eagle is a bird of prey found in North America.",
    "Harpy eagles eat monkeys sometimes.",
    "Chalicotheres is an extinct group of herbivorous, odd-toed ungulate mammals spread throughout North America",
    "The giraffe is a genus of African even-toed ungulate mammals, the tallest living terrestrial animals and the largest ruminants."
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.  
//=========================================================================================================================================
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};