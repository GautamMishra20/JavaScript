const my_numbers = [1,2,3,4,5,6,7,8,9,10]

// const new_numbers = my_numbers.map( (num) => num+10 )

const new_numbers = my_numbers
                    .map( (num) => num * 10 )
                    .map( (num) => num + 1 )
                    .filter( (num) => num >= 40 )
console.log(new_numbers);