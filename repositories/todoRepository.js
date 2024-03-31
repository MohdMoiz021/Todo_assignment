const Product = require('../models/Todo');

const post = payload => {
    const product = new Product(payload);
    return product.save();
};

const get = (options) => {
    const {currentPage,size,status} = options;
    
    let pageToSkip = (currentPage-1) * size;
    const filter = getFilterExp(status);

    return Product
        .find(filter,{__v : 0})
        .skip(pageToSkip)
        .limit(size)
};







// const toDo= require('../models/userModel')

// const create=paylaod=>{

// }