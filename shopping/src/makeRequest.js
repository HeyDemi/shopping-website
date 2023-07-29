import axios from "axios";

const makeRequest = axios.create({
    baseURL: 'http://localhost:1337/api',
    headers: { Authorization: "bearer " + 'ed62c7970e7722172913755eca3f650dd94d583e4ec78bc14eecfa8c2fca013ea3cc5cd1f07c6049fc2f5f564cae8e01fde283aedb1ff39636637d03c6b5faf2b6bd01571f414047c5a396961e9a37c5dcb2cd49232b3c517d78ec219942e7d48f406c4d8843c6c80236942a4d93101e25c0d14510c15e75dbd6108d39525c5b'},
})

export default makeRequest