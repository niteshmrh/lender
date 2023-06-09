const {LenderRepository} = require("../repository/index");

class LenderService {
    constructor() {
        this.lenderService = new LenderRepository()    
    }
    async getAllLender() {
        try {
            const lender = await this.lenderService.getAllLender();
            return lender;
        } catch (error) {
            console.log("something went wrong in the lender service");
            throw error;
        }
    }

}

module.exports = LenderService;