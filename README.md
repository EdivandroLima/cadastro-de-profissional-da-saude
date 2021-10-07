# Cadastro de Profissional da Saúde (médico)
Demonstração do projeto online: [Clique aqui](http://cadastro-de-profissional-da-saude.epizy.com/)

## Páginas
O Cadastro é composto por 4 páginas

### Página 1 - Sobre o profissional
A Página 1 é composta por 5 campos
1. O campo “Nome completo” deve ser validado para ter de 3 a 48 caracteres.
2. O campo “CPF” deve ser validado como um CPF. Esse campo só deve aceitar
números. E deve seguir o formato 000.000.000-00, exemplo: 239.681.080-43.
3. O campo “Número de celular” deve aceitar só números, e deve ter 11 dígitos. E deve seguir o formato (00) 0 0000-0000, exemplo: (51) 9 2253-8347.
4. O campo “Estado” deve ter as seguintes opções: Paraná, Rio Grande do Sul e Santa Catarina.
5. O campo “Cidade” deve ter as seguintes opções, para cada estado:
    - Paraná: Londrina e Maring
    - Rio Grande do Sul: Pelotas e Porto Alegre
    - Santa Catarina: Florianópolis e Joinville

### Página 2 - Sobre o atendimento
A Página 2 é composta por 4 campos.
1. O campo “Especialidade principal” deve conter as seguintes opções, na mesma ordem: Cardiologia, Dermatologia, Neurologia, Oftalmologia, Psiquiatria e Urologia.
2. O campo “Informe o preço da consulta” deve aceitar valores entre 30,00 e 350,00. E só deve aceitar números e vírgula.
3. O campo “Formas de pagamento da consulta” deve aceitar mais de uma seleção (checkbox). Exemplo: é possível selecionar “Em dinheiro” e “Pix”.
4. A opção “Cartão de crédito”, do campo “formas de pagamento da consulta”, deve abrir (mostrar) outras opções. Essas novas opções de Parcelamento só devem aparecer quando a opção de “Cartão de crédito” for selecionada, e quando a opção de parcelamento aparecer é obrigatório selecionar uma opção de parcelamento.

### Página 3 - Revisão do cadastro
A Página 3 é feita a revisão dos dados, onde deve ser mostrado todos os dados
informados pelo usuários.
1. Devem ser mostrados todos os dados informados pelo usuário.
2. Ao clicar em “CADASTRAR PROFISSIONAL” o usuário deve ser levado para a
Página 4;
3. Ao clicar em “Editar cadastro” deve voltar para a Página 1.

### Página 4 - Conclusão do Cadastro
A página 4 mostra uma mensagem dizendo que o registro foi concluído com sucesso.

## Protótipo
- [Desktop](prototipo/desktop)
- [Mobile](prototipo/mobile)

## Frameworks
- Vue.js v2
- Bootstrap v5.1

## Dependências
- [Bootstrap](https://www.npmjs.com/package/bootstrap)
- [VueRouter](https://www.npmjs.com/package/vue-router)
- [Vuex](https://www.npmjs.com/package/vuex)
- [VueMeta](https://www.npmjs.com/package/vue-meta)
- [VueMask](https://www.npmjs.com/package/v-mask)
- [Vuelidate](https://www.npmjs.com/package/vuelidate)

## Comandos utilizados
```
$ vue create cadastro-de-profissional-da-saude
$ npm install bootstrap
$ npm install vue-router
$ npm install vue
$ npm install vue-meta
$ npm install v-mask
$ npm install vuelidate
```

## Instalando dependências 
``` $ npm install ```

## Levantando server com reload em localhost:8080
``` $ npm run serve ```

### Build para produção
``` $ npm run build ```

## Desenvolvedor
- **Edivandro Lima:** https://github.com/EdivandroLima
- **Linkedin:** https://www.linkedin.com/in/edivandro-lima/

## Info
Esse projeto foi totalmente elaborado pela empresa *** para um teste de desenvolvimento com Vue.js

