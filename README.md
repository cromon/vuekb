# VueKb

A customisable Knowledgebase app in Vuejs.

Using Vue and Buefy (Bulma) for component styling. With options for using Firebase or a custom API datastore.

## Config

You can find a config file (kb.config.js) in the root of the src directory. It is also imported as a global mixin to make options available in the app as computed properties.

| Name | Description | Type | Values | Default |
|---|---|---|---|---|
| articleContent | Will you be providing Articles? | Boolean  | true / false | true |
| faqContent | Will you be providing FAQs? | Boolean  | true / false | true |
| datastore | What kind of datastore will you be using | String | firebase / api / vuex / json | firebase |

### Datastore

Depending on what option you select (from 3 currently available) different actions will be loaded into the Vuex store.

#### Firebase (default)

Allows you to setup and use a Firebase realtime database for populating your vuex store with data.

#### API

Allows you to configure an external or same host API service for populating your vuex store with data.

#### Vuex

Allows you to use hard-coded data in your app, directly stored in the state variable in the vuex store.

#### JSON

TODO: write spec for using JSON imports as data store.

## Articles

An article is assumed to have the following schema, you are welcome to change this, but it is less hassle if you use the pre-defined schema.

```json
article: {
  id: UUID | Integer,
  subject: String,
  title: String,
  content: String | HTML
}
```
## FAQs

An FAQ is assumed to have the following schema, you are welcome to change this, but it is less hassle if you use the pre-defined schema.

```json
faq: {
  id: UUID | Integer,
  question: String,
  answer: String
}
```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Donate

If you use this app, please consider making a donation to keep the project alive.

- [Donate via Paypal](https://paypal.me/vuekb)
- [Donate via Bitcoin](https://i.imgur.com/xicPYkR.png) `15mUcgU8Qzk22dU9ueP7S2MifGFDUxYsxD`
- [Donate via Dash](https://i.imgur.com/3eqMolV.png) `XiFn1LsnJQCyDDQyCbsLXA6RExECNbk2H9`
- [Donate via Doge](https://i.imgur.com/mVr4dXO.png) `DTv2cCVh1wSVGFUZjS568txX7oZn3WPQLh`

# License

MIT © [Cromon LTD](https://github.com/cromon)
