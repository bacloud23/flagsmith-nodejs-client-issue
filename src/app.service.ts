import { Injectable } from '@nestjs/common';
import Flagsmith from 'flagsmith-nodejs';

@Injectable()
export class AppService {
  getHello(): string {
    const environmentKey = '<ENVIRONMENT_KEY>';
    const flagsmith = new Flagsmith({
      environmentKey: environmentKey,
    });
    return 'Hello World!';
  }
}
