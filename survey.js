const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const profile = {
  name: "",
  activity: "",
  music: "",
  meal: "",
  food: "",
  sport: "",
  superpower: "",
};
// bunch of questions to ask the user
rl.question("What's your name? Nicknames are good too  ", (answer) => {
  profile.name = answer;
  rl.question("What's an activity you like doing?  ", (answer) => {
    profile.activity = answer;
    rl.question("What do you listen to while doing that?  ", (answer) => {
      profile.music = answer;
      rl.question(
        "Which meal is your favourite (eg: dinner, brunch, etc.)  ",
        (answer) => {
          profile.meal = answer;
          rl.question(
            "What's your favourite thing to eat for that meal?",
            (answer) => {
              profile.food = answer;
              rl.question(
                "Which sport is your absolute favourite?  ",
                (answer) => {
                  profile.sport = answer;
                  rl.question(
                    "What is your superpower? In a few words, tell us what you are amazing at!  ",
                    (answer) => {
                      profile.superpower = answer;

                      // return the results of asking all the questions

                      console.log(`This is ${profile.name}. They like ${profile.activity} while they listen to ${profile.music}. their favourite meal of the day is ${profile.meal} when they get to eat ${profile.food}. Their favourite sport is ${profile.sport} and their superpower is ${profile.superpower}.`);

                      rl.close();
                    }
                  );
                }
              );
            }
          );
        }
      );
    });
  });
});
