class DiscordMoment {
  constructor() {
    this.version = require("./package.json").version;
    this.longhand = {
      "short time": "t",
      "long time": "T",
      "short date": "d",
      "long date": "D",
      "short date/time": "f",
      "long date/time": "F",
      "relative Time": "R",
    };
  }

  format(date = Date.now(), type = "f") {
    if (new Date(date).getTime() === "Invalid Date") throw Error(`Invalid Date: ${date}`);
    if (typeof type !== "string") throw TypeError("type must be a string");
    if (!/^[tTdDfFR]$/.test(type) && !Object.keys(this.longhand).includes(type.toLowerCase()))throw new TypeError(`Invalid style: ${type}`);
    return `<t:${Math.round(new Date(date).getTime() / 1000)}:${this.longhand[type.toLowerCase().replace(/[-_]/gi, " ")] || type }>`;
  }
}

const instance = new DiscordMoment();
for (const key of Object.getOwnPropertyNames(Object.getPrototypeOf(instance)).filter((k) => k !== "constructor"))DiscordMoment[key] = instance[key];
module.exports = DiscordMoment;
