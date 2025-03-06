console.log("loading");

import { Client } from "discord.js-selfbot-v13";
import { ERROR_TIMEOUT, PREFIX, TOKEN } from "./config.js";
import { getCommand } from "./commands.js";

const client = new Client();

client.on("ready", async () => {
    console.log("ready");
});

client.on("messageCreate", async message => {

    if (message.author.id != client.user.id) {
        return;
    }

    if (message.content.startsWith(PREFIX)) {

        var content = message.content;
        content = content.slice(PREFIX.length).trim();

        var command = content.split(" ")[0];
        content = content.slice(command.length).trim();

        var args = content.split(" ");

        var cmd = getCommand(command);

        if (!cmd) {
            await message.edit(`unknown command ${command}`);
            await new Promise(r => setTimeout(r, ERROR_TIMEOUT));
        } else {
            await cmd.execute(client, message, args);
            await message.delete();
        }

    }

});

client.login(TOKEN);