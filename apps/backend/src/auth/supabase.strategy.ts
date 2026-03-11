import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthUser } from '@supabase/supabase-js';

@Injectable()
export class SupabaseStrategy extends PassportStrategy(Strategy, 'supabase') {
    private readonly logger = new Logger(SupabaseStrategy.name);

  constructor(private readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('SUPABASE_JWT_SECRET')!,
    });
  }

  async validate(user: AuthUser) {
    if (!user) {
      this.logger.warn('No user found in JWT payload');
      throw new UnauthorizedException('Invalid token: no user information');
    }
    return user;
  }
}