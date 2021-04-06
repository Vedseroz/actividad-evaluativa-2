/*variables*/
let formulario:any=document.getElementById("formulario");
let mensaje:any=document.getElementById("mensaje");
let fieldset:any=document.getElementById("fieldset");

/*boton submit*/
formulario.addEventListener("submit",function(evento){
    evento.preventDefault();
    let flag;
    /*verificacion del formulario*/
    flag=verificar1(formulario);
    flag=verificar2(formulario);
    flag=verificar3(formulario);
    flag=verificar4(formulario);
    /*verificacion del numero*/
    flag=verificarNumero(formulario[4].value);
    /*se verifica el rut*/
    flag=verificarRut(formulario[2].value);

    if(flag){
        Mensaje(mensaje,formulario,fieldset);
    }
    
    
});

/*boton de limpieza*/
 
function verificar1(formulario:any) {
        let i;
        let cont=0;
        for(i=0;i<5;i++){
            if(formulario[i].value!=""){
                cont++;
            }
        }
        if(cont==5){
            return true;
        }
        else{
            alert("hay campos sin llenar");
            return false;
        }
}

function verificar2(formulario:any){
        let i;
        let flag=false;
        for (i = 5; i < 10; i++) {
            if(formulario[i].checked==true){
                flag=true;
            }
        } 
        
        if(flag==true){
            alert("campos 2 llenado");
            return true;
        }
        else{
            alert("falta llenar campos");
            return false;
        }
        
}

function verificar3(formulario:any){
        let i;
        let flag = false;
        for (i = 12; i < 16; i++) {
            if (formulario[i].checked == true) {
            flag = true;
            }
        }

        if (flag == true) {
            alert("campo 3 llenado");
        }
        else {
            alert("falta llenar campos");
            return false;
        }

}

function verificar4(formulario:any){
        if(formulario[17].value.length<=0){
            alert("por favor, ingrese todos los datos");
            return false;
        }

        if(formulario[17].value.length>300){
            alert("solo deben ser 300 caracteres");
            return false;
        }
        else{
            return true;
        }
        
    }


function verificarNumero(numero:any) {
        if(numero.length<9){
            alert("el numero debe tener 9 digitos");
            return false;
        } 
        if(numero.length>9){
            alert("el numero debe tener 9 digitos");
            return false;
        }
        else{
            return true;
        }
}

function verificarRut(rut:any) {
    /*19924656-9*/
     let numero = parseInt(rut.slice(0,8));
     let digito = rut.slice(9).toUpperCase();
     let flag = false;
        /*si el rut es inferior a 10 digitos*/
        if(rut.length<10){
            alert("Rut incorrecto. deber tener el formato 12345678-9");
            return false; 
        }

    /*comprobar si los digitos del numero son solo numeros*/
        if(isNaN(numero)==false){
            flag=true;
        }
    /*comprobar el digito verificador*/
        if(isNaN(parseInt(digito))==false){
            flag=true;
        }
        else if(digito!="K"){
            flag=false;
        }

        if(flag==false){
        alert("Error, ingrese el RUT nuevamente.")
        return false;
        }

        if(flag){
            return true;
        }

}

function Mensaje(mensaje:any,formulario:any,fieldset:any){
        mensaje.innerHTML="Hemos recibido sus datos, pronto nos estaremos comunicando con usted."
        mensaje.style.display="block";
        formulario.style.display="none";
        fieldset.style.display="none";       
}

function limpiarDatos(){
        formulario[0].value="";
        formulario[1].value="";
        formulario[2].value="";
        formulario[3].value="";
        formulario[4].value="";
        formulario[5].checked=false;
        formulario[6].checked=false;
        formulario[7].checked=false;
        formulario[8].checked=false;
        formulario[9].checked=false;
        formulario[10].checked=false;
        formulario[11].value=50;
        formulario[12].checked=false;
        formulario[13].checked=false;
        formulario[14].checked=false;
        formulario[15].checked=false;
        formulario[16].checked=false;
        formulario[17].checked=false;
        formulario[18].value="";
        alert("Datos limpiados");
}