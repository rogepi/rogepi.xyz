'use client'

import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

export default function Tiptap() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World! 🌎️</p>',
  })

  return (
    <div>
      <button onClick={() => editor?.chain().focus().toggleBold().run()}>
        Bold
      </button>
      <EditorContent editor={editor} />
    </div>
  )
}
