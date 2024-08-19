require('dotenv').config();
const { Client, GatewayIntentBits, REST, Routes } = require('discord.js');
const axios = require('axios');
const commands = require('./commands');
const QRCode = require('qrcode');
const { Buffer } = require('buffer');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const TOKEN = process.env.CLIENT_TOKEN;
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
const rest = new REST({ version: '10' }).setToken(TOKEN);

async function main() {
  try {
    console.log('Started refreshing application (/) commands.');
    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands });
    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }

  client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });

  // This is called only in channels where firstBot is added
  client.on('messageCreate', async msg => {
    if (msg.content === 'hello') {
      await msg.reply(`Hello, ${msg.author.globalName}! 🌟 It's great to see you!`);
      await msg.channel.send(`Hello everyone! 👋 How's everyone doing today? Let's make it a fantastic day!`);
    }    
  })

  // This is called wherever any configured command is called
  client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'sweets') {
      if (interaction.options.getSubcommand() === 'lollipop') {
        await interaction.reply(`Sweet treat coming right up, ${interaction.user.globalName}! Enjoy your lollipop! 🍭🍭🍭`);
      }
    
      if (interaction.options.getSubcommand() === 'candy') {
        await interaction.reply(`Candy time! Here you go, ${interaction.user.globalName}! 🍬🍬🍬 Savor the sweetness!`);
      }
    }

    if (interaction.commandName === 'check-in') {
      const choice = interaction.options.getString('task');
      if (choice === 'sign-in') {
        await interaction.reply(`Good to see you, ${interaction.user.globalName}! 🌟 Wishing you a day full of accomplishments and positive vibes! Let's make it a great one!`);
      } else if (choice === 'lunch-break') {
        await interaction.reply(`Enjoy your break, ${interaction.user.globalName}! 🍽️ Take a well-deserved rest and recharge. We'll be here when you're ready to get back to it.`);
      } else if (choice === 'personal-time') {
        await interaction.reply(`Take your time, ${interaction.user.globalName}. 🌱 Personal time is important for a balanced life. Come back refreshed and ready to conquer the rest of the day!`);
      } else if (choice === 'sign-out') {
        await interaction.reply(`You did it, ${interaction.user.globalName}! 🎉 Another day, another set of achievements. Rest well and see you tomorrow for more greatness!`);
      }
    }

    if (interaction.commandName === 'weather') {
      const city = interaction.options.getString('city');
      try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`);
        const weather = response.data;
        const weatherInfo = `Weather in ${weather.name}: ${weather.weather[0].description}, Temperature: ${weather.main.temp}°C, Humidity: ${weather.main.humidity}%`;
        await interaction.reply(weatherInfo);
      } catch (error) {
        await interaction.reply('Sorry, I could not fetch the weather data. Please try again later.');
      }
    }

    if (interaction.commandName === 'generate') {
      const text = interaction.options.getString('text');
      try {
        const qrCodeDataUrl = await QRCode.toDataURL(text);
        const base64Data = qrCodeDataUrl.replace(/^data:image\/png;base64,/, '');
        const buffer = Buffer.from(base64Data, 'base64');
        await interaction.reply({ files: [{ attachment: buffer, name: 'qrcode.png' }] });
      } catch (error) {
        console.log(error)
        await interaction.reply('Sorry, I could not generate the QR code. Please try again later.');
      }
    }
  });

  await client.login(TOKEN);
}

main();