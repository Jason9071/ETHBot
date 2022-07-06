const Discord = require('discord.js');
require("dotenv").config();


const client = new Discord.Client();

const token = process.env.DISCORD_TOKEN;
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {


    console.log(msg);

    const test = {
        "content": "Mason is looking for new arena partners. What classes do you play?",
        "components": [
            {
                "type": 1,
                "components": [
                    {
                        "type": 3,
                        "custom_id": "class_select_1",
                        "options":[
                            {
                                "label": "Rogue",
                                "value": "rogue",
                                "description": "Sneak n stab",
                                "emoji": {
                                    "name": "rogue",
                                    "id": "625891304148303894"
                                }
                            },
                            {
                                "label": "Mage",
                                "value": "mage",
                                "description": "Turn 'em into a sheep",
                                "emoji": {
                                    "name": "mage",
                                    "id": "625891304081063986"
                                }
                            },
                            {
                                "label": "Priest",
                                "value": "priest",
                                "description": "You get heals when I'm done doing damage",
                                "emoji": {
                                    "name": "priest",
                                    "id": "625891303795982337"
                                }
                            }
                        ],
                        "placeholder": "Choose a class",
                        "min_values": 1,
                        "max_values": 3
                    }
                ]
            }
        ]
    }
    if (msg.content === 'ping') {
        msg.reply(test);
    }
});

client.login(token);