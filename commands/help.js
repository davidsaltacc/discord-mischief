
import { Command } from "../library.js";
import { PREFIX, ERROR_TIMEOUT } from "../config.js";

export const HelpCommand = new Command("help", async (client, message, args) => {

    console.log(
`
\x1b[47m\x1b[30mCommands\x1b[0m

- ${PREFIX}help (Help)
Shows this help menu.

- ${PREFIX}gpu (Ghost Ping User)
Ghost ping a user. Either supply an user ID or a search term for a username. If no user or more than one user will be found, it will error.

- ${PREFIX}gpr (Ghost Ping Role)
Ghost ping a role. Either supply a role ID or a search term for a role. If no role or more than one role will be found, it will error.

- ${PREFIX}hup (Hidden User Ping)
Hide an user ping inside a message. Requires an user ID directly, and everything supplied after the ID will be the content of the message.

- ${PREFIX}hrp (Hidden Role Ping)
Hide a role ping inside a message. Requires a role ID directly, and everything supplied after the ID will be the content of the message.

- ${PREFIX}rp (Role Ping)
Lets you ping a role you usually would not be able to ping due to missing permissions.

- ${PREFIX}config (Config)
Opens the config file for editing.

`
    );

    
    await message.edit("open the console window");
    await new Promise(r => setTimeout(r, ERROR_TIMEOUT));

});
