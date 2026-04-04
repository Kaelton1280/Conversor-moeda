# Conversor de Moedas

Projeto simples de conversão de moedas em JavaScript, HTML e CSS.

## Descrição

Este projeto permite converter valores entre diferentes moedas usando uma API de câmbio em tempo real.

O usuário informa o valor, a moeda de origem e a moeda de destino, e o aplicativo busca a taxa de câmbio para calcular o resultado.

## Funcionalidades

- Conversão entre várias moedas:
  - Dólar Americano (USD)
  - Euro (EUR)
  - Libra Esterlina (GBP)
  - Iene Japonês (JPY)
  - Real Brasileiro (BRL)
  - Peso Argentino (ARS)
  - Dólar Canadense (CAD)
  - Franco Suíço (CHF)
  - Yuan Chinês (CNY)
  - Dólar Australiano (AUD)
- Interface responsiva e moderna
- Indicador de carregamento enquanto a cotação é buscada
- Exibição de tax rate e resultado formatado

## Tecnologias

- HTML
- CSS
- JavaScript

## Como usar

1. Abra o arquivo `index.html` em um navegador.
2. Digite o valor que deseja converter.
3. Selecione a moeda de origem e a moeda de destino.
4. Clique em `Converter`.
5. O resultado aparecerá automaticamente e a taxa de câmbio utilizada será exibida.

## Estrutura de arquivos

- `index.html` - marcação da página
- `style.css` - estilos visuais e layout
- `script.js` - lógica de conversão e integração com API

## Observações

- O projeto usa a API `https://api.exchangerate-api.com/v4/latest/` para busca de taxas de câmbio.
- Caso ocorra erro na chamada da API, uma mensagem será exibida informando que a conversão falhou.

## Autor

Desenvolvido por [Kaelton-Dev](https://github.com/Kaelton1280)
