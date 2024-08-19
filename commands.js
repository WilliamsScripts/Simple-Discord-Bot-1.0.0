const commands = [
  {
    name: 'check-in',
    description: 'Log Time of Arrival, Lunch and Sign out of work',
    options: [
      {
        type: 3,
        name: 'task',
        description: 'What are you logging?',
        required: true,
        choices: [
          {
            name: 'Sign in',
            value: 'sign-in',
            description: 'Log time of sign in',
          },
          {
            name: 'Lunch Break',
            value: 'lunch-break',
            description: 'Log time of lunch break',
          },
          {
            name: 'Personal Time',
            value: 'personal-time',
            description: 'Log time of personal time',
          },
          {
            name: 'Sign out',
            value: 'sign-out',
            description: 'Log time of sign out',
          },
        ],
      },
    ]
  },
  {
    name: 'sweets',
    description: 'Request Sweets',
    options: [
      {
        type: 1,
        name: 'lollipop',
        description: 'request lollipop',
      },
      {
        type: 1,
        name: 'candy',
        description: 'request candy',
      },
    ]
  },
  {
    name: 'weather',
    description: 'Get the weather for a specific city',
    options: [
      {
        type: 3,
        name: 'city',
        description: 'The city you want the weather for',
        required: true,
      },
    ],
  },
  {
    name: 'generate',
    description: 'Generate a QR code for the provided text',
    options: [
      {
        type: 3,
        name: 'text',
        description: 'Text or URL to generate QR code for',
        required: true,
      },
    ],
  },
];

module.exports = commands