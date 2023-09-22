document.addEventListener("DOMContentLoaded", event => {

    const app = firebase.app()
    console.log("bro ", app)

    const db = firebase.firestore()
    const productsRef = db.collection('posts')

    const query = productsRef.where('price', '>', 10)

    query.get().then(products => {
        console.log('products ', products)
        products.forEach(doc => {
            console.log('doc ', doc)
            data = doc.data()
            document.write(`${data.name} at ${data.price}\n`)
            document.write("<br></br>")
        })
    })

    // const myPost = db.collection("posts").doc('firstpost')
    // const myPost2 = db.collection("posts").doc('firstpost')

    // myPost2.onSnapshot(doc => {
    //     const data = doc.data()
    //     document.querySelector('#title').innerHTML = data.title
    // })

    query.get().then(products => {
        products.forEach(doc => {
            data = doc.data()
            document.write(`${data.name} at ${data.price}`)
        })
    })
})

function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider()

    firebase.auth().signInWithPopup(provider).then(result => {
        const user = result.user
        document.write(`Hello ${user.displayName}`)
        console.log(user)
    }).catch(console.log)
}

function updatePost(e) {
    const db = firebase.firestore()
    const myPost = db.collection('posts').doc('firstpost')
    myPost.update({ title: e.target.value })
}