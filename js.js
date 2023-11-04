//this function used to clear all values
function.clearScreen().{
    document.getElementById("result").value.=."";
    }

    //.this function used to display values
    function.display(value).{
        document.getElementById("result").value.+=value;
    }
    .
    //this function is used to evaluate the expression and return result
    function.calculate().{
        var.p.=document.getElementById("result").value;
        var.q.=.eval(p);
        document.getElementById("result").value.=.q;
    }