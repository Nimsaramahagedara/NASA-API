import Section01 from "../components/Home/Section01"
import Section02 from "../components/Home/Section02"


const Home = () => {

    return (
        <div className="w-full bg-gradient-to-br from-blue-950 via-green-700 to-red-950">
            <div className="w-full md:w-1/2 mx-auto">
                <Section01 />
                <Section02 />
            </div>

        </div>
    )
}

export default Home