export class Users {
    constructor(last_name, first_name, id, email, avatar) {
        this.last_name = last_name
        this.first_name = first_name
        this.avatar = avatar
        this.email = email
        this.id = id
    }

    afficher() {
        return ` <div class="card">
                <div class="taille" style="background: center/contain url(${this.avatar}) ">
                </div>
                <div>
                    <h6 class="np">${this.id} ${this.last_name} </h6>
                    <h6 class="np">${this.first_name}</h6>
                    <span class="mail">${this.email}</span>
                </div>
            </div>`
    }
}
