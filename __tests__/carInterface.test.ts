describe('2 - Crie a Interface Car a partir da Interface Vehicle', () => {
  it('É possível criar um carro', () => {
    expect('Cars.ok').toCompile();
  })

  // it('A interface Car estende a Interface Vehicle', () => {
  //   expect(testVehicleInterface(testCar)).toBe(true);
  // });

  it('A interface não possui as propriedades doorsQty e seatsQty', () => {
    expect('Cars.DoorsQty').notToCompile();
    expect('Cars.SeatsQty').notToCompile();
  });
});
