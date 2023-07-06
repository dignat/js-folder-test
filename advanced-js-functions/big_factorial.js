function factorial(n) {
    let fact = 1;

    for (let i = 2; i <= n; i++){

        if(Number.isSafeInteger(fact*i)){
            fact = fact * i;
        }
        else {
            //fact = fact + fact + .. i times
            let factxi = "0";  // this is (fact * i) for us.
            for(let j = 0; j < i; j++){
                factxi = add(factxi,fact.toString());  
            }
            fact = factxi; // update value of fact before continuing the loop.
        }
    }

    return fact;
}

function add(str1, str2) {
    var sum = "";
    var str1len = str1.length;
    var str2len = str2.length;
    if (str2len > str1len) {
        var temp_1 = str2;
        str2 = str1;
        str1 = temp_1;
    }
    var carry = 0;
    var a, b, temp, digitSum;
    for (let i = 0; i < str1.length; i++) {
        a = parseInt(str1.charAt(str1.length - 1 - i));
        b = parseInt(str2.charAt(str2.length - 1 - i));
        b = b ? b : 0;
        temp = (carry + a + b).toString();
       
        digitSum = temp.charAt(temp.length - 1);
       
        carry = parseInt(temp.substring(0, temp.length - 1));
        carry = carry ? carry : 0;
        sum = i === str1.length - 1 ? temp + sum : digitSum + sum;
    
    }
    return sum;
}
//console.log(add("5987342879234789234897", "23489072349807239487"));
console.log(factorial(25));

function multiply(x, result, size) {
    let carry = 0;

    for (let i = 0; i < size; i++) {
        let prod = result[i] * x + carry;

        result[i] = prod % 10; // store the last digit
        carry = Math.floor(prod/10); // put rest in carry
    }
        while(carry) {
            result[size] = carry%10;
            carry = Math.floor(carry/10);
            size++;
        }

        return size;
    
}
function factorial1(n)
{
    let res = new Array(500);
 
    // Initialize result
    res[0] = 1;
    let res_size = 1;
    let fact = '';
    // Apply simple factorial formula n! = 1 * 2 * 3 * 4...*n
    for (let x=2; x<=n; x++)
        res_size = multiply(x, res, res_size);

    for (let i=res_size-1; i>=0; i--) {
        fact += `${res[i]}`
        
    }
        
        console.log(fact)


}
factorial1(25)
