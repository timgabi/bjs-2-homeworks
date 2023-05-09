function cachingDecoratorNew(func) {
  let cache = [];
 
  function wrapper(...args) {
    const hash = (md5(args.join(',')));
    let objectInCache = cache.findIndex((item) => item.hash == hash);
    if (objectInCache in cache) {
      console.log("Из кэша: " + cache[objectInCache].value);
      return "Из кэша: " + cache[objectInCache].value;
    }
 
    let result = func(...args);
    cache.push({
      'hash': hash,
      'value': result
    });
    if (cache.length > 5) {
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
  return wrapper;
}

//Задача № 2 
function debounceDecoratorNew(func, delay) {
  let timer = null;
  function wrapper(...args) {
    if (timer === null) {
      func(...args);
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
      wrapper.count++;
    }
    wrapper.allCount++;
  }
  wrapper.count = 0;
  wrapper.allCount = 0;
  return wrapper;
}