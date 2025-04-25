# Warwick Student Arts Festival 2025 Website

> This is the public website for the Warwick Student Arts Festival, written in [Next.js](https://nextjs.org/).

Development site: [https://wsaf25-dev.containers.uwcs.co.uk/](https://wsaf25-dev.containers.uwcs.co.uk/)
Production site: [https://wsaf.org.uk/](https://wsaf.org.uk/)

## Running the Website

You will need to have installed NodeJS v20 and NPM for this to work. If you haven't already done this, you can install the LTS version [here](https://nodejs.org/en/download).

Then, clone the website through SSH. You'll need to install [Git](https://git-scm.com/downloads) to do this, and setup a SSH key.

```bash
git clone git@github.com:WarwickStudentArtsFestival/WSAF25-Website.git
```

Setup env

```bash
cp .env .env.local
nano .env.local
```

Install npm modules

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

This will start a live-reloading web server at [http://localhost:3000](http://localhost:3000).

## Code and Commit Style

### Git Usage

Please complete any work in your own branch related to the issue you are completing. You can click 'Create Merge Request' on the issue to do this, and then create a branch when asked.

When committing changes, precede your message with a [Gitmoji](https://gitmoji.dev/) so it's easy to see what you have done. The most common ones you may use are:

- 💬 `:speech_balloon:` - Add or update text and literals
- ✨ `:sparkles:` - Introduce new features
- 🐛 `:bug:` - Fix bugs
- 💄 `:lipstick:` - Add or update the UI and style files.
- 🚨 `:rotating_light:` - Fix compiler/linter warnings

After you have completed your work, remove the draft status from your merge and assign Josh to review it!

### ESLint

We use eslint to ensure that our code is generally high quality and is formatted consistently. This will automatically be run whenever a merge request is created. This can be run with:

```bash
npm run lint
```

```bash
npm run lint:fix
```

If you are using an editor such as IntelliJ or VSCode, I'd recommend setting your editor to automatically run this whenever you save, and fix any issues.
