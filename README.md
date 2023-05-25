## 👩‍✈️ graphql-user

This package is using the packages `bcrypt` and `jsonwebtoken` in order to provide some reusable functions for GraphQL authentication.

### 🙋‍♂️ Made by [@thekitze](https://twitter.com/thekitze)

### Other projects:

- 🏫 [React Academy](https://reactacademy.io) - Interactive React and GraphQL workshops
- 💌 [Twizzy](https://twizzy.app) - A standalone app for Twitter DM
- 💻 [Sizzy](https://sizzy.co) - A tool for testing responsive design on multiple devices at once
- 🤖 [JSUI](https://github.com/kitze/JSUI) - A powerful UI toolkit for managing JavaScript apps
- 🎥 [Vlog](https://youtube.com/kitze) - My YouTube channel

<a href="https://zerotoshipped.com"><img style="width:450px" src="https://i.ibb.co/WKQPDv5/twitter-image.jpg" alt="Zero To Shipped"></a>

Make sure that your app has an `APP_SECRET` env variable.

It includes the [following functions](https://github.com/kitze/graphql-user/blob/master/src/index.ts):

- `getUserId(context): string` - Returns the id from the currently logged-in user `context.request.get("Authorization")`
- `getToken(userId: string): string` - Returns a token by signing an object containing `{userId}` using the `APP_SECRET`
- `getHashedPassword(password: string): string` - Returns a hashed version of a password
- `comparePassword(password: string, comparePassword:string): boolean` - Compares a password and a hashed password
