import React from 'react';
import { Box, Text, Button, Image, Flex } from '@chakra-ui/react';

const CartItemCard = ({ product, onRemoveFromCart, onUpdateQuantity }) => {
  const handleIncreaseQuantity = () => {
    onUpdateQuantity(product.id, product.quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    onUpdateQuantity(product.id, product.quantity - 1);
  };

  return (
    <Box borderWidth="1px" borderRadius="md" overflow="hidden" boxShadow="md" p="4">
      <Image src={product.image} alt={product.title} boxSize="200px" objectFit="cover" />
      <Box p="4">
        <Text fontSize="lg" fontWeight="bold">{product.title}</Text>
        <Text>${product.price.toFixed(2)}</Text>
        <Flex align="center" justify="space-between" mt="4">
          <Flex align="center">
            <Button onClick={handleDecreaseQuantity}>-</Button>
            <Text mx="2">{product.quantity}</Text>
            <Button onClick={handleIncreaseQuantity}>+</Button>
          </Flex>
          <Text fontWeight="bold">${(product.price * product.quantity).toFixed(2)}</Text>
        </Flex>
        <Button onClick={() => onRemoveFromCart(product.id)} mt="4" colorScheme="red">Remove</Button>
      </Box>
    </Box>
  );
};

export default CartItemCard;
