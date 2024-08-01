import { fireEvent, render, screen } from "@testing-library/react";
import Home from "./index";

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });
});

describe("When a page is created", () => {
  it("a list of events is displayed", async () => {
    render(<Home />);
    const eventsSection = screen.getByRole("heading", {
      name: /nos réalisations/i,
    });
    expect(eventsSection).toBeInTheDocument();
  });

  it("a list of people is displayed", async () => {
    render(<Home />);
    await screen.findByText("Samira");
    await screen.findByText("Jean-baptiste");
    await screen.findByText("Alice");
    await screen.findByText("Luís");
    await screen.findByText("Christine");
    await screen.findByText("Isabelle");
  });

  it("a footer is displayed", async () => {
    render(<Home />);
    expect(screen.getByText("Notre derniére prestation")).toBeInTheDocument();
    expect(screen.getByText("Contactez-nous")).toBeInTheDocument();
    expect(
      screen.getByText(
        /Une agence événementielle propose des prestations de service spécialisées/i
      )
    ).toBeInTheDocument();
  });
});
