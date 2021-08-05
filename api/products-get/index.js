const data = require('../shared/product-data'); //해당 주소에 있는 데이터 액세스 논리.

module.exports = async function (context, req) {
  try {
    const products = data.getProducts();
    context.res.status(200).json(products);
  } catch (error) {
    context.res.status(500).send(error);
  }
};
//성공할 경우 함수는 제품을 가져오고, 상태 코드 200과 함께 반환함. 