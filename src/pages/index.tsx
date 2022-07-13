import type { NextPage } from 'next'
import { Button } from 'components/button'
import { Button as SBButton } from 'design'
import styles from 'styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <SBButton label='storybook button' primary />
      <Button />
    </div>
  )
}

export default Home
