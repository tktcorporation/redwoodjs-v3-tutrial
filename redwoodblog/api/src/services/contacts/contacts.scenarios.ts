import type { Prisma, Contact } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ContactCreateArgs>({
  contact: {
    one: {
      data: {
        name: 'String',
        email: 'String',
        message: 'String',
        updatedAt: '2022-10-04T23:47:13Z',
      },
    },
    two: {
      data: {
        name: 'String',
        email: 'String',
        message: 'String',
        updatedAt: '2022-10-04T23:47:13Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Contact, 'contact'>
