import { motion } from "framer-motion";
import usePrefersReducedMotionSafe from "../../hooks/usePrefersReducedMotionSafe";
import waves from "../../assets/waves.svg";


export default function Hero() {
const reduce = usePrefersReducedMotionSafe();


return (
<section id="home" className="relative overflow-hidden py-24">
<div className="max-w-6xl mx-auto px-6">
<motion.h1
initial={!reduce ? { opacity: 0, y: 20 } : false}
animate={!reduce ? { opacity: 1, y: 0 } : false}
transition={{ duration: 0.6 }}
className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4"
>
Desenvolvedor FullStack
</motion.h1>


<p className="max-w-2xl text-gray-600 dark:text-gray-300 text-lg">
Crio interfaces acessíveis, modernas e rápidas.
</p>
</div>


{/* VINHETA de fundo */}
<img
src={waves}
alt=""
aria-hidden="true"
className="absolute bottom-0 left-0 w-full opacity-20 dark:opacity-10"
/>
</section>
);
}