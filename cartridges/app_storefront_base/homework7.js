
/**
 * This a function gets product by a given ID '008884304016' for exsample 
 * @param {string} ID - product ID
 *
 * @return {Object} product - The product with this id
 */
 function getProductByID(id) {
    const ProductMgr = require('dw/catalog/ProductMgr');
    const pid = id
    const product = ProductMgr.getProduct(pid)
    
    return product;
}



/**
 * This a function gets product category by given product '008884304016' for exsample 
 * @param {string} ID - product ID
 *
 * @return {Object} categories - list of the categories of the product with this id
 */
 function getCategoriesByProductID(id) {  
    const pid = id
    const ProductMgr = require('dw/catalog/ProductMgr');
    const product = ProductMgr.getProduct(pid)
    const categories = product.categories
    
    return categories;
}

/**
 * This a function gets different product prices for a given product - '008884304016' for exsample 
 * @param {string} ID - product ID
 *
 * @return {Object} prices - list with the different types of prices of the product with this id
 */
 function getPricesByProductID(id) {  
    const ProductMgr = require('dw/catalog/ProductMgr');
    const product = ProductMgr.getProduct(id)
    const prices = product.priceModel

    return prices;
}

Create a function to get catalog main categories

/**
 * This a function gets the catalog main category - '008884304016' for exsample 
 * @param {string} ID - catalog ID
 *
 * @return {Object} main category 
 */
 function getPricesByProductID(id) {  
    const CatalogMgr = require('dw/catalog/CatalogMgr');
    const catalog = CatalogMgr. getCatalog('electronics-catalog')
    const main = catalog.root // + .subCategories if  the main categories in the root are needed 

return main;

/**
 * This a function gets customer by ID sample: '29eb73c4754169afb97996baa3'
 * @param {string} UUID - userID
 *
 * @return {Object} customer - The custumer with this id
 * 
 * 
 */
function getCustomerByUUID(id) {
    const CustomerMgr = require('dw/customer/CustomerMgr');
    const userID = id
    const customer = CustomerMgr.queryProfile(
        'UUID = {0}',
        userID,	
    );

    return customer;
}

