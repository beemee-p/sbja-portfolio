import ListWap from "@/components/ListWrap";
import Banner from "@/components/Banner";
import { DeviceProvider } from "@/components/DeviceContext";

export default function Home() {
  return (
    <DeviceProvider>
      <main>
        <Banner />
        <ListWap />
      </main>
    </DeviceProvider>
  );
}
