import { SetMetadata } from '@nestjs/common';

export const ALLOW_ANON_KEY = 'allowAnon';
export const AllowAnonymous = () => SetMetadata(ALLOW_ANON_KEY, true);
