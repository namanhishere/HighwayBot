const consolelog = require('./util/translate')

module.exports = {
    name: "help",
    description: `Displays all commands or info about a specific command.`,
    aliases: ['h', 'commands', 'cmds', 'cmd', 'command', 'cmdlist'],
    async execute(args, cmds) {
        if (args[1]) {
            const command = await cmds.find(cmd => cmd.name === args[1])
                || await cmds.find(
                    cmd =>
                        cmd.aliases != null && Array.isArray(cmd.aliases)
                            ? cmd.aliases.includes(args[1])
                            : false
                );
            if (!command) console.log(`\x1b[31m\x1b[0m` + `[Help | Error] [${args[1]}] is not a available command`);
            await consolelog(`HighwayBot helper\n` +
                `| Command Information\n` +
                `| | Name: ${command.name}\n` +
                `| | Description: ${command.description ? command.description : 'No description'}\n` +
                `| | Aliases: ${command.aliases ? command.aliases.join(', ') : 'No aliases'}`);
        } else {
            await consolelog('',`HighwayBot helper\n| Commands`);
            for (const cmd of cmds) {
                await consolelog('', ` |  | ${cmd.name} - ${cmd.description ? cmd.description : 'No description'}`);
            }
            await consolelog('',`|` +
                `\n| Social / Contact` +
                `\n|  | Discord: https://discord.gg/YSZPRkKNzh` +
                `\n|  | Github: https://github.com/HackerShader/HighwayBot`);
        }
    }
};