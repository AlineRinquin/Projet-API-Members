//https://reqres.in/api/users?page=1
import { Users } from "./Users"
const API_URL = `https://reqres.in/api/users?page=`;

const RESP = document.getElementById('resp');
const BTN1 = document.getElementById('btn1');
const BTN2 = document.getElementById('btn2');
let number = 1;

BTN2.addEventListener('click', () => {
    number = 2;
    getData()
})


BTN1.addEventListener('click', () => {
    number = 1;
    getData()
})


async function getData() {
    try {
        const response = await fetch(API_URL + number);
        const responsFormat = await response.json();
        console.log(responsFormat.total_pages);
        RESP.innerHTML = ''
        for (let i = 0; i < responsFormat.data.length; i++) {
            let user = new Users(responsFormat.data[i].last_name, responsFormat.data[i].first_name, responsFormat.data[i].id, responsFormat.data[i].email, responsFormat.data[i].avatar)

            RESP.innerHTML += user.afficher()

        }


        //     <div>
        //     <img src="" alt="">
        //     <div>
        //         <h6>Nom</h6>
        //         <span>mail</span>
        //     </div>
        // </div>
        // <img class="vign" src=${responsFormat.data[i].avatar} alt="">


    } catch (err) {
        console.error(err);
    }
}

getData()