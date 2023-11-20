import React from 'react';
import { Box, Image, Text, Button, Flex } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

const ProductCard = ({ product, isAddedToCart, onAddToCart }) => {
  return (
    <Flex borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" direction="column">
        <Box p="6">
            <Flex height="200px" align="center" justify="center">
                <Image src={product.image} alt={product.title} maxH="100%" maxW="100%" objectFit="contain" />
            </Flex>
            <Text fontSize="xl" fontWeight="semibold" lineHeight="short">
                {product.title}
            </Text>
            <Text fontSize="lg" color="gray.500" mt="2">
                ${product.price.toFixed(2)}
            </Text>
        </Box>
        <Box mt="auto" p="6">
            {isAddedToCart ? (
                <Button variant="outline" colorScheme="green" leftIcon={<CheckIcon />} width="100%" isDisabled>
                    Added to Cart
                </Button>
            ) : (
                <Button onClick={() => onAddToCart(product)} width="100%">
                    Add to Cart
                </Button>
            )}
            
        </Box>
    </Flex>
  );
};

export default ProductCard;