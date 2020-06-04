
class AuthServices {
    constructor() {
        [this.user, this.password] = ['admin', 'admin']
        this.services = this.authServices()
    }
    authServices() {
        return {
            login: (user, password) => {
                console.log(this.user, this.password)
                if (user == this.user && password == this.password) {
                    const id = 1
                    return id
                }
                return -1
            }
        }
    }
}

module.exports = new AuthServices().services