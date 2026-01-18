import { CanActivate } from "@nestjs/common"

export class OptionalAuthGuard implements CanActivate {
  canActivate() {
    return true
  }
}
