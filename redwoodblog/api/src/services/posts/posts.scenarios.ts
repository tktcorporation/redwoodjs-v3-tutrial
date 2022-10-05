import type { Prisma, Post } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PostCreateArgs>({
  post: {
    one: {
      data: {
        title: 'String',
        body: 'String',
        updatedAt: '2022-10-05T22:24:44Z',
      },
    },
    two: {
      data: {
        title: 'String',
        body: 'String',
        updatedAt: '2022-10-05T22:24:44Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Post, 'post'>
