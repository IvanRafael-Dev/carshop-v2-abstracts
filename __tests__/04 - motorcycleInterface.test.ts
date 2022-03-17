describe('Crie o tipo Motorcycle a partir da Interface Vehicle', () => {
  it('O tipo Motorcycle estende a Interface Vehicle', () => {
    expect('Motorcycles/vehicleInterface').toCompile();
  });

  it('É possível criar um objeto do tipo Motorcycle', () => {
    expect('Motorcycles/ok').toCompile();
  })

  it('O tipo Motorcycle possui as propriedades category e engineCapacity', () => {
    expect('Motorcycles/category').notToCompile();
    expect('Motorcycles/engineCapacity').notToCompile();
  });

  it('Não é possível criar um objeto do tipo Motorcycle com uma categoria errada', () => {
    expect('Motorcycles/wrongCategory').notToCompile();
    expect('Motorcycles/correctCategory').toCompile();
  });
});
