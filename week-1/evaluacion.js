
const urls = [
    'https://goaxil.com/collections/ear-buds/products/gs-electronic.js',
    'https://therollingstonesshop.com/products/americana-tongue-unisex-black-t-shirt.js',
    'https://offhours.co/collections/shop-all/products/affogato-1.js',
    'https://www.danskin.com/products/calming-slip-on-sneaker.js',
    'https://www.url.fail/expected-error.js',
    ];

    
function dataUrls(url){
    return fetch(url)
    .then(response => response.json())
    .then(data => ({
        ///title, brand, images, url, id, groupId and price
        'title': data.title,
        'brand': data.brand,
        'images': data.images,
        'url': data.url,
        'id': data.id,
        'groupId': data.groupId,
        'price': data.price
    })).catch(error => ({ 'error': error.message }));
}


function getUrls(urls){
    let results = {}
    
    let fetchData = async () => {
    for (const url of urls) {
      try {
        let extractedDataUrls = await dataUrls(url)
        results[url] = [extractedDataUrls]
      } catch (error) {
        results[url] = [{ 'error': error.message }]
      }
    }
    return results
  }

  return fetchData()
}