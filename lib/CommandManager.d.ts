import { Client, Userstate } from 'tmi.js';
export default class CommandManager {
    private commandsMap;
    private client;
    constructor(client: Client);
    registerCommand(command: string, executor: CommandExecutor): void;
    private parseChatEventToRegisteredCommand;
    private runCommand;
    getRegisteredCommandsAsArray(): string[];
}
interface CommandOrigins {
    command: string;
    arguments: string[];
    channel: string;
    user: Userstate;
    client: Client;
}
interface CommandExecutor {
    invoke(origins: CommandOrigins): void;
}
export {};
//# sourceMappingURL=CommandManager.d.ts.map