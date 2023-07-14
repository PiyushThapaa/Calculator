let screen = "";
let a = document.querySelectorAll(".num1");
Array.from(a).forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.innerHTML === "C") {
      document.getElementById("display").value = screen;
    } else if (e.target.innerHTML === "=") {
      try {
        if (document.getElementById("display").value.endsWith("/0")) {
            throw 'Undefined';
        }
        let isequal = eval(document.getElementById("display").value);
        document.getElementById("display").value = isequal;
      } catch (err) { 
        if (document.getElementById("display").value.endsWith("/0")) {
            document.getElementById("display").value = err;
        }
        else{
            document.getElementById("display").value = 'Syntax Error';
        }
      }
    } else if (e.target.innerHTML === "Del") {
      let x = document.getElementById("display").value;
      x = x.slice(0, -1);
      document.getElementById("display").value = x;
    } else {
      document.getElementById("display").value += e.target.innerHTML;
    }
  });
});