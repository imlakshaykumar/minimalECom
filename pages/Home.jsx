import { Banner1 } from "../src/components/Banner1"
import { Banner2 } from "../src/components/Banner2"
import { HomeSection } from "../src/components/HomeSection"
import { ProudSection } from "../src/components/ProudSection"
import { Trending } from "../src/components/Trending"

// eslint-disable-next-line react/prop-types
export const Home = ({ setCategory }) => {
    return (
        <>
            <main>
                <HomeSection setCategory={ setCategory } />
                <ProudSection />
                <Banner1 />
                <Trending />
                <Banner2 />
            </main>
        </>
    )
}
