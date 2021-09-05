# layer 7 simples com nodejs
Esse é um script de ataque layer 7 simples, porém funcional feito com node.js.

## qual o poder disso?
Bom eu não testei quantas solicitações isso é capaz de fazer por segundo (se alguém quiser testar e fazer um pull request atualizando o README informando a capacidade, eu agradeceria.). Mas consegue fazer muitas solicitações em massa, e é capaz de parar um website normal (dinâmico) sem proteção em pouco tempo.

## uso livre, porém..
Apesar de qualquer proteção DDoS meia boca conseguir mitigar isso, então não pode ser considerado uma ameaça a qualquer website, esse script foi feito para fins educativos, ou para testar o seu website, eu não me responsabilizo por qualquer problema causado por outra pessoa que usou isso.

## como usar?
Você pode clonar esse repositório ou simplesmente baixar o attack.js, e quando for rodar, use dessa forma:
```
node attack.js <url website> <numero de threads>
```
exemplo:
```
node attack.js https://test-1.reapper.repl.co 3
```
nota: o website usado como exemplo é um que eu fiz para testar, inclusive se você quiser testar outras ferramentas de ataque nele, eu autorizo :D

## Informação desnecessária
Isso parou um website rodando no [replit](https://replit.com) em praticamente menos de 10 segundos apenas com 3 threads...

nota: atacar um site estático com isso é perda de tempo, até porque websites estáticos são difíceis de cair
