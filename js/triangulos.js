const a=document.getElementById("submit");
const d=document.getElementById("form");
a.addEventListener('click',(e)=>{
    let lado1=parseInt(document.getElementById("lado1").value);
    let lado2=parseInt(document.getElementById("lado2").value);
    let lado3=parseInt(document.getElementById("lado3").value);
    if(lado1 == lado2 && lado1 == lado3){
        e.preventDefault();
        let texto=`<p class="prueba">Triángulo Equilátero</p>`
      d.innerHTML=texto; 
      d.style.setProperty('position', "relative");
      d.style.setProperty('display', "flex");
      d.style.setProperty('left', "73px");
    }else if(lado1 != lado2 && lado2 != lado3 && lado3 != lado1){
        e.preventDefault();
        let texto=`<p class="prueba">Triángulo Escaleno</p>`
      d.innerHTML=texto; 
      d.style.setProperty('position', "relative");
      d.style.setProperty('display', "flex");
      d.style.setProperty('left', "73px");
    }else{
        e.preventDefault();
        let texto=`<p class="prueba">Triángulo Isóceles</p>`
      d.innerHTML=texto; 
      d.style.setProperty('position', "relative");
      d.style.setProperty('display', "flex");
      d.style.setProperty('left', "73px");
    }
});