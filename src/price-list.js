
let aPriceList;

export const setPriceList = (priceList) => {
  aPriceList = priceList;
};

export const getPrice = (itemId, quantity) => {

  let unitPrice;

  let turha;

  aPriceList.forEach(item => {
      if(item.itemid === itemId) {            
          item.prices.forEach(priceLevel => {
              if (priceLevel.qty <= quantity) {
                  unitPrice = aPriceList.price;
              }
          });  
      }
  });

  return quantity * unitPrice;

};

export const priceList = {
  setPriceList,
  getPrice
};

//export default const...