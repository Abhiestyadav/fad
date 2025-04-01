import Navbar from "@/components/atoms/Navbar";
import Main from "@/components/organiasm/Main";
import { Footer } from '@/components/molecules/Footer'
export default function Home() {
  return (
    <div className="bg-pink-200 ">
      <Navbar/>
      <Main/>
      <Footer />
    </div>
  );
}
