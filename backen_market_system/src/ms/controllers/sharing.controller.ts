import {
  Controller,
  Post,
  Body,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { SharingService } from '../services/sharing.service';
import { ShareBillDto } from '../dto/sharing.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('sharing')
@Controller('sharing')
export class SharingController {
  constructor(private readonly sharingService: SharingService) {}

  @ApiOperation({
    description: 'Share bill by email',
  })
  @Post('email')
  @UseInterceptors(FileInterceptor('file'))
  async shareByEmail(
    @Body() shareBillDto: ShareBillDto,
    @UploadedFile() file,
  ): Promise<void> {
    shareBillDto.attachmentPath = file.path;
    await this.sharingService.shareByEmail(
      shareBillDto.email,
      shareBillDto.bill,
      shareBillDto.attachmentPath,
    );
  }

  @ApiOperation({
    description: 'Share bill by WhatsApp',
  })
  @Post('whatsapp')
  async shareByWhatsApp(@Body() shareBillDto: ShareBillDto): Promise<void> {
    await this.sharingService.shareByWhatsApp(
      shareBillDto.phoneNumber,
      shareBillDto.bill,
    );
  }
}
