

module.exports = {

      create: (req, res, next) => {
        const db = req.app.get('db');
        const {name, description, price, image_url} = req.body;
        db.create_product([name, description, price, image_url])
        .then( product => {
            res.status(200).json(product[0])})
        .catch(error => {
            console.log('error in POST /api/product', error);
        });
    },


    getOne:(req,res,next) =>{
        const database = req.app.get('db');
        let {id}=req.params;
        console.log("Ugh");
        database.read_product(id)
        .then(product => res.status(200).json(product))
        .catch(error => {
            console.log('error in getOne /api/product', error);
        })
    },


    getAll:(req, res, next) =>{
        const database = req.app.get('db');
        database.read_products()
        .then( product => res.status(200).json(product))
        .catch( error => {
            console.log('error in getAll /api/product', error);
        })
    },


    update:(req, res, next) => {
        const database = req.app.get('db');
        const {id} =req.params;
        const{desc}=req.query;
        database.update_product([id, desc])
        .then(()=> res.sendStatus(200))
        .catch(error =>{
            console.log('error in update /api/product', error);
        })
    },

    delete: (req, res, next) =>{
        const database =req.app.get('db');
        const {id} = req.params;
        database.delete_product(id)
        .then(() => res.sendStatus(200))
        .catch(error => {
            console.log('error in delete /api/product', error);
        });
    }
};