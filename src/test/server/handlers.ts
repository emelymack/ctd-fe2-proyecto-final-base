import { rest } from 'msw';
import { API_URL } from '../../app/constants';
import { mockResponse, mockResponseHomerSimpson } from '../mocks/mocks';

export const handlers = [ 
  rest.get(`${API_URL}`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(mockResponse)
    )
  }),
  rest.get(`${API_URL}?character=Homer Simpson`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(mockResponseHomerSimpson)
    )
  }),
  rest.get(`${API_URL}?character=123`, (req, res, ctx) => {
    return res(
      ctx.status(400),
      ctx.text("El nombre debe ser un texto"),
    );
  })
]