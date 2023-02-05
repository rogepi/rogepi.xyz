'use client'

import * as React from 'react'
import Link from 'next/link'
import type EditorJS from '@editorjs/editorjs'
import TextareaAutosize from 'react-textarea-autosize'
import type { Post } from '@prisma/client'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { postPatchSchema } from '~/lib/validations/post'
import { Button } from '~/components/ui/button'
import { Editor } from '~/components/dashboard/editor'

type FormData = z.infer<typeof postPatchSchema>

export default function New() {
  const post: Pick<Post, 'id' | 'title' | 'content'> = {
    id: '1',
    title: '',
    content: {},
  }

  const ref = React.useRef<EditorJS>(null)
  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(postPatchSchema),
  })

  const [isSaving, setIsSaving] = React.useState(false)

  async function onSubmit(data: FormData) {
    setIsSaving(true)
    const blocks = await ref.current?.save()

    const res = await fetch(`/api/post`)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="my-3 mb-6 flex items-center justify-between">
        <Link href="/dashboard/post">
          <Button variant="subtle">Back</Button>
        </Link>
        <Button type="submit">Save</Button>
      </div>
      <div className="mx-auto w-full max-w-[650px]">
        <TextareaAutosize
          autoFocus
          id="title"
          defaultValue={post.title}
          placeholder="Title..."
          className="w-full resize-none appearance-none overflow-hidden bg-inherit text-4xl font-bold focus:outline-none"
          {...register('title')}
        />
        <Editor content={post.content} ref={ref} />
      </div>
    </form>
  )
}
