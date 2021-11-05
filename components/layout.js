import Nav from "./nav";
import Footer from "./footer";
import { useRouter } from "next/router";

function Layout({ children }) {
  const router = useRouter();
  return (
    <>
      <Nav></Nav>
      <main
        className={
          "h-40 mt-16 min-h-screen" +
          (router.pathname == "/organizacional"
            ? " bg-green-700"
            : " bg-blue-400")
        }
      >
        {children}
      </main>
      <Footer></Footer>
    </>
  );
}

export default Layout;
