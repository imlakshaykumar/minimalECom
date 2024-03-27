import { Banner1 } from "../src/components/Banner1"
import { Banner2 } from "../src/components/Banner2"
import { HomeSection } from "../src/components/HomeSection"
import { NewsLetter } from "../src/components/NewsLetter"
import { ProudSection } from "../src/components/ProudSection"
import { Trending } from "../src/components/Trending"

export const Home = () => {
    return (
        <>
            <main>
                <HomeSection />
                <ProudSection />
                <Banner1 />
                <Trending />
                <Banner2 />
                <NewsLetter />
            </main>
        </>
    )
}
