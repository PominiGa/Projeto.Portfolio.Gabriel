export default function ContactForm() {
return (
<section id="contact" className="max-w-4xl mx-auto px-6 py-16">
<h2 className="text-2xl font-bold mb-6">Contato</h2>


<form className="grid grid-cols-1 md:grid-cols-2 gap-4">
<input className="p-3 rounded bg-gray-100 dark:bg-gray-800" placeholder="Nome" />
<input className="p-3 rounded bg-gray-100 dark:bg-gray-800" placeholder="E-mail" />
<textarea className="p-3 rounded bg-gray-100 dark:bg-gray-800 md:col-span-2" placeholder="Mensagem" />
<button className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow hover:bg-indigo-700 md:col-span-2">
Enviar mensagem
</button>
</form>
</section>
);
}