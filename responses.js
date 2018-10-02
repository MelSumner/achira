module.exports = {
    MODERATOR_MESSAGES: [{
        //review messages for swearing
        "title": "EXPLETIVE",
        "message": "Oops! Looks like you used an expletive. Please note that swearing is against the terms and conditions of enrichment center.",
        "pattern": /regular expression literal in JS/
        }, {
        //encourage more inclusive language if someone says "guys"
        "title": "GUYS",
        "message": "",
        "pattern": /regular expression literal/
      }
    ],
  
    BOT_MENTION_MESSAGES: [{
        //if someone says hello @ the bot
        "title": "HELLO",
        "message": "",
        "pattern": /regular expression literal/
        }, {
        // if someone thanks @ the bot
        "title": "THANK",
        "message": "",
        "pattern": /regular expression literal/    
        }, {
        //if someone says something else @ the bot
        "title": "CAKE",
        "message": "",
        "pattern": /regular expression literal/
        }
  
    ]
  }