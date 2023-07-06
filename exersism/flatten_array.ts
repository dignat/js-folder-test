const array = [0, 2, [[2, 3], 8, 100, 4, [[[50]]]], -2]


const flatten_array = (array:any): any => {
   return array.flat().map((item: any ) => {
        if (!Array.isArray(item)) {
            return item;
        }
       
       flatten_array(item)
       
    }).filter((el: any) => el !== null).flat()
}

console.log(flatten_array(array))