let resultado = document.getElementById('resultado').innerHTML = 0;

        let dividir = () => {
            let primerNumero = document.getElementById('primer-numero').value;
            let segundoNumero = document.getElementById('segundo-numero').value;
            let suma = Number(primerNumero) / Number(segundoNumero);
            document.getElementById('resultado').innerHTML = suma;
        }
        let multiplicar = () => {
            let primerNumero = document.getElementById('primer-numero').value;
            let segundoNumero = document.getElementById('segundo-numero').value;
            let suma = Number(primerNumero) * Number(segundoNumero);
            document.getElementById('resultado').innerHTML = suma;
        }
        let restar = () => {
            let primerNumero = document.getElementById('primer-numero').value;
            let segundoNumero = document.getElementById('segundo-numero').value;
            let suma = primerNumero - segundoNumero ;
            document.getElementById('resultado').innerHTML = suma;
        }
        let sumar = () => {
            let primerNumero = document.getElementById('primer-numero').value;
            let segundoNumero = document.getElementById('segundo-numero').value;
            let suma = Number(primerNumero) + Number(segundoNumero);
            document.getElementById('resultado').innerHTML = suma;
        }
