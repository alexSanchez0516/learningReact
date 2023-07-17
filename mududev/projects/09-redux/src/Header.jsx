import { useSelector } from "react-redux"

export function Header() {
  const count = useSelector((state) => state.counter)
  console.log(count)
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#">menu1</a></li>
          <li><a href="#">menu2</a></li>
        </ul>
      </nav>
    </header>
  )
}