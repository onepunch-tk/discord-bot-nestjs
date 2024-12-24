import { Events, GatewayIntentBits } from 'discord.js';

export enum DiscordRole {
  /* 서버내 역할 ID  */
  /* 예: ADMIN='12345678' */
}

export const DISCORD_CONSTANTS = {
  INTENTS: {
    GUILDS: GatewayIntentBits.Guilds,
    GUILD_MEMBERS: GatewayIntentBits.GuildMembers,
    GUILD_MESSAGES: GatewayIntentBits.GuildMessages,
    MESSAGE_CONTENT: GatewayIntentBits.MessageContent,
    GUILD_VOICE_STATES: GatewayIntentBits.GuildVoiceStates,
    GUILD_INTEGRATIONS: GatewayIntentBits.GuildIntegrations,
  },
  EVENTS: {
    MESSAGE_CREATE: Events.MessageCreate,
    INTERACTION_CREATE: Events.InteractionCreate,
  },
  METADATA: {
    COMMAND_KEY: 'discord:command',
    ROLES_KEY: 'discord:role',
  },
  PROVIDERS: {
    DISCORD_REST: 'DISCORD_REST',
  },
  ROLE_GROUPS: {
    ALL: [],
    ADMIN: [],
  },
} as const;
