# steps to deploy vite-react app on github-pages

## set base url config

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/vite-deploy/",
});
```

## set router path

```js
const router = createBrowserRouter(
  createRoutesFromElements(
    // right here ⬇️, define base path
    <Route path="/vite-deploy/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />

      <Route
        path="*"
        element={
          <div className="bg-red-600 text-sky-50 text-3xl">Page Not Found</div>
        }
      />
    </Route>
  )
);
```

## set base path in NavLinks

```js
const Navbar = () => {
  const basePath = "/vite-deploy"; // Define the base path
  return (
    <>
      <NavLink
        to={`${basePath}/`} {/* Use base path*/}
      >
        Home
      </NavLink>
      
      <NavLink
        to={`${basePath}/`} {/* Use base path */}
      >
        Home
      </NavLink>
    </>
  );
};
```


## create yml for workflow
```bash
.github/workflows/deploy.yml
```
  * Copy & Paste workflow from [Vite Static Deploy](https://vitejs.dev/guide/static-deploy.html)

## stage, commit and push
```bash
git add .
git commit - "deploy config"
git push -u origin main
```

## set Read & Write Permission of GitHub
 * Go to `GitHub Repo` -> `Settings` -> `Actions` -> `General`
 * Scroll to find `Workflow permissions`
 * SELECT `Read and write permissions`
 * **Save it**

## set source of deployment
 * Go to `GitHub Repo` -> `Settings` -> `Pages`
 * Then go to `Build & Deployment` -> `source` -> `GitHub Actions`

## Configure GitHub-Pages
if you have gh-pages branch or any other branch specifically for deployment, you can configure for it too
  * Go to `Settings` → `Pages`
  * Under Source, choose "`Deploy from branch`" and select the "`gh-pages`" branch.
  * Click **Save**