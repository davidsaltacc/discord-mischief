
import { ERROR_TIMEOUT } from "./config.js";

export const appdataPath = process.env.APPDATA || (process.platform == "darwin" ? process.env.HOME + "/Library/Preferences" : process.env.HOME + "/.local/share");

export class Command {

    constructor(command, execute) {
        this.command = command;
        this._execute = execute;
    }

    async execute(client, message, args) {
        try {
            return await this._execute(client, message, args);
        } catch (error) {
            console.error(error);
            await message.edit(`encountered error (${error.name})`);
            await new Promise(r => setTimeout(r, ERROR_TIMEOUT));
        }
    }

};

export const INVIS_GLITCH = "||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|| _ _ _ _ _ _ ";

export async function sendSilentMessage(channel, content, args) {
    args = args ?? {};
    args.content = content;
    args.flags = args.flags ?? 4096 | 4096 ;
    return await channel.send(args);
}

export async function findRole(guild, message, args) {

    var role_id;

    if (!isNaN(+args[0])) {

        role_id = args[0];
                
    } else {

        var term = args.join(" ").toLowerCase();
        var roles = guild.roles.cache;
        roles = roles.filter(role => role.name.toLowerCase().includes(term));

        if (roles.size > 1) {
            await message.edit("found more than 1 role");
            await new Promise(r => setTimeout(r, ERROR_TIMEOUT));
            return null;
        } else if (roles.size < 1) {
            await message.edit("found no roles");
            await new Promise(r => setTimeout(r, ERROR_TIMEOUT));
            return null;
        } else {
            role_id = roles.first().id;
        }

    }

    return role_id;

}

export async function findUser(guild, message, args) {

    var user_id;

    if (!isNaN(+args[0])) {

        user_id = args[0];
                
    } else {

        var term = args.join(" ").toLowerCase();
        var members = guild.members.cache;
        members = members.filter(member => member.user.username.toLowerCase().includes(term));

        if (members.size > 1) {
            await message.edit("found more than 1 user");
            await new Promise(r => setTimeout(r, ERROR_TIMEOUT));
            return;
        } else if (members.size < 1) {
            await message.edit("found no users");
            await new Promise(r => setTimeout(r, ERROR_TIMEOUT));
            return;
        } else {
            user_id = members.first().id;
        }

    }

    return user_id;

}