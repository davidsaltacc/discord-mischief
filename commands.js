
import { RolePingCommand } from "./commands/role_ping.js";
import { GhostPingUserCommand } from "./commands/ghost_ping_user.js";
import { GhostPingRoleCommand } from "./commands/ghost_ping_role.js";
import { HiddenPingRoleCommand } from "./commands/hidden_ping_role.js";
import { HiddenPingUserCommand } from "./commands/hidden_ping_user.js";
import { HelpCommand } from "./commands/help.js";
import { ConfigCommand } from "./commands/config.js";

const commands = [

    RolePingCommand,
    GhostPingUserCommand,
    GhostPingRoleCommand,
    HiddenPingRoleCommand,
    HiddenPingUserCommand,
    HelpCommand,
    ConfigCommand
    
];

export function getCommand(name) {
    return commands.filter(cmd => cmd.command == name)[0];
}