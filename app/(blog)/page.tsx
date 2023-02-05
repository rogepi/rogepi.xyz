import Image from 'next/image'
import Link from 'next/link'
import { Button } from '~/components/ui/button'

import Hero from '../../public/images/pmb.png'
export default async function Home() {
  return (
    <>
      <section className="mt-10">
        <Image src={Hero} width={150} alt="Hero image" priority />
        <h1 className="my-5 text-3xl font-bold sm:text-4xl lg:text-5xl">
          Hello, I&apos;m rogepi
        </h1>
        <p className="text-sm text-slate-700 dark:text-slate-300 sm:text-base">
          A front-end developer / coffee lover / Pokémon master
        </p>
        <div className="my-5 flex gap-5">
          <Link href="https://github.com/rogepi" target="_blank">
            <Button>Github</Button>
          </Link>
          <Link href="https://juejin.cn/user/3438928104002856" target="_blank">
            <Button variant="subtle">Juejin</Button>
          </Link>
        </div>
      </section>

      <section className="mt-10">
        <h1 className="my-5 text-2xl font-bold sm:text-3xl lg:text-4xl">
          Blog
        </h1>
      </section>
    </>
  )
}
