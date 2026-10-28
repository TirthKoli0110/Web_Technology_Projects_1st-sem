<!DOCTYPE html>
<html>
<head>
    <title>Arithmetic Operations</title>

    <style>
        body {
            font-family: Arial;
            background-color: lightblue;
            text-align: center;
            margin-top: 50px;
        }

        .box {
            background-color: white;
            padding: 25px;
            margin: auto;
            width: 350px;
            border-radius: 10px;
        }

        input, button {
            padding: 10px;
            margin: 8px;
        }

        button {
            background-color: darkblue;
            color: white;
            border: none;
            cursor: pointer;
        }

        h2 {
            color: darkblue;
        }
    </style>
</head>

<body>

    <div class="box">
        <h2>Arithmetic Operations</h2>

        <input type="number" id="n1" placeholder="Enter first number">
        <br>

        <input type="number" id="n2" placeholder="Enter second number">
        <br>

        <button onclick="calculate()">Calculate</button>

        <h3 id="result"></h3>
    </div>

    <script>
        function calculate() {
            let a = Number(document.getElementById("n1").value);
            let b = Number(document.getElementById("n2").value);

            let sum = a + b;
            let difference = a - b;
            let product = a * b;

            let division = b !== 0 ? a / b : "Undefined";

            document.getElementById("result").innerHTML =
                "Addition: " + sum + "<br>" +
                "Subtraction: " + difference + "<br>" +
                "Multiplication: " + product + "<br>" +
                "Division: " + division;
        }
    </script>

</body>
</html>