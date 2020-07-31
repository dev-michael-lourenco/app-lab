# COMO FUNCIONA O JWT

[What Is JWT and Why Should You Use JWT](https://www.youtube.com/watch?v=7Q17ubqLfaM)

[link interessante](https://jwt.io/)

[explicação base](https://jwt.io/introduction/)

# PARA QUE SERVE O JWT

É usado exclusivamente para AUTORIZAÇÃO ( Atuthorization )

Não é usao para AUTENTICAÇÃO (Authentication)

## DIFERENÇA ENTRE AUTENTICAÇÃO E AUTORIZAÇÃO

Um exemplo autenticação: 
    Quando o usuario vai fazer um login e utiliza email e password para entrar no perfil dele.

Um exmplo de autorização:
    Após logado, o usuário tenta realizar um cadastro ou deletar algum item em um sistema.
    Nesse caso, o sistemva verificará, através das permissões deste usuário, se ele tem ou não, autorização para realizar esta ação específica.


# O QUE É

Geralmente uma autorização fica guardada em uma sessão (session).
Uma sessão pode ser um cookie, um localStorage ou outro modo de armazenar a informação.
O JWT ( json web token) utiliza o token para armazenar esta informação.

# COMO FUNCIONA

Das formas anteriores, para cada requisição do Client é necessário fazer uma verificação no Server. Isso pode custar muito para a aplicação.
Com o JWT, a primeira vez que é feita a autenticação, o cliente recebe um jwt(token) com um segredo. Depois, quando é necessário verificar a autorização do client, basta verificar este segredo para ver se o cliente pode executar esta ação. Não é necessário verificar nada no Server

A informação da sessão fica no server
A informação do segredo/token do jwt fica no cliente

# PORQUE USAR?

É possível usar o mesmo token em aplicações/servidores diferentes.
Basta que eles tenham a mesma chave para reconhecer o token do cliente