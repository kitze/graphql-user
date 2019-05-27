##graphql-user

This package is using the packages `bcrypt` and `jsonwebtoken` in order to provide some reusable functions for GraphQL authentication.
Make sure that your app has an `APP_SECRET` env variable.

It includes the following functions:

- `getUserId(context)` - Returns the currently logged user's id using `context.request.get("Authorization")`
- `getToken(userId: string)` - Returns a token by signing an object containing `{userId}` using the `APP_SECRET`
- `getHashedPassword(password: string)` - Returns a hashed version of a password
- `comparePassword(password: string, comparePassword:string)` - Compares a password and a hashed password
