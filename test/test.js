const userAuth = require('./userAuth');
const productService = require('./productService');

// Test case for Login function
test('Check if user can Login', () => {
  expect(userAuth.Login('exampleuser', 'examplepassword')).toBe(true);
});

// Test case for Register function
test('Check if user can Register', () => {
  expect(userAuth.Register('exampleuser', 'exampleemail', 'examplepassword')).toBe(true);
});

// Test case for ForgotPassword function
test('Check if user can Reset Password', () => {
  expect(userAuth.ForgotPassword('exampleemail')).toBe(true);
});

// Test case for addProduct function
test('Test addProduct function', () => {
  const product = {
    name: 'Product 1',
    price: 100,
  };
  expect(productService.addProduct(product)).toEqual({
    id: expect.any(Number),
    name: 'Product 1',
    price: 100,
  });
});

