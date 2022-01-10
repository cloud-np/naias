
// const getLatestPosts = () => {
//   return fetch(
//     "https://www.instagram.com/graphql/query/?query_hash=8c2a529969ee035a5063f2fc8602a0fd&variables={"id":"2269921375","first":12}"
//   )
//     .then(response => response.json())
//     .then(data => data.data.user)
//     .then(data => data.edge_owner_to_timeline_media.edges)
//     .then(data => {
//       const posts = data.map(({ node }) => {
//         return {
import p1 from '../static/instagram/1.jpg'
import p2 from '../static/instagram/2.jpg'
import p3 from '../static/instagram/3.jpg'
import p4 from '../static/instagram/4.jpg'
import p5 from '../static/instagram/5.jpg'
import p6 from '../static/instagram/6.jpg'
import p7 from '../static/instagram/7.jpg'
import p8 from '../static/instagram/8.jpg'
import p9 from '../static/instagram/9.jpg'
import p10 from '../static/instagram/10.jpg'
import p11 from '../static/instagram/11.jpg'
import p12 from '../static/instagram/12.jpg'

const examplePosts = [
        {'photo': p8, 'url': "https://www.instagram.com/p/CMCBIpwKVwV/", 'alt': "Σκυλάκι ντυμένο" },
        {'photo': p6, 'url': "https://www.instagram.com/p/CUVjqT9o_eh/", 'alt': "Ελένη Φουρέιρα" },
        {'photo': p5, 'url': "https://www.instagram.com/p/CVJSSboI6Y6/", 'alt': "Εκκλησάκι το βράδυ" },
        {'photo': p2, 'url': "https://www.instagram.com/p/CXn1sQ2qxtd/", 'alt': "Στολισμός εκκλησίας" },
        {'photo': p3, 'url': "https://www.instagram.com/p/CWG8AJfKL3M/", 'alt': "Colaz από στολισμούς" },
        {'photo': p4, 'url': "https://www.instagram.com/p/CVvyHkeIseA/", 'alt': "Παροναμική photo με drone" },
        {'photo': p7, 'url': "https://www.instagram.com/p/CTFYpmvoZmp/", 'alt': "Στολισμός εκκλησάκι" },
        {'photo': p1, 'url': "https://www.instagram.com/p/CYKi_XhK20M/", 'alt': "new years cupcakes" },
        {'photo': p9, 'url': "https://www.instagram.com/p/CRuVXlBrgC4/", 'alt': "Ζευγάρι ανεβάινει σκαλιά εκκλησίας" },
        {'photo': p10, 'url': "https://www.instagram.com/p/CR-8Fp3olTj/", 'alt': "Νεόνυμφοι χέρι χέρι" },
        {'photo': p11, 'url': "https://www.instagram.com/p/CVYcKc2onYV/", 'alt': "Εκκλησία μυστήριο με κόσμο" },
        {'photo': p12, 'url': "https://www.instagram.com/p/CV8hr-DIcxx/", 'alt': "Στολισμός βιβλίου ευχών" },
]

export default examplePosts 
