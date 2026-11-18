
  <script>
        let operation = "";

        function chooseOperation(operator) {
            operation = operator;
            document.getElementById("result").textContent =
                "Selected: " + operator;
        }

        function calculate() {
            const first = document.getElementById("number1").value;
            const second = document.getElementById("number2").value;
            const result = document.getElementById("result");

            if (first === "" || second === "" || operation === "") {
                result.textContent = "Enter two numbers and choose an operation.";
                return;
            }

            const a = Number(first);
            const b = Number(second);
            let answer;

            switch (operation) {
                case "+":
                    answer = a + b;
                    break;
                case "-":
                    answer = a - b;
                    break;
                case "*":
                    answer = a * b;
                    break;
                case "/":
                    if (b === 0) {
                        result.textContent = "Cannot divide by zero.";
                        return;
                    }
                    answer = a / b;
                    break;
            }

            result.textContent = "Result: " + answer;
        }
    </script>