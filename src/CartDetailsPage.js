import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Text, VStack, Divider, Button, Flex } from '@chakra-ui/react';
import { removeFromCart, updateQuantity, clearCart } from './redux/actions';
import CartItemCard from './components/CartItemCard';

const CartDetailsPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.items);

  // functions to dispatch the approriate redux actions from the UI
  ////////
  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleUpdateQuantity = (productId, quantity) => {
    dispatch(updateQuantity(productId, quantity));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  ////////

  // calculates total cost of all items
  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <Box p="4">
      <VStack spacing="4" align="stretch">
        <Box>
          <Text fontSize="2xl" fontWeight="bold">Your Cart</Text>
          <Divider my="2" />
          {cart.map((item, index) => (
            <CartItemCard
              key={index}
              product={item}
              onRemoveFromCart={handleRemoveFromCart}
              onUpdateQuantity={handleUpdateQuantity}
            />
          ))}
          { cart.length > 1 ? 
            <Flex justify="flex-end">
              <Button colorScheme="red" mt="4" onClick={handleClearCart}>Clear Cart</Button>
            </Flex> :
            <div></div>
          }
        </Box>
        <Box>
          <Text fontSize="xl">Cart Summary</Text>
          <Divider my="2" />
          <Text>Total Amount: ${calculateTotalAmount().toFixed(2)}</Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default CartDetailsPage;
