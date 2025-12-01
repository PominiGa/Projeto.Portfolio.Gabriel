export default function Header() {
return (
<header className="border-b border-gray-200 dark:border-gray-800">
<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
<a className="text-xl font-bold text-indigo-600 dark:text-indigo-400" href="#home">
SeuNome.dev
</a>


<nav>
<ul className="flex gap-6 text-sm">
<li><a href="#projects" className="hover:text-indigo-500">Projetos</a></li>
<li><a href="#about" className="hover:text-indigo-500">Sobre</a></li>
<li><a href="#contact" className="hover:text-indigo-500">Contato</a></li>
</ul>
</nav>
</div>
</header>
);
}