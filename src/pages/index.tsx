import type { NextPage } from 'next'
import { Button } from 'components/button'
import { Button as DSButton } from 'design-system'
import { Button as SBButton } from 'share'
import styles from 'styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <DSButton />
      <SBButton label='storybook button' primary />
      <Button />
    </div>
  )
}

export default Home
