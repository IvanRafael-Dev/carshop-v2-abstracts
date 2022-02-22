import TestModel from './utils/TestModel';
import TestModelType from './utils/TestModelType';

describe('Interface Model', () => {
  it('Existe a interface Model', () => {
    const testModel = new TestModel();
    expect(testModel).toBeInstanceOf(TestModel);
  });

  it('Existe a função create', async () => {
    const testModel = new TestModel();
    const num = 1000;
    const create = await testModel.create(num);
    expect(create).toEqual(num);
  });

  it('Existe a função read', async () => {
    const testModel = new TestModel();
    const read = await testModel.read();
    expect(read).toEqual([1, 2, 3]);
  });

  it('Existe a função readOne', async () => {
    const testModel = new TestModel();
    const readOne = await testModel.readOne('test');
    expect(readOne).toEqual(1);
  });

  it('Existe a função update', async () => {
    const testModel = new TestModel();
    const num = 1000;
    const update = await testModel.update('test', num);
    expect(update).toEqual(num);
  });

  it('Existe a função delete', async () => {
    const testModel = new TestModel();
    const del = await testModel.delete('test');
    expect(del).toEqual(1);
  });

  it('A interface Model possui tipagem genérica', () => {
    const testModelType = new TestModelType();
    expect(testModelType).toBeInstanceOf(TestModelType);
  });
});
