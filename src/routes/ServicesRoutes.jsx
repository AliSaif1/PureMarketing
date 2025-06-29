import { Routes, Route } from "react-router-dom";
import Services from "../pages/Services";
import WebDevelopment from "../components/services/WebDevelopment";
import Branding from "../components/services/Branding";
import WordPressDevelopmentPage from "../components/services/WordPressPage";
import MobileApp from "../components/services/MobileApp";
import DigitalMarketing from "../components/services/DigitalMarketing"
import SocialMedia from "../components/services/SocialMedia"
import SEOServicesPage from "../components/services/SEOPage"
import WebMaintenancePage from "../components/services/WebMaintenance"
import BrandStrategyIdentityPage from "../components/services/BrandStrategy"
import ContentCreationPage from "../components/services/ContentCreation"
// import PrintDesign from "../components/services/PrintDesign"

export default function ServicesRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Services />} />
            <Route path="web-development" element={<WebDevelopment />} />
            <Route path="wordpress-development" element={<WordPressDevelopmentPage />} />
            <Route path="ads" element={<Branding />} />
            <Route path="mobile-app-development" element={<MobileApp />} />
            <Route path="digital-marketing" element={<DigitalMarketing />} />
            <Route path="social-media" element={<SocialMedia />} />
            {/* <Route path="print-design" element={<PrintDesign />} /> */}
            <Route path="seo" element={<SEOServicesPage />} />
            <Route path="maintenance" element={<WebMaintenancePage />} />
            <Route path="branding" element={<BrandStrategyIdentityPage />} />
            <Route path="content" element={<ContentCreationPage />} />
        </Routes>
    );
}