describe('Crie a Interface Vehicle genérica', () => {
  it('A Interface Vehicle existe', () => {
    expect('Vehicle/exists').toCompile();
  });

  it('A interface possui os atributos solicitados', () => {
    expect('Vehicle/attributes').toCompile();
  });
});
