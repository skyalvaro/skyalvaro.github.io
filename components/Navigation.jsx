import styles from './Navigation.module.css'
import Link from 'next/link'

const links = [{
  label: 'Marvel',
  route: '/'
}, {
  label: 'Characters',
  route: '/characters'
}, {
  label: 'Comics',
  route: '/comics'
}, {
  label: 'Creators',
  route: '/creators'
}, {
  label: 'Events',
  route: '/events'
}, {
  label: 'Series',
  route: '/series'
}, {
  label: 'Stories',
  route: '/stories'
}
]

export function Navigation () {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navigation}>
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
