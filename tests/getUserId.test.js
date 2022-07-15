const chai = require('chai');
const { expect } = chai;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const server = require('../api/server');

describe('Rota /api/user/userId', () => {
  describe('retorna o usuário com o ID passado', () => {
    let response;

    before(async () => {
      response = await chai
        .request(server)
        .get('/api/users/1');
    });

    it('retorna um status 400, se não for informado um token.', async () => {
      expect(response).to.have.status(400);
    });

    it('retorna um objeto com a chave "message".', async () => {
      expect(response.body).to.be.an('object').with.keys('message');
    });

    it('retorna um objeto com a messagem "Token não encontrado ou informado".', async () => {
      expect(response.body.message).to.be.equals('Token não encontrado ou informado');
    });
  });
});