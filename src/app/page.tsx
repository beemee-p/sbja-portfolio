import { PAGE_TYPE } from "@/utils/Constants";
import { DeviceProvider } from "@/components/DeviceContext";
import ListWap from "@/components/ListWrap";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <DeviceProvider>
      <Header pageType={PAGE_TYPE.MAIN} />
      <main>
        <Banner />
        <ListWap />
      </main>
      <Footer pageType={PAGE_TYPE.MAIN} />
    </DeviceProvider>
  );
}
