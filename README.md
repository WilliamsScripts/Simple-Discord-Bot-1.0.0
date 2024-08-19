# Simple Discord Bot

This is a versatile Discord bot that combines multiple functionalities, including weather updates, user greetings, and employee check-ins. The bot enhances your Discord server by providing useful features for work management and a bit of fun!

## Features

- **Weather Updates**: Get the current weather for any city using the `/weather` command.
- **User Greetings**: The bot welcomes users when they type "hello" in the chat, sending a friendly greeting to the channel.
- **Employee Check-in System**: Log work activities like signing in, taking lunch breaks, and signing out using the `/check-in` command.
- **Virtual Sweets**: Request virtual sweets like lollipops and candies using the `/sweets` command.
- **QR Code Generator**: Generate QR codes from text. Send the QR code image directly in Discord.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have a Discord account and are able to create a Discord application and bot.
- You have Node.js and npm installed on your development machine.
- You have an API key from [OpenWeatherMap](https://openweathermap.org/api).

## Installation

1. **Clone the repository**:

   ```bash
    git clone https://github.com/WilliamsScripts/Simple-Discord-Bot-1.0.0.git

    cd Simple-Discord-Bot-1.0.0
   ```
2. **Install dependencies**:
   ```bash 
   npm install
   ```
3. **Create a .env file in the root of your project and add the following:**:
   ```bash 
    CLIENT_TOKEN=your-discord-bot-token
    CLIENT_ID=your-discord-client-id
    WEATHER_API_KEY=your-openweathermap-api-key
   ```
4. **Run the bot:**:
   ```bash 
    npm run dev
   ```
## Usage
### Commands

- `/ping`: Replies with "Pong!"
- `/hello`: The bot will greet you.
- `/check-in`: Log your work tasks such as signing in, lunch breaks, and signing out.
  - **Options**:
    - `Sign in`: Log your time of sign-in.
    - `Lunch Break`: Log your time of lunch break.
    - `Personal Time`: Log your time of personal time.
    - `Sign out`: Log your time of sign out.
- `/sweets`: Request virtual sweets.
  - **Options**:
    - `lollipop`: Get a lollipop.
    - `candy`: Get a candy.
- `/weather`: Get the current weather for a specific city.
  - **Options**:
    - `city`: The name of the city you want the weather for.
- `/generate`: Generate a QR code from provided text.
  - **Options**:
    - `text`: The text you want to encode into a QR code.


### Automated Responses

- **"hello"**: The bot will automatically respond with a greeting to the user who types "hello" in the chat.

### Example Usage

In any Discord channel where the bot is active, you can type:
  ```bash
    /weather city:London

    /generate text:HelloWorld
  ```

## Acknowledgements

- [Discord.js](https://discord.js.org/) for the excellent Discord API library.
- [OpenWeatherMap](https://openweathermap.org/) for providing the weather data.
- [dotenv](https://github.com/motdotla/dotenv) for managing environment variables.
- [QRCode](https://www.npmjs.com/package/qrcode) for providing thr QRcode generator.

## Contributing

If you'd like to contribute to this project, please fork the repository and submit a pull request. Contributions are always welcome!
