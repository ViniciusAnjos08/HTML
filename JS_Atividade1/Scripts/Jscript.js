/*Alterar Cor de Fundo*/

const obj_sel_fundo = document.querySelector('#sel_fundo')
const obj_div_cor_fundo = document.querySelector('#div_cor_fundo')



obj_sel_fundo.addEventListener('change', FunMudaCorFundo)


function FunMudaCorFundo(){
    obj_div_cor_fundo.setAttribute('class',obj_sel_fundo.value)
}


/*Alterar Cor da Fonte*/


const array_rb_fonte = document.querySelectorAll('[name="rb_fonte"]')
const obj_div_area_teste = document.querySelector('#div_area_teste')


for (obj_rb_fonte of array_rb_fonte) {
    obj_rb_fonte.addEventListener('click', FunMudaCorFonte)
}


function FunMudaCorFonte(){
    for (obj_rb_fonte of array_rb_fonte) {
        if (obj_rb_fonte.checked){
            obj_div_area_teste.classList.add(obj_rb_fonte.value)
        }
        else{
            obj_div_area_teste.classList.remove(obj_rb_fonte.value)
        }
    }
}


/*Decorar com Linha no Meio e Borda*/

const obj_cb_linha_meio = document.querySelector('#cb_linha_meio')
const obj_cb_borda = document.querySelector('#cb_borda')


obj_cb_linha_meio.addEventListener('click', FunLinhaMeio)
obj_cb_borda.addEventListener('click', FunBorda)


function FunLinhaMeio(){
    if (obj_cb_linha_meio.checked){
        obj_div_area_teste.classList.add(obj_cb_linha_meio.value)
    }
    else {
        obj_div_area_teste.classList.remove(obj_cb_linha_meio.value)
    }
}


function FunBorda(){
    if(obj_cb_borda.checked){
        obj_div_area_teste.classList.add(obj_cb_borda.value)
    }
    else{
        obj_div_area_teste.classList.remove(obj_cb_borda.value)
    }
}




/* Trocar o Texto */

const obj_txt_texto_novo = document.querySelector('#txt_texto_novo')
const obj_bt_troca_texto = document.querySelector('#bt_troca_texto')

obj_bt_troca_texto.addEventListener('click', FunTrocaTexto)

function FunTrocaTexto(){
    if (obj_txt_texto_novo.value != ''){
        obj_div_area_teste.innerText = obj_txt_texto_novo.value

    }
    else {
        alert('Digite algo no campo!')
    }
}


/*Alterar Cor de Fundo do Cabeçalho*/

const obj_sele_fundo = document.querySelector('#sele_fundo')
const obj_cabeça = document.querySelector('#cabeça')



obj_sele_fundo.addEventListener('change', FunMudaCorFundoCabec)


function FunMudaCorFundoCabec(){
    obj_cabeça.setAttribute('class',obj_sele_fundo.value)
}

/*Alterar Imagem de Fundo*/

const obj_fundo = document.querySelector('#fundo')
const obj_img_fundo = document.querySelector('#img_fundo')


obj_fundo.addEventListener('click', FunImagemFundo)

function FunImagemFundo(){
        if (obj_fundo.checked){
            obj_img_fundo.classList.add(obj_fundo.value)
        }
        else{
            obj_img_fundo.classList.remove(obj_fundo.value)
        }
    }



/*Alterar Opacidade de Imagem*/

const obj_opacidade = document.querySelector('#opacidade')
const obj_img = document.querySelector('#img')


obj_opacidade.addEventListener('click', FunOpacidade)

function FunOpacidade(){
        if (obj_opacidade.checked){
            obj_img.classList.add(obj_opacidade.value)
        }
        else{
            obj_img.classList.remove(obj_opacidade.value)
        }
    }


/*Trocar Fonte e Texto*/



const obj_audio = document.querySelector('#Audiowide')
const obj_mono = document.querySelector('#Monoton')
const obj_troca = document.querySelector('#troca')

obj_audio.addEventListener('click', FunTrocaFonteAudiowide)
obj_mono.addEventListener('click', FunTrocaFonteMonoton)

function FunTrocaFonteAudiowide(){
        obj_troca.classList.toggle(obj_audio.value)
        obj_troca.innerText = 'Fonte: ' + obj_audio.value
    
}


function FunTrocaFonteMonoton(){
        obj_troca.classList.toggle(obj_mono.value)
        obj_troca.innerText = 'Fonte: ' + obj_mono.value
    }
