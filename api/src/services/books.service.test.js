const BookService = require('./books.service');

const fakeBooks = [
  {
    _id: 1,
    name: 'Harry Potter',
  },
];

const spyGetAll = jest.fn();

const MongoLibStub = {
  getAll: spyGetAll(),
  create: () => {},
};

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => MongoLibStub));

describe('Test for BookService', () => {
  let service;
  beforeEach(() => {
    service = new BookService();
    jest.clearAllMocks();
  });

  describe('Test for getBooks', () => {
    test('Should return a list book', async () => {
      // Arrange
      spyGetAll.mockResolveValue(fakeBooks);
      // Act
      const books = await service.getBooks();
      console.log(books);
      // Assert
      expect(books.length).toEqual(1);
      expect(spyGetAll).toHaveBeenCalled();
      expect(spyGetAll).toHaveBeenCalledWith('books', {});
    });

    test('Should return a list book', async () => {
      // Arrange
      // Act
      const books = await service.getBooks();
      console.log(books);
      // Assert
      expect(books[0].name).toEqual('Harry Potter');
    });
  });
});
