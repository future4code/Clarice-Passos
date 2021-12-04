1) a) sim

2)
a)a função cria um usuário na tabela userTableName
b) CREATE TABLE User (
	id INT PRIMARY KEY, 
    name VARCHAR(255) NULL, 
    password VARCHAR (255)
)

c) const newUser: user = { id, name, password }

    await connection('User')
      .insert(newUser)

3)
a)é necessário tipar a função

7)
a) tipagem