import logo from "@/assets/logo.svg"
import styles from "@/styles/index.module.css"
import { useDark } from "@colid/core"

const Index = () => {
  const [dark, setDark] = useDark()

  return (
    <div class={styles.App}>
      <header class={styles.header} dark:bg="#282c34" dark:color-white>
        <img src={logo} class={styles.logo} alt="logo" />
        <p mt-8>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
          flex
          items-center
        >
          <div i-carbon-bat inline-block mr-2 /> Learn Solid
        </a>

        <div
          i-carbon-moon
          cursor-pointer
          dark:i-carbon-sun
          onclick={() => setDark(!dark())}
        ></div>
      </header>
    </div>
  )
}

export default Index
