export const createError = (status, message) => {
  // createing error using the status code and message
  const err = new Error();
  err.status = status;
  err.message = message;
  return err;
};
