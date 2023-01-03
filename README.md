# Gluon Examples

Various Gluon example apps.

## Examples

- [Gluworld](/apps/gluworld): Hello World demo app with version info shown
- [Gludoom](/apps/gludoom): Doom running as WASM, made into a native looking app with Gluon
- [Glucord](/apps/glucord): minimal desktop Discord client loading official webapp (demo/example)

## Usage

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/docs/install)

> We reccomend using [Volta](https://volta.sh/) to manage your Node.js and Yarn versions.

<details>
<summary>Using Volta</summary>

```bash
$ volta install node@19
$ volta install yarn@latest
```

</details>

### Installation

```bash
$ yarn install
```

### Testing

```bash
$ yarn start
```

This will ask you to select an example to run.

```ansi
? Which example do you want to run? (Use arrow keys)
❯ glucord
  gludoom
  gluworld
```

### Development

To create a new example app, run the following command:

```bash
$ yarn new
```

This will ask you for the name of the example app. The name should be in `kebab-case`. For example, `gluworld` or `glucord`.
