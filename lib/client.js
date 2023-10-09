import sanityClient from '@sanity/client';
//import { SanityClient, createClient } from '@sanity/client';
// import ImageUrlBuilder  from "next-sanity-image";

import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'k88pipn3',
  dataset: 'production',
  apiVersion: '2023-09-14',
  useCdn: true,
  token: 'skgVBLljhyKo3ggChHJbne52E1GxEIxeQF4B4VnuQS0kT1Pd8eap4nMjZyBddTcjl5GPwcOPiYwR1T5GyuMPQqgwyMe89xvzVKJFCeOxnLG9AVHLz9cQkFBJJyMT5zkHfDDGAP1N8KjqqoNpkeEa9QlTrmu7FtsXkuukyJxP0KT2TXwB1ZaV'
});

//export const urlFor = (source) => builder.image(source);

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}