const request = require('supertest');
const server = require('../server');

describe('Testando autenticação de usuário', () => {

  it('deve retornar 401 para usuário inválido', async () => {
    const response = await request(server)
      .post('/public/login')
      .send({
        email: 'invalido@mail.com',
        senha: 123456
      });

    expect(response.status).toBe(401);
  });

  it('deve retornar 200 para usuário válido', async () => {
    const response = await request(server)
      .post('/public/login')
      .send({
        email: 'valido@mail.com',
        senha: 123456
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('access_token');
    expect(response.body).toHaveProperty('user');
  });

});
