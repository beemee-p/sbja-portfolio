import Image from "next/image";
import { ReactElement } from "react";

const Banner = (): ReactElement => {
  return (
    <section>
      <Image
        src="/images/banner-test.png"
        alt="banner-test"
        width={500}
        height={300}
        priority={true}
      />
    </section>
  );
};

export default Banner;
