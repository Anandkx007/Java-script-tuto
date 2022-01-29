function add(){
        console.log(arguments.length); // will print length of arguments
        console.log(arguments);// will print all arguments.
        console.log(arguments[1]); /// print 7

        if(arguments.length == 0)
        {
            console.log("No arguments passed !")
        }
        else{
            let sum=0;
            for(let i=0; i<arguments.length; i++)
            {
                sum = sum + arguments[i];
            }
            console.log(sum);
        }
    
}
add();
add(5,7);
add(1,2,3);