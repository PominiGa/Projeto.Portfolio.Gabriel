import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import SkipLink from "../components/layout/SkipLink";
import Hero from "../components/hero/Hero";
import ProjectsGrid from "../components/projects/ProjectGrid";
import AboutSection from "../components/about/AboutSection";
import ContactForm from "../components/contact/ContactForm";


export default function HomePage() {
return (
<div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 antialiased">
<SkipLink />
<Header />
<main id="main">
<Hero />
<ProjectsGrid />
<AboutSection />
<ContactForm />
</main>
<Footer />
</div>
);
}