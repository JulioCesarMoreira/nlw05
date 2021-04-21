Projeto do NLW05 da ROCKET SEAT
JULIO CESAR PAES MOREIRA ra:18016723

obrigado prof.Zico S2

PARA RODAR ESSE PROJETO LOCALMENTE DE INSTALAR AS SEGUINTES TECNOLOGIAS
{
    nodejs
    npm OU yarn
    postman OU insominia (PARA EFETUAR AS REQUISIÇÕES)
}

COMANDO PARA BAIXAR TODAS AS DEPENDENCIAS DO PROJETO
npm intall OU yarn

COMANDO PARA RODAR O LIGAR O SERVIDOR
npm run dev OU yarn dev

COMANDO PARA RODAR A MIGRATION DOS USERS
npm run typeorm migrations:run

para consultar todos os registros armazenados no banco SQLITE3 indico usar o programa BEEKEEPER STUDIO e selecionar o arquivo database.sqlite


SEGUE OS CURL DAS REQUISIÇÕES PARA EFETUAR O CRUD COMPLETO DOS USERS DO SISTEMA

CREATE USER

curl --location --request POST 'http://localhost:3010/users' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Julio Teste1",
    "email": "julio@teste2.com"
}'

READ USER
curl --location --request GET 'http://localhost:3010/users' \
--header 'Content-Type: application/json' \
--data-raw '{
    "id": "2d867ac6-564a-4b8c-b98b-8ae5a0899ec7"
}'

UPDATE USER
curl --location --request PUT 'http://localhost:3010/users' \
--header 'Content-Type: application/json' \
--data-raw '{
    "id": "2d867ac6-564a-4b8c-b98b-8ae5a0899ec7",
    "new_name": "Julio Teste1Modif",
    "new_email": "julio@testeModif.com"
}'

DELETE USER
curl --location --request DELETE 'http://localhost:3010/users' \
--header 'Content-Type: application/json' \
--data-raw '{
    "id": "2d867ac6-564a-4b8c-b98b-8ae5a0899ec7"
}'