import { act, cleanup, findByRole, render } from "../../test/test-utils"
import { screen } from "../../test/test-utils"
import userEvent from '@testing-library/user-event';
import Cita from "./Cita"
import { server } from "../../test/server/server";
import { rest } from "msw";
import { API_URL } from "../../app/constants";
import { mockResponse, mockResponseHomerSimpson } from "../../test/mocks/mocks";


describe("Cita", () => {
  
  beforeEach(() => {
    render(<Cita />)
  })

  afterEach(() => {
    cleanup()
  })

  it("Should render button 'Obtener cita aleatoria' and empty input by default",async () => {
    const citaRandomButton = screen.queryByRole("button", {name: 'Obtener cita aleatoria'})

    const input = screen.queryByPlaceholderText("Ingresa el nombre del autor")

    expect(citaRandomButton).toBeInTheDocument()
    expect(input).toBeEmptyDOMElement()
  })

  it("should fetch random quote when clicking button 'Obtener cita aleatoria' ", async () => {
    const citaRandomButton = await screen.findByRole("button", {name: /Obtener cita aleatoria/i})

    act(() => {
      server.use(
        rest.get(`${API_URL}`, (req, res, ctx) => {
          return res(
            ctx.status(200),
            ctx.json(mockResponse)
          );
        })
      );
      userEvent.click(citaRandomButton);
    })

    const quote = await screen.findByText("Inflammable means flammable? What a country!")
    const author = await screen.findByText("Dr. Nick")

    expect(quote).toBeInTheDocument()
    expect(author).toBeVisible()
  })
  
  it("should fetch character's quote when submitting a character name by clicking button 'Obtener cita' ", async () => {
    const citaRandomButton = await screen.findByRole("button", {name: /Obtener cita/i})

    act(() => {
      server.use(
        rest.get(`${API_URL}?character=Homer Simpson`, (req, res, ctx) => {
          return res(
            ctx.status(200),
            ctx.json(mockResponseHomerSimpson)
          );
        })
      );
      userEvent.click(citaRandomButton);
    })

    const quote = await screen.findByText("All I'm gonna use this bed for is sleeping, eating and maybe building a little fort.")
    const author = await screen.findByText("Homer Simpson")

    expect(quote).toBeInTheDocument()
    expect(author).toBeVisible()
  })

  it("should display error message when submitting numbers", async () => {
    const citaRandomButton = await screen.findByRole("button", {name: /Obtener cita/i})

    act(() => {
      server.use(
        rest.get(`${API_URL}?character=123`, (req, res, ctx) => {
          return res(
            ctx.status(400),
            ctx.text("El nombre debe ser un texto"),
          );
        })
      );
      userEvent.click(citaRandomButton);
    })

    const error = await screen.findByText("Por favor ingrese un nombre válido")

    expect(error).toBeInTheDocument()
    expect(error).toBeVisible()
  })
})

export {}