'use client'

import * as React from 'react'
import EditorJS from '@editorjs/editorjs'
import type { Post } from '@prisma/client'

import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { postPatchSchema } from '~/lib/validations/post'

interface EditorProps {
  content: any
}
type FormData = z.infer<typeof postPatchSchema>

const Editor = React.forwardRef(({ content }: EditorProps, ref) => {
  const editorRef = React.useRef<EditorJS | null>()

  React.useImperativeHandle(ref, () => {
    return {
      save() {
        return editorRef.current?.save()
      },
    }
  })

  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(postPatchSchema),
  })
  const [isMounted, setIsMounted] = React.useState<boolean>(false)

  async function initializeEditor() {
    const EditorJS = (await import('@editorjs/editorjs')).default
    const Header = (await import('@editorjs/header')).default
    const Embed = (await import('@editorjs/embed')).default
    const Table = (await import('@editorjs/table')).default
    const List = (await import('@editorjs/list')).default
    const Code = (await import('@editorjs/code')).default
    const LinkTool = (await import('@editorjs/link')).default
    const InlineCode = (await import('@editorjs/inline-code')).default

    if (!editorRef.current) {
      const editor = new EditorJS({
        holder: 'editor',
        onReady() {
          editorRef.current = editor
        },
        placeholder: 'start to write...',
        inlineToolbar: true,
        data: content,
        tools: {
          header: Header,
          linkTool: LinkTool,
          list: List,
          code: Code,
          inlineCode: InlineCode,
          table: Table,
          embed: Embed,
        },
      })
    }
  }

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMounted(true)
    }
  }, [])

  React.useEffect(() => {
    if (isMounted) {
      initializeEditor()

      return () => {
        editorRef.current?.destroy()
        editorRef.current = null
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMounted])

  if (!isMounted) {
    return null
  }
  return (
    <>
      <div
        id="editor"
        className="prose prose-zinc dark:prose-invert min-h-[500px] max-w-none "
      />
      <p className="text-sm text-gray-500">
        Use{' '}
        <kbd className="rounded-md border bg-slate-50 px-1 text-xs uppercase">
          Tab
        </kbd>{' '}
        to open the command menu.
      </p>
    </>
  )
})

Editor.displayName = 'Editor'

export { Editor }
