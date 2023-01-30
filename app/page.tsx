import Image from 'next/image'
import { Button } from '~/components/ui/button'

import Hero from '../public/images/pmb.png'
export default function Home() {
  return (
    <>
      <section className="container mt-10">
        <Image src={Hero} width={150} alt="Hero image" priority />
        <h1 className="my-5 text-3xl font-bold sm:text-4xl lg:text-5xl">
          你好呀 我是阿荣！
        </h1>
        <p className="text-sm text-slate-700 dark:text-slate-300 sm:text-base">
          一个前端开发者、咖啡爱好者、宝可梦训练家，喜欢探究新的开源项目
        </p>
        <div className="my-5 flex gap-5">
          <Button>Github</Button>
          <Button variant="subtle">掘金</Button>
        </div>
      </section>

      <section className="container mt-10">
        <h1 className="my-5 text-2xl font-bold sm:text-3xl lg:text-4xl">
          最新文章
        </h1>
      </section>
    </>
  )
}
