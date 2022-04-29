import React from 'react';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { ThemeContext } from './src/Theme/theme-context';
import { store } from './src/app/store';
import HeaderMenu from './src/HeaderMenu/HeaderMenu';
import Game from './src/Game/Game';

const App = () => {

  const [theme, setTheme] = React.useState('dark');

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  return (
    <Provider store={store}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ApplicationProvider {...eva} theme={eva[theme]}>
          <HeaderMenu />
          <Game />
        </ApplicationProvider>
      </ThemeContext.Provider>
    </Provider>
  );
}

export default App;