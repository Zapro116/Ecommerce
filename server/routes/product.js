const express = require('express');
const router = express.Router();
const {
  create,
  listAll,
  remove,
  read,
  update,
  productsCount,
  list,
  productStar,
  listRelated,
  searchFilters,
} = require('../controllers/product');
const { auth } = require('../firebase');
const { authCheck, adminCheck } = require('../middlewares/auth');

router.post('/product', authCheck, adminCheck, create);
router.get('/products/total', productsCount);
router.get('/products/:count', listAll);
router.delete('/product/:slug', authCheck, adminCheck, remove);
router.get('/product/:slug', read);
router.put('/product/:slug', authCheck, adminCheck, update);

router.post('/products', list);
// rating
router.put('/product/star/:productId', authCheck, productStar);
// related
router.get('/product/related/:productId', listRelated);
// search filters
router.post('/search/filters', searchFilters);

module.exports = router;
