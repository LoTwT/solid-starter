import logo from "@/assets/logo.svg"
import { useDark } from "@colid/core"

const Index = () => {
  const [dark, setDark] = useDark()

  return (
    <div text-center>
      <header
        min-h-screen
        flex
        flex-col
        justify-center
        items-center
        text-size="[calc(10px+2vmin)]"
        dark:bg="#282c34"
        dark:color-white
      >
        <img
          src={logo}
          alt="logo"
          h-40vmin
          pointer-events-none
          animate-spin
          animate-duration="20s"
        />
        <p mt-8>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <a
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
          flex
          items-center
          color="#b318f0"
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
