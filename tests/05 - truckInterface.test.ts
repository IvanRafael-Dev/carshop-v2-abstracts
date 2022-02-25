describe('Crie o tipo Truck a partir da Interface Vehicle', () => {
  it('O tipo Truck estende a Interface Vehicle', () => {
    expect('Trucks/vehicleInterface').toCompile();
  });

  it('É possível criar um objeto do tipo Truck', () => {
    expect('Trucks/ok').toCompile();
  })

  it('O tipo Truck possui as propriedades category e axlesQty', () => {
    expect('Trucks/category').notToCompile();
    expect('Trucks/axlesQty').notToCompile();
  });

  it('Não é possível criar um objeto do tipo Truck com uma categoria errada', () => {
    expect('Trucks/wrongCategory').notToCompile();
    expect('Trucks/correctCategory').toCompile();
  });
});
