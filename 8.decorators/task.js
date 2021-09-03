function cachingDecoratorNew(func) {
	let cache = [];

function wrapper(...args) {
    const hash = args.join(','); // получаем правильный хэш
    let idx = cache.findIndex((item)=> hash === item.hash); // ищем элемент, хэш которого равен нашему хэшу
    
    if (idx !== -1 ) { // если элемент не найден
        console.log("Из кэша: " + cache[idx].value); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
        return "Из кэша: " + cache[idx].value;
    } else {
        let result = func(...args); // в кэше результата нет - придётся считать
        cache.push({hash, value: result}) ; // добавляем элемент с правильной структурой
        if (cache.length > 5) { 
          cache.shift() ; // если слишком много элементов в кэше надо удалить самый старый (первый) 
        }
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;  
    }
}
return wrapper;
  
}


function debounceDecoratorNew(func, ms) {

	let timeout = false;

    function wrapper(...args) {
        if (timeout) return;
        func.apply(this, args);
        timeout = true;
        setTimeout(() => timeout = false, ms);
    };

    return wrapper;
}

function debounceDecorator2(func, ms) {

    let timeout = false;

    function wrapper(...args) {

        wrapper.count.push(args);
        return func.call(this, ...args);
        if (timeout) return;
        func.apply(this, args);
        timeout = true;
        setTimeout(() => timeout = false, ms);
    };

        wrapper.count = [];
        return wrapper;
}
