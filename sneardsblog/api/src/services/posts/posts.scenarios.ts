import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.PostCreateArgs>({
  post: {
    one: {
      data: {
        title: 'String',
        slug: 'String4545844',
        author: 'String',
        body: 'String',
      },
    },
    two: {
      data: {
        title: 'String',
        slug: 'String1748589',
        author: 'String',
        body: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
