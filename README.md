## graphql-user

This package is using the packages `bcrypt` and `jsonwebtoken` in order to provide some reusable functions for GraphQL authentication.
Make sure that your app has an `APP_SECRET` env variable.

It includes the [following functions](https://github.com/kitze/graphql-user/blob/master/src/index.ts):

- `getUserId(context): string` - Returns the id from the currently logged-in user `context.request.get("Authorization")`
- `getToken(userId: string): string` - Returns a token by signing an object containing `{userId}` using the `APP_SECRET`
- `getHashedPassword(password: string): string` - Returns a hashed version of a password
- `comparePassword(password: string, comparePassword:string): boolean` - Compares a password and a hashed password
