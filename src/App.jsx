import RootLayout from "./components/RootLayout";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";

let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout />}>
    <Route index element={<Home />}></Route>
    <Route path="/product" element={<Products />}></Route>
  </Route >
))

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}