import type { NextPage } from 'next'
import { Button } from 'components/button'
import { Button as DSButton } from 'design-system'
import { Button as SBButton } from 'storybook'
import styles from 'styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <DSButton />
      <SBButton label='storybook button' />
      <Button />
    </div>
  )
}

export default Home
