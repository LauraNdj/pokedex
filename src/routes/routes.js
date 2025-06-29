export const ROUTES = Object.freeze({
    HOME: '/',
    DETAILS: (id = ":id") => `/pokemon/${id}`,
    NOT_FOUND: '*',
  });
  