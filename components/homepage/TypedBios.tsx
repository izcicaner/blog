import React from 'react'
import Typed from 'typed.js'
import { Twemoji } from '../Twemoji'

export function TypedBios() {
  let el = React.useRef(null)
  let typed = React.useRef(null)

  React.useEffect(() => {
    typed.current = new Typed(el.current, {
      stringsElement: '#bios',
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
      backDelay: 1000,
    })
    return () => typed.current.destroy()
  }, [])

  return (
    <div>
      <ul id="bios" className="hidden">
        <li>I'm a learner, builder, and freedom seeker.</li>
        <li>I am a kind of minimalist, I believe in simplicity in both life and coding.</li>
        <li>I'm focusing on distributed systems & software architecture.</li>
        <li>I mainly work with C# based on the current version of .NET. </li>
        <li>I'm currently learning Rust <Twemoji emoji="crab" />.</li>
        <li>I have been actively trading in cryptocurrency markets since 2017.</li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  )
}
