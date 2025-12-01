export default function Footer() {
return (
<footer className="border-t border-gray-200 dark:border-gray-800 mt-16">
<div className="max-w-6xl mx-auto px-6 py-6 text-sm text-gray-600 dark:text-gray-400 flex justify-between">
<span>© {new Date().getFullYear()} Seu Nome. Todos direitos reservados.</span>
<div className="flex gap-4">
<a href="#">GitHub</a>
<a href="#">LinkedIn</a>
</div>
</div>
</footer>
);
}