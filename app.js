

import axios from "axios"

const getData = async function (number) {
    const { data: users } = await axios(`https://jsonplaceholder.typicode.com/users/${number}`)

    const { data: posts } = await axios(`https://jsonplaceholder.typicode.com/posts?id=${number}`)
    console.log(users)
    console.log(posts)
    const total = { users, "posts": posts }
    console.log(total)
}

export default getData;


