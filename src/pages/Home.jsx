import { Banner1 } from "../components/Banner1"
import { Banner2 } from "../components/Banner2"
import { HomeSection } from "../components/HomeSection"
import { ProudSection } from "../components/ProudSection"
import { Trending } from "../components/Trending"

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
