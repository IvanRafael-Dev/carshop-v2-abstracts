export interface IService<T, M extends new (arg: T) => InstanceType<M>> {
  create(obj: T): Promise<InstanceType<M>>
  getAll(): Promise<InstanceType<M>[]>
  getById(id: string): Promise<InstanceType<M>>
  update(id: string, vehicle: T): Promise<InstanceType<M>>
}