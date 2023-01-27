import Hero from '../public/images/pmb.png'

import Image from 'next/image'
import Tiptap from '~/components/tiptap'

export default function Home() {
  return (
    <>
      <section className="container max-w-[800px] mt-10">
        <Image src={Hero} width={150} alt="Hero image" priority />
        <h1 className="my-5 text-3xl font-bold sm:text-4xl lg:text-5xl">
          你好呀 我是阿荣！
        </h1>
        <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">
          一个前端开发者、咖啡爱好者、宝可梦训练家，喜欢探究新的开源项目
        </p>
        <div className="my-5 flex gap-5">
          <button className="btn-p" type="button">
            Github
          </button>
          <button className="btn" type="button">
            掘金
          </button>
        </div>
      </section>
      <section className="container max-w-[800px] mt-10">
        <Tiptap />
      </section>
      <section className="container max-w-[800px] mt-10">
        <h1 className="my-5 text-2xl font-bold sm:text-3xl lg:text-4xl">
          最新文章
        </h1>
      </section>
    </>
  )
}
