import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { LineOfBusiness } from './LineOfBusiness';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const linesOfBusiness: LineOfBusiness[] = [
      {
        id: 11,
        name: 'General Liability',
        description: 'Liability coverage for businesses.',
        quotes: [],
      },
      {
        id: 12,
        name: 'Commercial Property',
        description: 'Property coverage for businesses.',
        quotes: [],
      },
      {
        id: 13,
        name: 'Inland Marine',
        description: 'Coverage for tools and machinery on job sites.',
        quotes: [],
      },
      {
        id: 14,
        name: 'Ocean Marine',
        description: 'Coverage for dock and boat repair businesses.',
        quotes: [],
      },
      {
        id: 15,
        name: 'Garage',
        description: 'Coverage for auto repairs and car sales.',
        quotes: [],
      },
    ];

    const recentQuotes = [
      { id: 101, quoteNumber: 'AC123PC', lineOfBusiness: 11 },
      { id: 102, quoteNumber: 'AC124PC', lineOfBusiness: 12 },
      { id: 103, quoteNumber: 'AC125PC', lineOfBusiness: 13 },
      { id: 104, quoteNumber: 'AC126PC', lineOfBusiness: 14 },
      { id: 105, quoteNumber: 'AC127PC', lineOfBusiness: 15 },
      { id: 106, quoteNumber: 'AC125PC', lineOfBusiness: 13 },
      { id: 107, quoteNumber: 'AC126PC', lineOfBusiness: 13 },
      { id: 108, quoteNumber: 'AC127PC', lineOfBusiness: 15 },
    ];

    // populate quotes field on each lineOfBusiness object
    recentQuotes.forEach((quote) => {
      const lineOfBusinessIndex = linesOfBusiness.findIndex(
        (b) => b.id === quote.lineOfBusiness
      );
      if (lineOfBusinessIndex > -1) {
        linesOfBusiness[lineOfBusinessIndex].quotes.push(quote);
      }
    });

    return { linesOfBusiness };
  }

  // Overrides the genId method to ensure that a line of business always has an id.
  // If the lines of business array is empty,
  // the method below returns the initial number (11).
  // if the lines of business array is not empty, the method below returns the highest
  // line of business id + 1.
  genId(linesOfBusiness: LineOfBusiness[]): number {
    return linesOfBusiness.length > 0
      ? Math.max(
          ...linesOfBusiness.map((lineOfBusiness) => lineOfBusiness.id)
        ) + 1
      : 11;
  }
}
