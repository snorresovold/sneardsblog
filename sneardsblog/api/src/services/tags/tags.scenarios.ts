import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.TagCreateArgs>({
  tag: {
    one: { data: { name: 'String6272887' } },
    two: { data: { name: 'String6801886' } },
  },
})

export type StandardScenario = typeof standard
