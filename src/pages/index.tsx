import logo from "@/assets/logo.svg"
import styles from "@/styles/index.module.css"

const Index = () => (
  <div class={styles.App}>
    <header class={styles.header}>
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
    </header>
  </div>
)

export default Index
