class InvalidInputError extends Error {
  statusCode: number;
  constructor(message: string) {
    super(message);
    this.statusCode = 400;
    this.name = "InvalidInputError";
  }
}

export default InvalidInputError;
