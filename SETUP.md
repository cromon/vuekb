# SETUP Vuekb

## Config

The main kb config file is in ```/src/kb.config.js```

In this file you can change whether to display Articles, FAQs and choose a datastore.

It looks like this:

```js
const config = {
  articleContent: true,
  datastore: 'vuex', // 'firebase', 'api', 'vuex'
  faqContent: true,
  // firebase: {
  //   projectId: 'firestore-name'
  // }
}
```


### Datastores

#### Using static Vuex

The default setup is to use a static vuex datastore.

If you change to 'firebase' or 'api', you may want to comment out the following lines in ```/src/store/index.js``` to stop unneccesary imports. You could optionally also delete the sources ```/src/store/articles.js``` and ```/src/store/faqs.js```

```js
// default vuex datastore
import articles from './articles'
import faqs from './faqs'
```

#### Using Firebase

To use firebase as a datastore first setup the config file to use 'firebase' and add the firebase projectId to the config object.

Currently there is no admin interface for adding Articles and FAQs, so you would manually add them in the Firebase console for the time being, this may change in the future.

#### Using a custom API

To use a custom API server as a datastore first setup the config file to use 'api'.

Then setup your API base in the ```api.js``` file

```js
const API_URL = 'http://dev.test:4567'
const ADMIN_URL = 'http://dev.test:4567/admin'
```

