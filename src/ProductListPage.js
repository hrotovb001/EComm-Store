import React, { useEffect, useState } from 'react';
import { SimpleGrid, Box, Button, Flex } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './redux/actions';
import ProductCard from './components/ProductCard';
import { Link } from 'react-router-dom';

const ProductListPage = () => {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const cart = useSelector(state => state.items);
    const pageLength = 20;

    // fetch the products when the number of pages changes
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products?limit=${pageLength * page}`)
        .then(response => response.json())
        .then(data => {
            setPage(Math.ceil(data.length / pageLength));
            setProducts(data);
        });
    }, [page]);

    // function to handle dispatching the addToCart redux action
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    // get the total number of items in the cart
    const numItems = () => {
        return cart.reduce((total, item) => total + (item.quantity > 0), 0);
    };

    // handles incrementing the last page number when the user scrolls to the bottom
    useEffect(() => {
        const handleScroll = () => {
            if(window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight - 0.5){
                if(page < 5) setPage(prevPage => prevPage + 1);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [page]);

    // returns whether a current product id is in the cart
    const isAddedToCart = (productId) => {
        return cart.some(item => item.id === productId);
    }

    return (
        <div>
            <Flex justify="flex-end" p="4">
                <Link to="/cart">
                    <Button colorScheme="teal" variant="outline" size="md" mb={4}>
                        View Cart ({numItems()} items)
                    </Button>
                </Link>
            </Flex>
            <Box mx="auto" maxW="1200px" p="4">
                <SimpleGrid columns={{ base: 2, md: 4 }} spacing="40px">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} isAddedToCart={isAddedToCart(product.id)} onAddToCart={handleAddToCart} />
                    ))}
                </SimpleGrid>
            </Box>
        </div>
    );
};

export default ProductListPage;
