const request = require('supertest');
const { expect } = require('chai')
require('dotenv').config()
const { obterToken } = require('../helpers/autenticacao')

describe('Transferencias', () => {
    describe('POST/transferencias', () => {
        it('Deve Retornar sucesso 201 quando o valor da transferencia igual ou acima de R$ 10,00 ', async () => {
            // capturar o token 
            const token = await obterToken

            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send({
                    contaOrigem: 1,
                    contaDestino: 2,
                    valor: 11,
                    token: ""
                })

            expect(resposta.status).to.equal(201);
        });
        it('Deve Retornar  falha 422 quando o valor da transferencia abaixo de R$ 10,00 ', async () => {
            const token = await obterToken

            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send({
                    contaOrigem: 1,
                    contaDestino: 2,
                    valor: 2,
                    token: ""
                })
        });
    })
})