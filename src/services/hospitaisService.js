
class HospitaisServices {
    constructor() {
        this.services = this.hospitaisServices()
    }
    hospitaisServices() {
        return {
            calculadoraHospital: () => {
                return 1 + 2
            }
        }
    }
}

module.exports = new HospitaisServices().services

