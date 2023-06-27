import { rest } from 'msw';
import { API_URL } from '../../app/constants';

export const mockResponse = [
  {
    "quote": "Inflammable means flammable? What a country!",
    "character": "Dr. Nick",
    "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNickRiviera.png?1497567511084",
    "characterDirection": "Right"
  }
]

export const mockResponseHomerSimpson = [
  {
    "quote": "All I'm gonna use this bed for is sleeping, eating and maybe building a little fort.",
    "character": "Homer Simpson",
    "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
    "characterDirection": "Right"
  }
]

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
  })
]