# Webapp Starter

<!--Rename title to project name-->

## Template (please remove once project is set up)

**Create a new repository using this starter**

1. On Github navigate to https://github.com/Roamltd/webapp-starter
2. Above the file list click `Use this template`
3. Enter the name of your app then click `Create repository from this template`

For further details please read [this](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template).

**Refactoring according to your project**

1. Global search `__REPLACE`
2. Replace all instances of `__REPLACE_XXX__` with your project details
3. Don't forget to replace the icons in manifest.json

## Development

### A thing or two about .env files

1. If you need any environment variables please use a .env file in your root webapp folder ( Follow the .env.template standard when naming )
2. Only thing to remember is that you should not commit this file to Github since these values should be kept secure
3. Please use LastPass or equivalent tool to save and share these .env variable values with-in your team

### Sending passwords to the backend

- src/utils/crypto contains a hashing function to be used when sending passwords to the backend
- To ensure this works properly, add a salt string (minimum 32 characters) in your env files
- Each environment (dev, qa, prod) should have a unique randomly generated salt
- If there are multiple platforms (Web, iOS, Android) for the app, the salt should be shared across these platforms
- All requests that contain passwords (login, register, reset password etc) should use this function

### Progressive Web Apps & Service workers

Since CRA 4 the service worker is opt-in. If the project needs to be turned into a PWA a service worker must be added.

```bash
npx create-react-app my-app --template cra-template-pwa-typescript
```

[Read more](https://github.com/facebook/create-react-app/issues/10032#issuecomment-723433217)
[Making a Progressive Web App](https://create-react-app.dev/docs/making-a-progressive-web-app/)

### Scripts

See package.json for more details.

**Testing**

Run tests for CI. Performs linting and test commands.

```bash
yarn test
```

Run unit tests.

```bash
yarn test:watch
```

Run unit tests with code coverage.

```bash
yarn test:coverage
```

**Linting**

Lint CSS and scripts.

```bash
yarn lint
```

Lint CSS with Stylelint.

```bash
yarn lint:css
```

Lint scripts with Eslint.

```bash
yarn lint:eslint
```

**Performance**

Compress SVG's in `src/assets/images` with SVGO.
If you have sub directories the targets in the script can be changed to `src/assets/images/**/*.svg`
Note that this fails if you don't have sub directories. By default this commend will compress already compressed SVG's on subsequent runs.

```bash
yarn perf:svg
```

Inspect a production build in `build/` with `source-map-explorer` to inspect your production bundle.
Great for debugging code-splitting. Remember to run `yarn build` first.

```bash
yarn perf:build
```

**Storybook**
[See Storybook section](#storybook)
Start Storybook

```bash
yarn storybook
```

Storybook production build

```bash
yarn build-storybook
```

# General description

<!--What the project is about-->

## Main stack

<!--
List all main libraries/frameworks
Make sure to include links to the exact versions that are used (if possible)
Add version number to the name as well
Example:
- [Gatsby (v1)](https://www.gatsbyjs.org/docs/)
- [Material-UI (v5)](https://mui.com/)
-->

# Development

## Start project

```bash
yarn && yarn start
```

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Folder Structure

    .
    ├── ...
    ├── build                       # Target build folder
    ├── public                      # Override index.html and favicon.ico
    ├── src
    │   ├── assets                  # Images, videos, etc. that are imported by the components
    │   ├── components              # Structured like MUI components [https://mui.com/](https://mui.com/)
    │   │   ├── dataDisplay         # Avatars, Badges, Tables
    │   │   ├── feedback            # Toasts, Progress, Dialogs
    │   │   ├── inputs              # Buttons, Selects, TextFields, Checkboxes etc
    │   │   ├── layout              # Containers, Grids
    │   │   └── navigation          # Links, Drawers, Tabs, Steppers
    │   ├── hooks                   # Custom hooks
    │   ├── modules                 # Project specific components
    │   ├── store                   # Modular Redux: actions, reducers
    │   ├── styles                  # Theme and global styles
    │   └── utils                   # Helper functions and constants
    │
    ├── typings                     # Type definitions
    ├── .env.{environment}          # Environment specific variables
    └── ...

## Storybook

This project uses Storybook to help us develop and test components.
A Storybook is a collection of stories. Each story represents a single visual state of a component.

### Start Storybook

```
yarn storybook
```

Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

### Writing stories

Stories are kept on the same folder level as components.
To add a component to Storybook, create a new file, e.g: `ComponentName.stories.tsx`

```
// ComponentName.stories.tsx
import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import ComponentName, { ComponentNameProps } from 'path/to/ComponentName'

export default {
  title: 'Component Category/ComponentName',
  component: ComponentName,
  parameters: {
    docs: {
      description: {
        component: 'Some documentation on ComponentName',
      },
    },
  },
} as Meta

const Template: Story<ComponentNameProps> = (args) => <ComponentName {...args} />

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  variant: 'contained',
  // ...
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary',
  variant: 'outlined',
  // ...
}
```

Refer to the [Storybook Docs](https://storybook.js.org/docs/basics/introduction/) and [Learn Storybook](https://www.learnstorybook.com/) for more information.

## Plop

This project uses Plop to generate files.
It's set up to generate components, hooks and utils files.
Depending on the resource generated, the related files will be created with a basic template.

- Running plop:
```
yarn plop
```

- **Component:** When choosing to create a `component` there will options to also create:
  - **Test:** Unit test file
  - **Stories:** Storybook file
  - **Styles:** Styled components / CSS file

- **Hook / Util:** When choosing to create a `hook` or `util` there will be only an option to also generate a unit test file
  - The difference between then is the template

## Environments

<!--
List of all environments
Mark ones that are deployed with 'x', leave others empty. Remove ones that are not implemented
Make sure to add URL to the deployed app (if possible)
-->

- [ ] [Development](https://dev.portal.com)
- [ ] [Staging](https://stg.portal.com)
- [ ] [QA](https://qa.portal.com)
- [ ] [Production](https://portal.com)

## API

<!--
General API information (if any) + endpoints for each environment
-->

- [ ] Development - https://api.dev.portal.com
- [ ] Staging - https://api.stg.portal.com
- [ ] QA - https://api.qa.portal.com
- [ ] Production - https://api.portal.com

## Deployment

<!--
Steps to follow to deploy changes...
Example:
- Add and push new tag
- Wait until [CircleCI](here_goes_CircleCI_link) build is successfully completed
- Approve deployment to QA environment in [Workflows](link_to_project_workflow)
- Wait for QA team to approve deployment to Production
- Approve deployment to Production

...or general information about deployment process
Example:
Deployment is handled by client DevOps team
-->

# Things to note

<!--
Important notes about this project
Examples:
- Backend for this project is provided by client
- Early development stage, only mock API for now
- Login details are saved in Lastpass under PROJECT_NAME category
- Make sure you keep version of _LIBRARY_NAME_ locked to avoid conflicts with _OTHER_LIBRARY_NAME_
- IP address should be whitelisted to use from outside the Roam office
-->

# Team

<!--
Who works or worked on the project
Make sure you add a role
You could also add GitHub name
-->

**Roam**

- Frontend architect
- Frontend developer
- Backend architect
- Backend developer
- DevOps
- QA
- PM

**Client**

# Useful links

<!--
Add JIRA, Confluence, Trello, etc. links here
-->
