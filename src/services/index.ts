import { Model } from '../interfaces/ModelInterface';

const idLengthError = 'Id must have 24 hexadecimal characters';

abstract class Service<T> {
  constructor(protected model: Model<T>) { }

  public async create(obj: T): Promise<T | null> {
    return this.model.create(obj);
  }

  public async read() {
    return this.model.read();
  }

  public async readOne(id: string) {
    if (id.length !== 24) {
      return {
        error: idLengthError,
      };
    }
    return this.model.readOne(id);
  }

  public async update(id: string, obj: T): Promise<T | null | object> {
    if (id.length !== 24) {
      return {
        error: idLengthError,
      };
    }
    return this.model.update(id, obj);
  }

  public async delete(id: string) {
    if (id.length !== 24) {
      return {
        error: idLengthError,
      };
    }
    return this.model.delete(id);
  }
}

export default Service;
