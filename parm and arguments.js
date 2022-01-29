function Multitable (num){   // num is parameter
    for(i=1; i<11; i++ )
    {
        document.write(`${num} x ${i} = ${num*i}`);
        document.write("<br>");
    }

}
Multitable(6);  // 6 is argument


function add(num1, num2)
{
    document.write(num1 + num2);
}

add(7,5);