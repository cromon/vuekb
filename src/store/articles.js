export default [
  {
    id: '1',
    subject: 'Knowledgebase',
    title: 'What are Articles?',
    content: `
      Articles must have a subject, title and content. Content can contain <b>html</b> and will be <i>rendered</i> as <u>such</u>
      <br><br>
      <h4 class="title is-5">The Schema is as follows</h4>
      <pre>
article: {
  id: UUID | Integer,
  subject: String,
  title: String,
  content: String | HTML
}
      </pre>
    `
  },
  {
    id: '2',
    subject: 'Knowledgebase',
    title: 'What are Subjects?',
    content: `
      Subjects are a simple way of organising your Articles into easily navigateble headers.
      <br>
      Subjects are listed on the left hand menu and will display all articles under that Subject when clicked. They also serve as headers / sections for related content
    `
  },
  {
    id: '3',
    subject: 'Datastores',
    title: 'Datastore options',
    content: `Kbvue is setup to easily switch between 3 different datastores: Firebase, API and Vuex (static information like in this example)`
  },
  {
    id: '4',
    subject: 'FAQs',
    title: 'What are FAQs?',
    content: `FAQs are quick question and answers, used for frequent and easy to explain queries.`
  },
  {
    id: '5',
    subject: 'Search',
    title: 'Search?',
    content: `The search function is not implemented yet, there are many options for a search process, choose one and implement it - There should be a simple version implemented in the future though.`
  },
  {
    id: '6',
    subject: 'Config',
    title: 'Global Config',
    content: `Some extra content...`
  },
  { id: '7', subject: 'Recordings', title: 'Recordings can have articles too', content: `Some recordings content...` },
  { id: '8', subject: 'Companies', title: 'Company articles are nice', content: `Some companies content...` }
]
