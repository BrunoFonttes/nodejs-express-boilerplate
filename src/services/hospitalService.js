
class HospitalService {
    constructor() {
        this.services = this.hospitalServices()
    }
    hospitalServices() {
        return {
            calculadoraHospital: () => {
                return 1 + 2
            }
        }
    }
}

module.exports = new HospitalService().services

