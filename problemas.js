function problema1() {
    const edadInput = document.getElementById("edad");
    const edad = parseInt(edadInput.value);
    let resultado = "";

    if (isNaN(edad) || edad < 0) {
        resultado = "Por favor, ingresa una edad válida.";
    } else if (edad >= 18) {
        resultado = "Puedes votar";
    } else {
        resultado = "No puedes votar";
    }

    document.getElementById("resultado").innerText = resultado;
}

function calcularSueldo() {
    let horas = parseFloat(document.getElementById("horas").value);
    let pagoHora = parseFloat(document.getElementById("pago").value);
    let sueldo = 0;

    if (isNaN(horas) || isNaN(pagoHora)) {
        document.getElementById("resultado").innerText = "Ingrese valores válidos.";
        return;
    }

    if (horas <= 40) {
        sueldo = horas * pagoHora;
    } else {
        let horasNormales = 40;
        let horasExtra = horas - 40;
        sueldo = (horasNormales * pagoHora) + (horasExtra * pagoHora * 2);
    }

    document.getElementById("resultado").innerText = "Sueldo semanal: $" + sueldo.toFixed(2);
};

function determinarRegalo() {
    let dinero = parseFloat(document.getElementById("dinero").value);
    let resultado = "";

    if (isNaN(dinero) || dinero < 0) {
        resultado = "Por favor, ingrese una cantidad válida.";
    } else if (dinero <= 10) {
        resultado = "Puedes comprar una tarjeta.";
    } else if (dinero <= 100) {
        resultado = "Puedes comprar chocolates.";
    } else if (dinero <= 250) {
        resultado = "Puedes comprar flores.";
    } else {
        resultado = "Puedes comprar un anillo.";
    }

    document.getElementById("resultado").innerText = resultado;
};

function calcularPago() {
    let horas = parseInt(document.getElementById("horas").value);
    let total = 0;

    if (isNaN(horas) || horas <= 0) {
        document.getElementById("resultado").innerText = "Por favor, ingrese un número válido de horas.";
        return;
    }

    if (horas <= 2) {
        total = horas * 5;
    } else if (horas <= 5) {
        total = (2 * 5) + ((horas - 2) * 4);
    } else if (horas <= 10) {
        total = (2 * 5) + (3 * 4) + ((horas - 5) * 3);
    } else {
        total = (2 * 5) + (3 * 4) + (5 * 3) + ((horas - 10) * 2);
    }

    document.getElementById("resultado").innerText = "Total a pagar: $" + total.toFixed(2);
};

function encontrarMenor() {
    let nombre1 = document.getElementById("nombre1").value;
    let edad1 = parseInt(document.getElementById("edad1").value);

    let nombre2 = document.getElementById("nombre2").value;
    let edad2 = parseInt(document.getElementById("edad2").value);

    let nombre3 = document.getElementById("nombre3").value;
    let edad3 = parseInt(document.getElementById("edad3").value);

    if (
        !nombre1 || isNaN(edad1) ||
        !nombre2 || isNaN(edad2) ||
        !nombre3 || isNaN(edad3)
    ) {
        document.getElementById("resultado").innerText = "Por favor, complete todos los campos correctamente.";
        return;
    }

    let menorNombre = nombre1;
    let menorEdad = edad1;

    if (edad2 < menorEdad) {
        menorEdad = edad2;
        menorNombre = nombre2;
    }

    if (edad3 < menorEdad) {
        menorEdad = edad3;
        menorNombre = nombre3;
    }

    document.getElementById("resultado").innerText =
        `La persona más joven es ${menorNombre} con ${menorEdad} años.`;
};

function calcularDescuento() {
    let precio = parseFloat(document.getElementById("precio").value);
    let descuento = 0;
    let total = 0;

    if (isNaN(precio) || precio <= 0) {
        document.getElementById("resultado").innerText = "Ingrese un precio válido.";
        return;
    }

    if (precio >= 200) {
        descuento = 0.15;
    } else if (precio > 100 && precio < 200) {
        descuento = 0.12;
    } else {
        descuento = 0.10;
    }

    let montoDescuento = precio * descuento;
    total = precio - montoDescuento;

    document.getElementById("resultado").innerText = 
        `Descuento aplicado: ${descuento * 100}%\n` +
        `Monto del descuento: $${montoDescuento.toFixed(2)}\n` +
        `Total a pagar: $${total.toFixed(2)}`;
};

function calcularBeca() {
    let edad = parseInt(document.getElementById("edad").value);
    let promedio = parseFloat(document.getElementById("promedio").value);
    let resultado = "";

    if (isNaN(edad) || isNaN(promedio) || edad < 0 || promedio < 0 || promedio > 10) {
        resultado = "Ingrese datos válidos.";
    } else if (edad > 18) {
        if (promedio >= 9) {
            resultado = "Beca asignada: $2000.00";
        } else if (promedio >= 7.5) {
            resultado = "Beca asignada: $1000.00";
        } else if (promedio >= 6.0) {
            resultado = " Beca asignada: $500.00";
        } else {
            resultado = "Se enviará una carta de invitación a estudiar más.";
        }
    } else {
        if (promedio >= 9) {
            resultado = "Beca asignada: $3000.00";
        } else if (promedio >= 8) {
            resultado = "Beca asignada: $2000.00";
        } else if (promedio >= 6) {
            resultado = "Beca asignada: $100.00";
        } else {
            resultado = "Se enviará una carta de invitación a estudiar más.";
        }
    }

    document.getElementById("resultado").innerText = resultado;
};

