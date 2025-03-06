
import { Command, findUser, sendSilentMessage } from "../library.js";

export const GhostPingUserCommand = new Command("gpu", async (client, message, args) => {

    var guild_id = message.guildId;
    var guild = await client.guilds.fetch(guild_id);
    var user_id = await findUser(guild, message, args);

    if (!user_id) {
        return;
    }

    await (await sendSilentMessage(message.channel, `<@${user_id}>`)).delete();

});
