import { Routes, Route } from 'react-router-dom';
import { Navbar } from '../components/ui/Navbar';

import { DcScreen } from '../components/dc/DcScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';


const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container">
                <Routes>
                    <Route path="/marvel" element={<MarvelScreen />} />
                    <Route path="/hero/:heroeId" element={<HeroScreen />} />
                    <Route path="/dc" element={<DcScreen />} />
                    <Route path="/" element={<MarvelScreen />} />
                </Routes>
            </div>
        </>
    )
}

export default DashboardRoutes
