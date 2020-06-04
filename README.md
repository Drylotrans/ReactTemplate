# ReactTemplate
Just start creating a React App.
You can create an API or something like that editing the `server.js` and adding some cool things.

You should import every file (.jsx, .js, .png, .svg, .css) inside a JSX o JS file.
Example:
```jsx
import logo from "../assets/logo.svg"; // .png files are also supported
import styles from "../styles/App.css";

// The name of the classes will be '[local]-[hash:base64:6]' ('yourClass-1ECm9i')
function App() {
  return (<div className={styles.yourClass}>
    <img src={logo} alt="Logo of my app" />
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
**Starting a local server for development**: `npm run test`.

**Building**: `npm run build`.

**Getting your website working**: `npm run start`.
