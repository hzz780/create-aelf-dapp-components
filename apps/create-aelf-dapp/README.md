Creates the aelf application with one command.

If something doesn’t work, please [file an issue](https://github.com/AElfProject/create-aelf-dapp/issues/new).

# 1. Quick Overview

```bash
yarn create aelf-dapp my-aelf-dapp
# If you encounter problems, you can try "npm create aelf-dapp my-aelf-dapp"
cd my-aelf-dapp
yarn dev
```

Then open http://localhost:3000/ to see your app.

# 2. Create a Dapp

## 2.1 Prepare

1. Node > = 20: It is recommended to install Node 20 or higher on the local development machine. You can use nvm (macOS/Linux) or nvm-windows to switch Node versions between different projects.
2. Yarn: You also need to install Yarn on your local development machine.

## 2.2 Quick start

### 2.2.1 Development

```bash
yarn create aelf-dapp [appName]
yarn dev # Development Environment
# default： http://localhost:3000
```

#### 2.2.1.1 example

```bash
# 1. create
$ yarn create aelf-dapp aelf-dapp

⭐️ Hi,welcome to create your project by create-aelf-dapp
false
/Users/hzz780/workspace/practice/npmInitYarnCreate/aelf-dapp
create aelf-dapp/package.json
create aelf-dapp/._tests__/page.test.jsx
create aelf-dapp/.DS_Store
# ......(omit)

✨ File Generate Done /Users/hzz780/workspace/practice/npmInitYarnCreate/aelf-dapp

yarn install v1.22.21
warning ../../../../package.json: No license field
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...

🎉  Successfully generated your project.
✨  Done in 22.65s.

# 2. run
$ yarn dev
yarn run v1.22.21
warning ../../../../package.json: No license field
$ next dev
▲ Next.js 14.2.3
- Local:        http://localhost:3000
- Environments: .env.development
- Experiments (use with caution):
  · instrumentationHook

✓ Starting...
```

### 2.2.2 Publish

#### 2.2.2.1 Local testing

```bash
yarn build
yarn start
```

#### 2.2.2.2 Vercel released

1. Register https://sentry.io/ Create a new project.
   1. Get SENTRY_AUTH_TOKEN at https://[your organization name] sentry.io/settings/auth-tokens/
   2. Get the DSN at https://[your organization name] sentry.io/settings/projects/[your project name]/keys/
   > For more details, please refer to: https://docs.sentry.io/cli/configuration

2. Register https://vercel.com/ and start a new project associated with our repo.
   1. Configure Environment Variables, add key SENTRY_AUTH_TOKEN, value is the value of the SENTRY_AUTH_TOKEN obtained in the above steps

4. When pushing or submitting PR, the project will automatically compile and publish
   > For more details, please refer to: https://vercel.com

# 3. What’s Included?

1. Support for Vercel Publishing: A proven ability to publish on the [Vercel](https://vercel.com/) service for free and quickly for startups.
2. Everything included with [create-next-app](https://nextjs.org/docs/app/api-reference/create-next-app): Next(App Router), React, TSX, ES6, TypeScript, Tailwind, ESLint。
3. Integrated aelf on-chain solution:
   1. Wallet integration solution [aelf-web-login](https://github.com/AElfProject/aelf-web-login): evoke plug-in wallet/APP wallet wallet, call contract to read on-chain data or initiate on-chain transactions.
   2. Aelf-web3.js sdk: Create wallets, read and write data on the chain, etc.
4. UI solution: aelf-design that fits the aelf theme and commonly used framework ant-design.
5. Common tools
   1. Data Analysis: Analysis
   2. Anomaly Monitoring: Sentry
   3. Unit test tool: Jest
   4. Status management tool: RTK
   5. Git action configuration: The default action contains lint and test.
6. Use cases: In the path/demos, there are a series of common use cases

# 4. LICENSE
Create aelf dapp is open source software licensed as MIT.

