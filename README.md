# ReactTemplate
Just start creating a React App.
You can create an API or something like that editing the `server.js` and adding some cool things.

You should import every file (.jsx, .js, .png, .svg, .jpg, .jpeg, .gif, .css) inside a JSX o JS file.
Example:
```jsx
// Assuming you have a folder `src/client/assets` and `src/client/styles`...
import logo from '../assets/logo.svg'; // .png/jpg/jpeg/gif files are also supported
import styles from '../styles/App.css';

// The name of the classes will be '[local]-[hash:base64:6]' ('yourClass-1ECm9i')
export function App() {
  return (<div className={styles.yourClass}>
    <img src={logo} alt='Logo of my app' />
    <div className={`${styles.oneClass} ${styles.anotherClass}`}>My App!</div>
  </div>);
}
```

## How to use it
- `git clone https://github.com/Drylotrans/ReactTemplate`
- `cd ReactTemplate`
- `npm install`

And start coding!


## Scripts
**Linter**: `npm run eslint`. (or `npm run eslint:fix` to fix all fixable errors/warns) - I didn't put eslint inside webpack because it's up to you if you want to run it. Also for performance reasons.

**Building**: `npm run build`.

**Getting your website working**: `npm run start`.