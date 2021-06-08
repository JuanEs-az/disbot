const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch')

//Mention: <@ user.id >
const methods = {
  say: function(msg, params){
    console.log(msg, params)
  },
  data: function(msg, params){
    msg.channel.send("Canal: " + msg.channel.name)
    msg.channel.send(`Autor: <@ ${msg.author.id} >`)
  },
  random: function (msg, params) {
    const cases = {
      default: {
        min: 0,
        max: 10
      },
      1: {
        min: 0,
        max: params[0] * 1
      },
      2: {
        min: params[0] * 1,
        max: params[1] * 1
      }
    }

    const ca$e = cases[params.length] ? cases[params.length] : cases.default
    let min = ca$e.min
    let max = ca$e.max + 1

    let rand = Math.floor(Math.random() * (max - min)) + min;

    if(isNaN(rand)){
      msg.channel.send(`* Relincho confundido *`)
      msg.channel.send(`Parece que ha ocurrido un error :horse::sob:`)
      return 0;
    }
    msg.channel.send(`:game_die: ${ rand } :game_die:`)
  },

}

client.on('ready', () => {
  console.log(`I'm now on as ${client.user.tag}`);
});

client.on('message', msg => {
  const value = msg.content
  if( value.toLowerCase().startsWith("juan") ){
    let params = value.split(" ")
    params.shift()
    let method = params[0]
    params = params.slice(1)
    methods[method](msg, params)
  }
  // if (msg.content === '..helloworld') {
  //   msg.reply('hello world');
  // }
});

client.login('ODUxNTk3MzQzNDU4ODUyODY1.YL6l1A.pHppLYe9T47KPplrPTPNEb2PTiM');