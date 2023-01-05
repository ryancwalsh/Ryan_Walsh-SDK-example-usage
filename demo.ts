// Run via `npx ts-node demo.ts`.

import * as dotenv from 'dotenv';
import { movie, movieQuote } from 'ryan_walsh-sdk';

// see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config({ override: true, path: `.env.local` });

const API_KEY = process.env.API_KEY ?? '';

function display(json: unknown) {
  // eslint-disable-next-line no-console
  console.log(JSON.stringify(json, null, 2));
}

async function main() {
  const movieJson = await movie({
    apiKey: API_KEY,
    filters: ['budgetInMillions<250'],
    limit: 3,
    page: 1,
    sortDirection: 'desc',
    sortKey: 'budgetInMillions',
  });

  display(movieJson);

  const movieIdJson = await movie({
    apiKey: API_KEY,
    id: '5cd95395de30eff6ebccde5b',
    // filters: [],
    // limit: 3,
    // page: 1,
    // sortDirection: 'desc',
    // sortKey: 'budgetInMillions',
  });

  display(movieIdJson);

  const movieQuoteJson = await movieQuote({
    apiKey: API_KEY,
    filters: [],
    id: '5cd95395de30eff6ebccde5b',
    limit: 3,
    page: 1,
    sortDirection: 'asc',
    sortKey: 'dialog',
  });

  display(movieQuoteJson);
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
main();
