export class AddUserRequest {
  constructor(
  readonly username: string,
  readonly email: string,
  readonly age: number,
  ) {}
}
