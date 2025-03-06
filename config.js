
import path from "node:path";
import { appdataPath } from "./library.js";
import fs from "node:fs";
import { execSync } from "node:child_process";

export const CONFIG_FOLDER = path.join(appdataPath, "discord_mischief");
export const CONFIG_PATH = path.join(CONFIG_FOLDER, "config.txt");

export function openConfigFile() {
    execSync(`${(() => { 
        switch (process.platform) { 
            case "darwin": return "open";
            case "win32": return "start";
            case "win64": return "start";
            default: return "xdg-open";
        }
    })()} ${CONFIG_PATH}`);
}

const defaultConfig =
`#
# READ ME READ ME READ ME READE ME!!!
#
# To access this config file again, execute the command "config". Else you can find it at 
# ${CONFIG_PATH}
# When changing anything, you need to restart the application for the changes to apply.
#
# Also make sure to change the token to your discord token. To learn how you can obtain your token, read this:
# https://gist.github.com/MarvNC/e601f3603df22f36ebd3102c501116c6
# 
# If you read everything here, change the following line to "true".
CONFIRMED=false

# beginning config

# Your Discord Token.
TOKEN=YOUR_TOKEN_GOES_HERE

# The duration (milliseconds) after which error messages and other things disappear. Default: 1 second
ERROR_TIMEOUT=1000

# The command prefix. For example: m!help, m!config. Default: m!
PREFIX=m!

# Makes all messages silent so no push notifications appear. Fixes multiple issues.
ENABLE_NOTIFIX=true

`;

var config = {};

if (!fs.existsSync(CONFIG_PATH)) {

    if (!fs.existsSync(CONFIG_FOLDER)) {
        fs.mkdirSync(CONFIG_FOLDER);
    }
    fs.writeFileSync(CONFIG_PATH, defaultConfig);

} else {

    var configContent = fs.readFileSync(CONFIG_PATH).toString("utf8");
    configContent.split(/\r?\n/).forEach(line => {
        
        var trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) return;

        var eqIndex = trimmed.indexOf("=");
        if (eqIndex == -1) { 
            return;
        }

        var key = trimmed.substring(0, eqIndex).trim();
        var value = trimmed.substring(eqIndex + 1).trim();

        config[key] = value;

    });

}

if (!Boolean.valueOf(config["CONFIRMED"])) {
    openConfigFile();
    throw new Error("please confirm you read the readme in the config file.");
}

export const TOKEN = config["TOKEN"] ?? null;
export const ERROR_TIMEOUT = parseInt(config["ERROR_TIMEOUT"] ?? 1000);
export const PREFIX = config["PREFIX"] ?? "m!";
export const ENABLE_NOTIFIX = Boolean.valueOf(config["ENABLE_NOTIFIX"] ?? true);
