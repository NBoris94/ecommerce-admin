import Link from "next/link"

const Navigation = () => {
  return (
    <nav>
      <Link href="/">Главная</Link>
      <Link href="/categories">Категории</Link>
    </nav>
  )
}

export default Navigation
