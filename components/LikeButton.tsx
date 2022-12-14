import { HTMLChakraProps, Box, chakra, Icon, Tooltip } from '@chakra-ui/react'
import { HTMLMotionProps, motion, useAnimation } from 'framer-motion'
import { useState, FC } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

export type LikeButtonProps = {
  isLiked: boolean
}

const LikeButton: FC<LikeButtonProps> = (props: LikeButtonProps) => {
  const [isLike, setIsLike] = useState<boolean>(false)
  const controls = useAnimation()

  const toggleLike = async () => {
    await setIsLike(!isLike)
    controls.start({
      scale: [0.9, 1.1, 1.2, 1.2, 1],
      color: ['#FFF5F5', '#FED7D7', '#FEB2B2', '#FC8181', '#F56565'],
   })
  }

  type Merge<P, T> = Omit<P, keyof T> & T
  type MotionBoxProps = Merge<HTMLChakraProps<'div'>, HTMLMotionProps<'div'>>

  const MotionBox: FC<MotionBoxProps> = motion(chakra.div)

  return (
    <Box display="flex" alignItems="center" color="gray.500">
      <Tooltip label="いいね！" bg="gray.400" fontSize="11px">
        <MotionBox
          cursor="pointer"
          onClick={toggleLike}
          animate={controls}
          transition={{ duration: 0.2 }}
        >
          <Icon
            as={isLike ? AiFillHeart : AiOutlineHeart}
            mr="2.5"
            fontSize="22px"
            color={isLike ? 'red.400' : ''}
          />
        </MotionBox>
      </Tooltip>
    </Box>
  )
}

export default LikeButton;