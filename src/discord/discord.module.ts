import { Module } from '@nestjs/common';
import { InteractionService } from './services/interaction.service';
import { MessageService } from './services/message.service';

@Module({
  providers: [MessageService, InteractionService],
  exports: [MessageService, InteractionService],
})
export class DiscordModule {}
