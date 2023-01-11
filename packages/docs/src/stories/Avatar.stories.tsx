import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/EvertonMattos.png',
    alt:'Everton Mattos'
  },
  argTypes:{
    src:{
      control:{
        type:'text'
      }
    }
  }
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {
  args:{
    src:undefined
  }
}