function calcularBono() {
    let sueldo = parseFloat(document.getElementById("sueldo").value);
    let antiguedad = parseInt(document.getElementById("antiguedad").value);

    if (isNaN(sueldo) || isNaN(antiguedad) || sueldo <= 0 || antiguedad < 0) {
        document.getElementById("resultado").innerText = "Ingrese datos válidos.";
        return;
    }

    let bonoAntiguedad = 0;
    if (antiguedad > 2 && antiguedad < 5) {
        bonoAntiguedad = sueldo * 0.20;
    } else if (antiguedad >= 5) {
        bonoAntiguedad = sueldo * 0.30;
    }

    let bonoSueldo = 0;
    if (sueldo < 1000) {
        bonoSueldo = sueldo * 0.25;
    } else if (sueldo <= 3500) {
        bonoSueldo = sueldo * 0.15;
    } else {
        bonoSueldo = sueldo * 0.10;
    }

    let bonoFinal = Math.max(bonoAntiguedad, bonoSueldo);

    document.getElementById("resultado").innerText =
        `Bono por antigüedad: $${bonoAntiguedad.toFixed(2)}\n` +
        `Bono por sueldo: $${bonoSueldo.toFixed(2)}\n\n` +
        `Bono asignado (el mayor): $${bonoFinal.toFixed(2)}`;
};

function calcularCosto() {
    let tipo = document.getElementById("tipoPoliza").value;
    let bebe = document.getElementById("bebe").checked;
    let lentes = document.getElementById("lentes").checked;
    let enfermedad = document.getElementById("enfermedad").checked;
    let edad = parseInt(document.getElementById("edad").value);

    if (isNaN(edad) || edad <= 0) {
        document.getElementById("resultado").innerText = "Ingrese una edad válida.";
        return;
    }

    // Costo base según tipo de póliza
    let costoBase = (tipo === "A") ? 1200 : 950;
    let recargo = 0;

    if (bebe) recargo += 0.10;
    if (lentes) recargo += 0.05;
    if (enfermedad) recargo += 0.05;
    recargo += (edad > 40) ? 0.20 : 0.10;

    let total = costoBase + (costoBase * recargo);

    document.getElementById("resultado").innerText = 
        `Costo total de la póliza: $${total.toFixed(2)} (Tipo ${tipo})`;
};

function determinarDestino() {
    let dinero = parseFloat(document.getElementById("dinero").value);
    let costoKm = parseFloat(document.getElementById("costoKm").value);
    let resultado = "";

    if (isNaN(dinero) || isNaN(costoKm) || dinero <= 0 || costoKm <= 0) {
        resultado = "Ingrese valores válidos.";
    } else {
        // Distancias ida y vuelta
        const destinos = {
            "México": 750 * 2,
            "P.V.": 800 * 2,
            "Acapulco": 1200 * 2,
            "Cancún": 1800 * 2
        };

        let disponibles = [];

        for (let destino in destinos) {
            let costoViaje = destinos[destino] * costoKm;
            if (dinero >= costoViaje) {
                disponibles.push(`${destino} ($${costoViaje.toFixed(2)})`);
            }
        }

        if (disponibles.length > 0) {
            resultado = `Puedes viajar a:\n- ${disponibles.join("\n- ")}`;
        } else {
            resultado = "No alcanza para viajar, deberás quedarte en casa.";
        }
    }

    document.getElementById("resultado").innerText = resultado;
};

function calcularBonoAntiguedad() {
    const años = parseInt(document.getElementById("antiguedad").value);
    let bono = 0;

    if (isNaN(años) || años < 0) {
        document.getElementById("resultado").innerText = "Ingrese un número válido de años.";
        return;
    }

    if (años >= 1 && años <= 5) {
        bono = años * 100;
    } else if (años > 5) {
        bono = 1000;
    } else {
        bono = 0;
    }

    document.getElementById("resultado").innerText = 
        `Bono por ${años} año(s) de antigüedad: $${bono}`;
};

function calcularSueldoSemanal() {
    const horas = parseInt(document.getElementById("horas").value);
    const pagoHora = parseFloat(document.getElementById("pagoHora").value);
    let sueldo = 0;

    if (isNaN(horas) || isNaN(pagoHora) || horas < 0 || pagoHora < 0) {
        document.getElementById("resultado").innerText = "Ingrese valores válidos.";
        return;
    }

    if (horas > 50) {
        document.getElementById("resultado").innerText = "No está permitido trabajar más de 50 horas.";
        return;
    }

    if (horas <= 40) {
        sueldo = horas * pagoHora;
    } else if (horas <= 45) {
        sueldo = (40 * pagoHora) + ((horas - 40) * pagoHora * 2);
    } else {
        sueldo = (40 * pagoHora) + (5 * pagoHora * 2) + ((horas - 45) * pagoHora * 3);
    }

    document.getElementById("resultado").innerText =
        `Sueldo semanal: $${sueldo.toFixed(2)}`;
};

function calcularPasaje() {
    const alumnos = parseInt(document.getElementById("alumnos").value);
    let costoPorAlumno = 0;

    if (isNaN(alumnos) || alumnos < 1) {
        document.getElementById("resultado").innerText = "Ingresa una cantidad válida de alumnos.";
        return;
    }

    if (alumnos > 100) {
        costoPorAlumno = 20;
    } else if (alumnos >= 50 && alumnos <= 100) {
        costoPorAlumno = 35;
    } else if (alumnos >= 20 && alumnos <= 49) {
        costoPorAlumno = 40;
    } else {
        costoPorAlumno = 70;
    }

    const costoTotal = costoPorAlumno * alumnos;

    document.getElementById("resultado").innerText = 
        `Costo por alumno: $${costoPorAlumno} \nCosto total del viaje: $${costoTotal}`;
};









