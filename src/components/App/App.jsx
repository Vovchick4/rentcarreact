import routes from "../../config/routes";

export default function App() {
  return (
    <div className="App">
      {routes.map(({ component: Component, path, ...route }) => (
        <div key={path}>
          <Component />
        </div>
      ))}
    </div>
  );
}
