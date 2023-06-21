class NotMyCardError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotMyCardError';
    this.statusCode = 403;
  }
}

module.exports = NotMyCardError;
