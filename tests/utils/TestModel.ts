/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-promise-executor-return */
import { Model } from '../../src/interfaces/ModelInterface';

export default class TestModel implements Model<number> {
  create = async (obj: number): Promise<number> =>
    new Promise<number>((resolve) => resolve(obj));

  read = async (): Promise<number[]> =>
    new Promise<number[]>((resolve) => resolve([1, 2, 3]));

  readOne = async (_id_: string): Promise<number | null> =>
    new Promise<number>((resolve) => resolve(1));

  update = async (_id_: string, obj: number): Promise<number | null> =>
    new Promise<number>((resolve) => resolve(obj));

  delete = async (_id_: string): Promise<number | null> =>
    new Promise<number>((resolve) => resolve(1));
}
