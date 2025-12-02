import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/hero/Hero";
import AboutSection from "../components/about/AboutSection";
import ContactForm from "../components/contact/ContactForm";


export default function HomePage() {
return (
<div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 antialiased">
<Header />
<main id="main">
<Hero />
<AboutSection />
<ContactForm />
</main>
<Footer />
</div>
);
}