//Задание 1

function compareArrays(arr1, arr2) {
  let result = true;

  // Ваш код
  if (arr1.lenght != arr2.lenght) {
    return false; // Массивы разной длины не равны
  }
  // Цикл по всем элементам
  for (let i = 0; i < arr1.length; i++) {
    // Если хоть один элемент отличается, массивы не равны
    if (arr1[i] !== arr2[i]) {
      return false;
    } 
    
  }

  return result; // boolean
}

//Задание 2

function advancedFilter(arr) {
  let resultArr;

  // Ваш код

  return resultArr; // array
}
