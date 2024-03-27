import {
  URL_API,
  ACCESS_KEY,
  REDIRECT_URI,
  RESPONSE_TYPE,
  SCOPE,
} from './const';

export const url = new URL(URL_API);

url.searchParams.append('client_id', ACCESS_KEY);
url.searchParams.append('redirect_uri', REDIRECT_URI);
url.searchParams.append('response_type', RESPONSE_TYPE);
url.searchParams.append('scope', SCOPE);
