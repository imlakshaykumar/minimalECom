import { Banner1 } from "../src/components/Banner1"
import { Banner2 } from "../src/components/Banner2"
import { HomeSection } from "../src/components/HomeSection"
import { ProudSection } from "../src/components/ProudSection"

export const Home = () => {
    return (
        <>
            <main>
                <HomeSection />
                <ProudSection />
                <Banner1 />
                <Banner2 />
            </main>
        </>
    )
}
