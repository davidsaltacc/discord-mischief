
import { ERROR_TIMEOUT } from "../config.js";
import { Command, INVIS_GLITCH, sendMessage } from "../library.js";

export const HiddenPingUserCommand = new Command("hup", async (client, message, args) => {

    if (isNaN(+args[0])) {
        await message.edit("found no user");
        await new Promise(r => setTimeout(r, ERROR_TIMEOUT));
        return;
    }

    await sendMessage(message.channel, `${args.slice(1).join(" ")} ${INVIS_GLITCH} <@${args[0]}>`);

});
