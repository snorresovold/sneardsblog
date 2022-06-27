import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.PostCreateArgs>({
  post: {
    one: {
      data: {
        title: 'String',
        slug: 'String2165430',
        author: 'String',
        body: 'String',
      },
    },
    two: {
      data: {
        title: 'String',
        slug: 'String5623515',
        author: 'String',
        body: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
