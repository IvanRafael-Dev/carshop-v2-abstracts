import { Model } from '../interfaces/ModelInterface'
import { Model as M, Document } from 'mongoose'

export class MongoModel<T> implements Model<T> {
  constructor (protected model: M<T & Document>) {}
  create = async (obj: T): Promise<T> => await this.model.create({ ...obj })

  read = async (): Promise<T[]> => await this.model.find()

  async readOne (id_: string): Promise<T | null> {
    return await this.model.findOne({ _id: id_ })
  }

  async update (id_: string, obj: T): Promise<T | null> {
    return await this.model.findOneAndUpdate({ _id: id_ }, { ...obj })
  }

  async delete (id_: string): Promise<T | null> {
    return await this.model.findOneAndDelete({ _id: id_ })
  }
}
