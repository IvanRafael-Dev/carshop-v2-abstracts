import { Request, Response } from 'express';

export type CarRequest<T> = Pick<Request<T>, 'body'>;

export type CarResponse<T> = Pick<Response<T>, 'statusCode'>;