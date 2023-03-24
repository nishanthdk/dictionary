import React from "react";

import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import WordDetails from "../WordDetails";
const mockResult: any = {
  word: "example",
  phonetics: [{ text: "/ɪɡˈzɑːmpl/", audio: "https://example.com" }],
  meanings: [
    {
      partOfSpeech: "noun",
      definitions: [
        {
          definition:
            "a thing characteristic of its kind or illustrating a general rule.",
        },
      ],
      synonyms: ["sample", "instance", "illustration"],
    },
  ],
};

describe("WordDetails component", () => {
  test("should render the word and its details", () => {
    render(<WordDetails result={mockResult} />);

    const word = screen.getByText(/example/i);
    const partOfSpeech = screen.getByText(/noun/i);
    const phonetics = screen.getByText(/\/ɪɡˈzɑːmpl\//i);
    const audioButton = screen.getByText(/play audio/i);
    const meaning = screen.getByText(
      /a thing characteristic of its kind or illustrating a general rule./i
    );
    const synonyms = screen.getByText(/sample/i);

    expect(word).toBeInTheDocument();
    expect(partOfSpeech).toBeInTheDocument();
    expect(phonetics).toBeInTheDocument();
    expect(audioButton).toBeInTheDocument();
    expect(meaning).toBeInTheDocument();
    expect(synonyms).toBeInTheDocument();
  });

  test("should call playAudio function when audio button is clicked", () => {
    render(<WordDetails result={mockResult} />);
    const audioButton = screen.getByText(/play audio/i);

    const spy = jest.spyOn(global, "Audio").mockImplementation(() => {
      return {
        play: jest.fn() as any,
      };
    });

    fireEvent.click(audioButton);
    expect(spy).toHaveBeenCalled();

    spy.mockRestore();
  });
});
