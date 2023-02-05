import { Search } from 'lucide-react'
import Link from 'next/link'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'

export default function Posts() {
  return (
    <>
      <h1 className="my-5 text-3xl font-bold sm:text-4xl lg:text-5xl">Post</h1>
      <p className="text-sm text-slate-700 dark:text-slate-300 sm:text-base">
        Add, delete and modify articles
      </p>
      <div className="mt-8 flex items-center justify-between">
        <Link href="/dashboard/post/new">
          <Button>New</Button>
        </Link>
        <div className="flex gap-3">
          <Input className="max-w-[300px]" placeholder="Title..." />
          <Button variant="subtle">
            <Search size={20} />
          </Button>
        </div>
      </div>
    </>
  )
}
