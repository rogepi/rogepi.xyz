import * as z from 'zod'

export const postPatchSchema = z.object({
  title: z.string().max(120).optional(),

  content: z.any().optional(),
})
