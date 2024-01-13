import { useEffect } from 'react'
import  useColorTheme from '../hooks/useColorTheme'

/**
 * Dark mode <-> light mode toggle switch
 * Update cookie value and global state
 *
 * @return {*} JSX.Element
*/

const DarkModeToggleSwitch = () => {
  const { setColorTheme, getCurrentColorThemeState } = useColorTheme()

  const currentColorTheme = getCurrentColorThemeState()

  const isDark = currentColorTheme === 'dark'
  
  useEffect(() => {
    console.log(isDark)

  }, [isDark])

  const toggleDarkTheme = () => {
    isDark ? setColorTheme('light') : setColorTheme('dark')
  }

  return (
    <>
      ...
      <input type='checkbox' checked={isDark} onChange={toggleDarkTheme} />
      ...
    </>
  )
}

export default DarkModeToggleSwitch