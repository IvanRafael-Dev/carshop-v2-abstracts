/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-promise-executor-return */
import { Model } from '../../interfaces/ModelInterface';

type TestType = {
  testString: string,
  testNumber: number,
};

export default class TestModelType implements Model<TestType> {
  create = async (obj: TestType): Promise<TestType> =>
    new Promise<TestType>((resolve) => {
      const testObject: TestType = {
        testString: obj.testString,
        testNumber: 1000,
      };
      return resolve(testObject);
    });

  read = async (): Promise<TestType[]> =>
    new Promise<TestType[]>((resolve) => {
      const testObject1: TestType = {
        testString: 'test1',
        testNumber: 1,
      };

      const testObject2: TestType = {
        testString: 'test2',
        testNumber: 2,
      };

      return resolve([testObject1, testObject2]);
    });

  readOne = async (_id_: string): Promise<TestType | null> =>
    new Promise<TestType>((resolve) => {
      const testObject: TestType = {
        testString: 'test',
        testNumber: 1000,
      };
      return resolve(testObject);
    });

  update = async (_id_: string, obj: TestType): Promise<TestType | null> =>
    new Promise<TestType>((resolve) => {
      const testObject: TestType = {
        testString: obj.testString,
        testNumber: 100,
      };
      return resolve(testObject);
    });

  delete = async (_id_: string): Promise<TestType | null> =>
    new Promise<TestType>((resolve) => {
      const testObject: TestType = {
        testString: 'test',
        testNumber: 10,
      };
      return resolve(testObject);
    });
}
