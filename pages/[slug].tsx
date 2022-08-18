import {
  Box,
  Container,
  Stack,
  Text,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
} from '@chakra-ui/react';
import Image, { StaticImageData } from 'next/image';

import { useRouter } from 'next/router';
import type { NextPage } from 'next';

import { productItems } from '../utils/data';
import { useState } from 'react';
import { Product } from '../types/types';

// for when image is not found
import defaultImg from '../public/1.jpg';

const ProductDetails: NextPage = () => {
  
  const router = useRouter();
  const { slug } = router.query;

  // looking for an item which has the same slug and assigned to a variable
  let product = productItems.find((productItem: Product) => {
    return productItem.slug === slug
  });
  
  
  // As useState catches an error, condition was made here
  let initialImg: StaticImageData;
  if (product) {
    initialImg = product.colors[0].imgData
  } else {
    initialImg = defaultImg;
  }

  const [img, setImg] = useState<StaticImageData>(initialImg);
  const [colorName, setColorName] = useState<string>('');
  
  // invoked when hovering
  const handleMouseEnter = (imageData: StaticImageData , colorName: string) => {
    setImg(imageData);
    setColorName(colorName);
    // console.log(`changed to ${colorName}`);
  }

  // console.log(product);
  if (!product) {
    return <div>Product Not Found</div>
  }
  
  return (
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Flex>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            boxShadow='md'
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              shadow: 1,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}
          >
            <Image
              height={230}
              width={282}
              objectFit={'fill'}
              src={img}
            />
          </Box>
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              {product.productName}, {colorName}
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
              $ {product.price}
            </Text>
          </Box>


          {/* color change events implemented below */}
          <Stack direction={['column', 'row']} spacing='24px'>
            {product.colors.map((color) => (
              <Box
                key={color.colorName}
                onMouseEnter={() => handleMouseEnter(color.imgData, color.colorName)} 
                w='20px' 
                h='20px' 
                bg={color.colorHex} 
              />
            ))}
          </Stack>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}
              >
                {product.brandName}
              </Text>
              <Text fontSize={'lg'}>
                {product.description}
              </Text>
            </VStack>

          </Stack>

          <Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}>
            Add to cart
          </Button>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}

export default ProductDetails;