# Discord-Moment

[![downloadsBadge](https://img.shields.io/npm/dt/discord-moment?style=for-the-badge)](https://npmjs.com/discord-moment)
[![versionBadge](https://img.shields.io/npm/v/discord-moment?style=for-the-badge)](https://npmjs.com/discord-moment)

Discord Moment allows you to easily format dates and times in Discord's markdown format.

## Installation

```bash
npm install discord-moment
```

## Usage

```js
const discordmoment = require('discord-moment');

discordmoment.format('2021-04-20T16:20:00.000Z', 't'); // 16:20
discordmoment.format('2021-04-20T16:20:00.000Z', 'Short time'); // 16:20
discordmoment.format('2021-04-20T16:20:00.000Z', 'T'); // 16:20:30
discordmoment.format('2021-04-20T16:20:00.000Z', 'Long time'); // 16:20:30
discordmoment.format('2021-04-20', 'd'); // 20/04/2021
discordmoment.format('2021-04-20', 'Short date'); // 20/04/2021
discordmoment.format('2021-04-20', 'D'); // 20 April 2021
discordmoment.format('2021-04-20', 'Long date'); // 20 April 2021
discordmoment.format('2021-04-20T16:20:00.000Z', 'f'); // 20 April 2021 16:20
discordmoment.format('2021-04-20T16:20:00.000Z', 'Short date/time'); // 20 April 2021 16:20
discordmoment.format('2021-04-20T16:20:00.000Z', 'F'); // Tuesday, 20 April 2021 16:20
discordmoment.format('2021-04-20T16:20:00.000Z', 'Long date/time'); // Tuesday, 20 April 2021 16:20
discordmoment.format('2021-04-20T16:20:00.000Z', 'R'); // 2 months ago
discordmoment.format('2021-04-20T16:20:00.000Z', 'Relative'); // 2 months ago

discordmoment.format(Date.now(), 'R'); // a few seconds ago
```

## Styles

| Style | Description                  | Example Output               |
|:-----:|------------------------------|------------------------------|
| `t`   | Time                         | 16:20                        |
| `T`   | Time with seconds            | 16:20:30                     |
| `d`   | Date                         | 20/04/2021                   |
| `D`   | Long Date                    | 20 April 2021                |
| `f`   | Long Date with time          | 20 April 2021 16:20          |
| `F`   | Long Date with day and time  | Tuesday, 20 April 2021 16:20 |
| `R`   | Relative time                | 2 months ago                 |
