import { Banner1 } from "../components/Banner1"
import { Banner2 } from "../components/Banner2"
import { HomeSection } from "../components/HomeSection"
import { ProudSection } from "../components/ProudSection"
import { Trending } from "../components/Trending"

export const Home = ({
    setCategory,
    bannerImage_1,
    bannerImage_2,
    homeData,
    proudFilterData,
    trendingData
}) => {
    return (
        <>
            <main>
                <HomeSection
                    setCategory={ setCategory }
                    homeData={ homeData }
                />
                <ProudSection
                    proudFilterData={ proudFilterData }
                />
                <Banner1
                    bannerImage_1={ bannerImage_1 }
                />
                <Trending
                    trendingData={ trendingData }
                />
                <Banner2
                    bannerImage_2={ bannerImage_2 }
                />
            </main>
        </>
    )
}

Home.propTypes;
