const data = require('../seeds/data');

class indexController {
    static async index(req, res, next) {
        const data_test = data;
        res.render('index', { title: 'Express', data_test });
    }
}

module.exports = indexController;