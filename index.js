const Aoijs = require('aoi.js');

const express = require('express');
const app = express();
app.get('/', (request, response) => {
	console.log('Ping recebido!');
	response.sendStatus(200);
});
app.listen(process.env.PORT);

const bot = new Aoijs.Bot({
	token: process.env.TOKEN,
	prefix: '.'
});
bot.onMessage()
bot.loadCommands(`./commands/`) //Allows Commands executed by `commands` folder

bot.command({
  name: "ping",
  code: `$pingms`
})

//vereabes
      
bot.variables({
 par: "https://media.discordapp.net/attachments/887798469832605750/888174687824269322/standard.gif" 
  })
  
  
bot.status({
  text: "Parceiras | dsc.gg/astrogg",
  type: "PLAYING",
  status: "idle",
  time: 12
})

