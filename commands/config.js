
import { Command } from "../library.js";
import { openConfigFile } from "../config.js";

export const ConfigCommand = new Command("config", async (client, message, args) => {

    openConfigFile();
    
});
