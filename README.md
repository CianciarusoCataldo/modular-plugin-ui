# modular-plugin-ui

![NPM](https://img.shields.io/npm/l/modular-plugin-ui?label=License&style=for-the-badge)
![npm](https://img.shields.io/npm/v/modular-plugin-ui?color=orange%20&label=Latest%20version&style=for-the-badge&logo=npm)
![npm bundle size](https://img.shields.io/bundlephobia/min/modular-plugin-ui?label=Package%20size&style=for-the-badge)
![Maintenance](https://img.shields.io/maintenance/yes/2025?label=Maintained&style=for-the-badge)

---

<br>

Manage ui properties with [modular-engine](https://github.com/CianciarusoCataldo/modular-engine) system

<br>

---

## Summary

- [Getting started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
- [API](#api)
  - [Config](#config)
  - [Actions](#actions)
  - [Selectors](#selectors)
- [Integration with other plugins](#integration-with-other-plugins)
- [Included libraries](#included-libraries)
- [Authors](#authors)
- [License](#license)

<br>

---

## Getting started

<br>

### Installation

Check [modular-engine guide](https://cianciarusocataldo.github.io/modular-engine/docs) to init the system

If you want to use this plugin with [modular-engine](https://github.com/CianciarusoCataldo/modular-engine), install it:

```sh
npm i modular-plugin-ui
```

<br>

### Usage

Include this plugin inside your modular-engine config file, and optionally set the `ui` field, with the plugin settings:

- `darkMode` : initial dark mode

For example:

```tsx
const localizationPlugin = require("modular-plugin-localization");

const config = {
  appName: "custom-app",
  plugins: [localizationPlugin],
  ui: {
    darkMode: true,
    onDarkModeChange: [(darkMode) => console.log("new dark mode " + darkMode)],
  },
};

module.exports = { config };
```

<br>

You can see a live preview by visiting [modular-engine-playground](https://cianciarusocataldo.github.io/modular-engine/)

---

## API

### Config

This plugin adds a custom field inside the modular-engine config, `ui`. This new field contains 1 field, to easily integrate new functions:

| Setting            | Description                                                                                                                                                    |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `onDarkModeChange` | - array of callbacks called everytime the dark-mode is enabled or disabled                                                                                     |
| `drawer`           | - enable/disable drawer management. If true, a new field will be included into the state, `isDrawerOpen`, to drive the drawer visibility with standard actions |

### Actions

| Action creator | Arguments                      | Effect                     |
| -------------- | ------------------------------ | -------------------------- |
| `setDarkMode`  | - `darkMode`: dark-mode to set | Switch dark-mode to on/off |
| `openDrawer`   | /                              | open the drawer            |
| `closeDrawer`  | /                              | close the drawer           |

<br>

Import them from this lib:

```tsx
import { setDarkMode } from "modular-plugin-ui";
```

Then dispatch them from any part of your app:

```tsx
import { setDarkMode } from "modular-plugin-ui";

import { useDispatch } from "react-redux";

export const DarkModeButton = () => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(setDarkMode(true));
      }}
    >
      Enable dark mode
    </button>
  );
};
```

<br>

### Selectors

| Selectors      | Returns                                                                       |
| -------------- | ----------------------------------------------------------------------------- |
| `getUIView`    | Ui state, or default state if not enabled                                     |
| `isInDarkMode` | Actual dark-mode status (on/off)                                              |
| `isInDarkMode` | Actual drawer visibility (always false if the `drawer` option is not enabled) |

<br>

Import them from this lib:

```tsx
import {
  getLocalizationConfig,
  getLanguage,
  getLanguages,
} from "modular-plugin-ui";
```

Then you can use them, with selectors hooks, inside your components (in this example, a [modular-ui-components](https://github.com/CianciarusoCataldo/modular-ui-components) component is used, all of them natively support dark-mode):

```tsx
import { useSelector } from "react-i18next";
import { isInDarkMode } from "modular-plugin-ui";
import { Container } from "modular-ui-components";

export const CustomComponent = () => {
  const darkMode = useSelector(isInDarkMode);

  return (
    <Container dark={darkMode}>
      <p>{`dark mode is ${darkMode ? "enabled" : "disabled"}`}</p>
    </Container>
  );
};
```

<br>

---

## Integration with other plugins

- This plugin expose some fields to work with any other plugin. If you want to interact with it, using your custom plugin, add an `interaction` for `ui` plugin:

```tsx
//Just a skeleton of a custom plugin that interacts with ui plugin
const customPlugin = () => ({
  // Custom plugin stuffs

  interactions: [
    {
      plugin: "ui",
      effect: (uiConfig) => {
        // Custom plugin stuffs

        //Add the custom callback
        uiConfig.onDarkModeChange.push(() => {
          alert("dark mode status is changed");
        });
      },
    },
  ],
});
```

<br>

- Additionally, if you use [modular-plugin-url-checker](https://github.com/CianciarusoCataldo/modular-pluginurl-checker) too, you can change the initial dark-mode status directly from URL, with query parameters, by passing the `dark` parameter with the darkMode status you want to set. Try it with [modular-engine](https://github.com/CianciarusoCataldo/modular-engine) playground (look at query parameters inside url) - https://cianciarusocataldo.github.io/modular-engine?dark=false

<br>

---

## Included libraries

- [Modular-engine-tools](https://github.com/CianciarusoCataldo/modular-engine-tools) - to easily work with modular-engine
- [Modular-utils](https://github.com/CianciarusoCataldo/modular-utils) - to use shared util functions during init process
- Modular-plugin-localization is written entirely with [Typescript](https://www.typescriptlang.org/)

<br>

---

## Authors

- [**Cataldo Cianciaruso**](https://github.com/CianciarusoCataldo)

<br>

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
