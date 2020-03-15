import db from '@/firebase/init'
import { vuexfireMutations, firestoreAction } from 'vuexfire'

export const firebaseActions = {
  bindArticles: firestoreAction(({ bindFirestoreRef }) => {
    return bindFirestoreRef('articles', db.collection('articles'))
  }),
  bindFaqs: firestoreAction(({ bindFirestoreRef }) => {
    return bindFirestoreRef('faqs', db.collection('faqs'))
  })
}

export const firebaseMutations = {
  ...vuexfireMutations
}
