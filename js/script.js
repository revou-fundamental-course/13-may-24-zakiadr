const alas = document.getElementById('alas')
const tinggi = document.getElementById('tinggi')
const hitung = document.getElementById('hitung')
const output = document.getElementById('output')
const reset = document.getElementById('reset')
hitung.addEventListener('click',function(){
    let a=alas.value
    let t=tinggi.value
    let l= 0.5*a*t
    output.innerHTML=`Luas segitiga dari alas ${a} cm dan tinggi ${t} cm adalah ${l} cm2`
   
})
function myFunction() {
    document.getElementById("numberform").reset();
  }


  const sisi1= document.getElementById('sisi1')
  const sisi2= document.getElementById('sisi2')
  const sisi3= document.getElementById('sisi3')
  const hitungkeliling= document.getElementById('hitungkeliling')
  const resetkeliling= document.getElementById('resetkeliling')
  const outputkeliling= document.getElementById('outputkeliling')
hitungkeliling.addEventListener('click',function(){
    let s1=sisi1.value
    let s2=sisi2.value
    let s3=sisi3.value
    let k= parseInt(s1) + parseInt(s2) + parseInt(s3)
    outputkeliling.innerHTML=`Keliling segitiga dari sisi a ${s1} cm, sisi b ${s2} dan sisi c ${s3} adalah ${k} cm2`
})

function myFunction() {
    document.getElementById("numberform").reset();
    document.getElementById("formkeliling").reset();

  }

