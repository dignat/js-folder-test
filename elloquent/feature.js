data = ['first', 'second', 'third']
const [firstDef = "f"] = data;

console.log(firstDef)
const person  = {name: "f", color: 'white', hasPet: 'no', pasword: '*****'}
// way to remove elements from object
const {pasword: _, ...personWithNoPermission} = person

console.log(personWithNoPermission)
const withMethodsTo = window.doesNotExist?.()
const andWithArrayAccessTo = window?.['nope!']

const result = {}
result?.data ?? {"error": "error message"};

