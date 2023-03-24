import React from 'react'



interface Phonetic {
  text: string;
  audio?: string;
}

interface Definition {
  definition: string;
  example: string;
  synonyms: string[];
  antonyms: string[];
}

interface Meaning {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: string[];
}

export interface Word {
  word: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
}

export interface WordDetailsProps {
  result: Word;
}
