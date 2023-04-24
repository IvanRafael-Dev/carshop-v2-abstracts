export interface IModel<T> {
  create(obj: T): Promise<T>
  getAll(): Promise<T[]>
  getById(id: string): Promise<T>
  update(id: string, vehicle: T): Promise<T>
}