
import { Command, findRole, INVIS_GLITCH, sendMessage } from "../library.js";

export const RolePingCommand = new Command("rp", async (client, message, args) => {

    var guild_id = message.guildId;
    var guild = await client.guilds.fetch(guild_id);
    var role_id = await findRole(guild, message, args);

    if (!role_id) {
        return;
    }

    var ping = `@${(await guild.roles.fetch(role_id)).name}`;
    ping += INVIS_GLITCH;
    var members = await guild.members.fetch();
    members.forEach(member => {
        if (member.roles.cache.has(role_id)) {
            ping += `<@${member.id}> `;
        }
    });
    await sendMessage(message.channel, ping);

});
