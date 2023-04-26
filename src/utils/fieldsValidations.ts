export const isRequired = (field: string) => {
  const result = { statusCode: 400, info: { message: `"${field}" is required` } };
  return result;
};

export const a = 'a';