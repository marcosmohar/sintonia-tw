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
          "mt-14 min-h-screen relative z-10" +
          (router.pathname == "/organizacional" ? " bg-white" : " bg-white")
        }
      >
        {children}
      </main>
      <Footer></Footer>
    </>
  );
}

export default Layout;
