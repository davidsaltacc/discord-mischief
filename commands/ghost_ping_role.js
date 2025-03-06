
import { Command, findRole, sendMessage } from "../library.js";

export const GhostPingRoleCommand = new Command("gpr", async (client, message, args) => {

    var guild_id = message.guildId;
    var guild = await client.guilds.fetch(guild_id);
    var role_id = await findRole(guild, message, args);

    if (!role_id) {
        return;
    }

    await (await sendMessage(message.channel, `<@&${role_id}>`)).delete();

});
