
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

const examplePosts = [
        {'img': 'https://instagram.fath6-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/270696618_3119863698282931_3870878895675125668_n.jpg?_nc_ht=instagram.fath6-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=Mka53Cwoe74AX8YsKs2&edm=AP_V10EBAAAA&ccb=7-4&oh=00_AT-FYiuOaIOt1DUjmap9HligwvSOCWCFJD4ndGZepchfZw&oe=61E12B47&_nc_sid=4f375e', 'url': "https://www.instagram.com/p/CYKi_XhK20M/" },
        {'img': 'https://instagram.fath6-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/269340023_162276466101933_6918610955366488536_n.jpg?_nc_ht=instagram.fath6-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=E86Wm7_cbJcAX9XXPXw&edm=AABBvjUBAAAA&ccb=7-4&oh=00_AT948159SBU-B2mLP-0VOIh-M4_9NUfhBeiS9_8uZZRhyw&oe=61E1C3BA&_nc_sid=83d603', 'url': "https://www.instagram.com/p/CXn1sQ2qxtd/" },
        {'img': 'https://instagram.fath6-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/255046952_317245206530828_5751439780701630736_n.jpg?_nc_ht=instagram.fath6-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=lLuXCK0uxYIAX_wmmUt&edm=AABBvjUBAAAA&ccb=7-4&oh=00_AT9eTMCNSAPaz9Aau5pMUgyQ1x-zi6Gj43jHFxOcfGTvQA&oe=61E2D001&_nc_sid=83d604', 'url': "https://www.instagram.com/p/CWG8AJfKL3M/" },
        {'img': 'https://instagram.fath6-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/250650447_389073919629087_8641451961804980264_n.jpg?_nc_ht=instagram.fath6-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=n3-CQWTHxqUAX8VmxVc&tn=TdY0VNqwNkIajpOB&edm=AABBvjUBAAAA&ccb=7-4&oh=00_AT9EcIa2yQz73VIpzhyiFM_tJEnxMrMWiM1SruC608NFpA&oe=61E2C1CD&_nc_sid=83d603', 'url': "https://www.instagram.com/p/CVvyHkeIseA/" },
        {'img': 'https://instagram.fath6-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/246035046_677421246552277_1892481109952422151_n.jpg?_nc_ht=instagram.fath6-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=KxcOZZTuKvAAX9WWRdE&edm=AABBvjUBAAAA&ccb=7-4&oh=00_AT_I4fd2ebuoUpEl9IwXi_khO9CCWQVMFQSa-3GKUQWpkQ&oe=61E28DAA&_nc_sid=83d603', 'url': "https://www.instagram.com/p/CVJSSboI6Y6/" },
        {'img': 'https://instagram.fath6-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/243259243_547135419722268_4418358454999506233_n.jpg?_nc_ht=instagram.fath6-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=J1fbTGyvQckAX-VlZ5T&tn=TdY0VNqwNkIajpOB&edm=AABBvjUBAAAA&ccb=7-4&oh=00_AT_5n2LSxfl2DdaVVqaMtwYVEW00fvQiIcA3bptoiP-1ng&oe=61E25C73&_nc_sid=83d603', 'url': "https://www.instagram.com/p/CUVjqT9o_eh/" },
        {'img': 'https://instagram.fath6-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/240628859_528860361520869_5927677228600317041_n.jpg?_nc_ht=instagram.fath6-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=O7IjpnPYnk8AX_IF7kL&tn=TdY0VNqwNkIajpOB&edm=AABBvjUBAAAA&ccb=7-4&oh=00_AT_Jho37ftGPdWYqNU1onsJWkFimM_JpfW5BMn7Qh_Ibvw&oe=61E1402F&_nc_sid=83d603', 'url': "https://www.instagram.com/p/CTFYpmvoZmp/" },
        {'img': 'https://instagram.fath6-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/156463249_3945554908824097_6097758414104346961_n.jpg?_nc_ht=instagram.fath6-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=Mvi6L5aTsacAX9W6efS&edm=AABBvjUBAAAA&ccb=7-4&oh=00_AT9BzsP4LmW5qq9Kc1bdGn3lhp79BmMLEEuuCAcBsG5aCw&oe=61E2A12F&_nc_sid=83d603', 'url': "https://www.instagram.com/p/CMCBIpwKVwV/" },
        {'img': 'https://instagram.fath6-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/221931291_356317739340969_4679678319152012702_n.jpg?_nc_ht=instagram.fath6-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=j9t4bDUiC2IAX9vgCxj&edm=AABBvjUBAAAA&ccb=7-4&oh=00_AT_TPkDUJ62JzbV5qGNtPj5fHbSqoyp2gPITnM6zoSAyPw&oe=61E2F862&_nc_sid=83d603', 'url': "https://www.instagram.com/p/CRuVXlBrgC4/" },
        {'img': 'https://instagram.fath6-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/221931291_356317739340969_4679678319152012702_n.jpg?_nc_ht=instagram.fath6-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=j9t4bDUiC2IAX9vgCxj&edm=AABBvjUBAAAA&ccb=7-4&oh=00_AT_TPkDUJ62JzbV5qGNtPj5fHbSqoyp2gPITnM6zoSAyPw&oe=61E2F862&_nc_sid=83d603', 'url': "https://www.instagram.com/p/CRuVXlBrgC4/" },
        {'img': 'https://instagram.fath6-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/227723488_1262946420841894_3910323601113857953_n.jpg?_nc_ht=instagram.fath6-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=jcHxpR5BUpQAX940aYI&tn=TdY0VNqwNkIajpOB&edm=AABBvjUBAAAA&ccb=7-4&oh=00_AT-dx1rvk8-iyonA1z9JY7GEOjeWHftLxgqQfulPIZoXxA&oe=61E2C5D9&_nc_sid=83d603', 'url': "https://www.instagram.com/p/CR-8Fp3olTj/" },
        {'img': 'https://instagram.fath6-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/247708196_356422462893538_8522449606760965931_n.jpg?_nc_ht=instagram.fath6-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=xa8pkbJylnwAX9g2DRO&edm=AABBvjUBAAAA&ccb=7-4&oh=00_AT_o9fNk00QzhMb4LWlAabg3oKN3lfHBjSw0sOA9bs1S_Q&oe=61E1D3B1&_nc_sid=83d603', 'url': "https://www.instagram.com/p/CVYcKc2onYV/" },
]

export default examplePosts 
