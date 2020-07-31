# PRINCÍPIOS (DICAS)
[DRY, KISS, YAGNI | Code/Drops #27](https://www.youtube.com/watch?v=5yJ_cAUrpQc)


# DRY

Don't Repeat Yourself.

ERRADO: Não repetir código.
CERTO:  Não repetir regra de negócio

Ex:
## Back-end

users{
    name 
    email
    password
}

// funções mágicas. tentar automatizar demais
CrudController(index, show, create, update, delete) 


# KISS

Keep it simple and stupid

Mantenha simples e de forma que qualquer pessoa consiga entender

Ex:

ERRADO: (não dá pra entender do que se trata)
```js
function showUserInformation(data){
    return data.map(u=>({
        name:u.name,
        age:u.age
    }))
}
```

CERTO: (fica evidente do que se trata)

```js
function getUserNameAndAge(users){
    return users.map(user=>({
        name:user.name,
        age:uer.age
    }))
}
```


# YAGNI

You ain't gona need it

Vocẽ não vai precisar disso

