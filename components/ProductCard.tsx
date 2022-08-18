// imported 'useState' for state control and 'FC' for defining component type
import { useState, FC } from 'react';

// imported types
import { ProductProps } from '../types/types' ;

// imported 'Image' component and specific type for imported image data
import Image, { StaticImageData } from 'next/image';

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
} from '@chakra-ui/react';
import Link from 'next/link';

// component name with FC type
const ProductCard: FC<ProductProps> = ({ item }) => {

  // for holding color state
  const [img, setImg] = useState<StaticImageData>(item.colors[0].imgData);
  const [colorName, setColorName] = useState<string>(item.colors[0].colorName);
  
  // invoked when hovering
  const handleMouseEnter = (imageData: StaticImageData , colorName: string) => {
    setImg(imageData);
    setColorName(colorName);
    console.log(`changed to ${colorName}`);
  }

  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Link href={`/${item.slug}`}>
          <a>
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
          </a>
        </Link>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            {item.brandName}
          </Text>
          <Heading fontSize={'md'} fontFamily={'body'} fontWeight={500}>
            {/* product name changes in accordance with selected color */}
            {item.productName}, {colorName}
          </Heading>

          {/* color change events implemented below */}
          <Stack direction={['column', 'row']} spacing='24px'>
            {item.colors.map((color) => (
              <Box
                key={color.colorName}
                onMouseEnter={() => handleMouseEnter(color.imgData, color.colorName)} 
                w='20px' 
                h='20px' 
                bg={color.colorHex} 
              />
            ))}
          </Stack>

          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={600} fontSize={'xl'}>
              ¥{item.price}
            </Text>
            <Text textDecoration={'line-through'} color={'gray.600'}>
              ¥{item.price * 1.3}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}

export default ProductCard;